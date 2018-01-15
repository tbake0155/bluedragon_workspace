#ifndef CHARIOT_H
#define CHARIOT_H

#include "ros/ros.h"
#include <arpa/inet.h>
#include <netinet/in.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <unistd.h>
#include <bluedragon_netcomm/listener.h>
#include <bluedragon_netcomm/serial_size.h>
#include <bluedragon_netcomm/flag.h>


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// netcomm chariot

class chariot
{
	private:
	   int port_group;
  	   int out_socket;
	   bluedragon_netcomm::flag hso_msg;
	   bluedragon_netcomm::flag hsi_msg;
	   bluedragon_netcomm::flag wait_msg;
	   struct sockaddr_in ss_si;
	   struct sockaddr_in pr_si;
	   struct sockaddr_in no_si;
	   struct sockaddr_in ls_si;
	   struct sockaddr_in tf_si;
	   struct sockaddr_in ra_si;
	   struct sockaddr_in od_si;
	   struct sockaddr_in ma_si;
	   struct sockaddr_in hsi_si;
	   struct sockaddr_in hso_si;
	   struct sockaddr_in wait_si;
 
	public:
	   chariot(){port_group=0;}
	   chariot(int PG, char * ip){port_group=PG; set_port_data(port_group, ip); hso_msg.user_flag=hsi_msg.user_flag=wait_msg.user_flag=false;}
	   ~chariot(){}
	   void set_wait_msg(bool flag){wait_msg.user_flag = flag;}
	   bool get_wait_msg(){return wait_msg.user_flag;}
	   void set_port_data(int PG, char * ip);
	   void to_send_or_not(bool * user, int * sock);
	   void reporting(bool * user, int * sock);
	   void hold_your_horses();
	   void hermes(bluedragon_propulsion::propulsion * propulsion_msg, bluedragon_propulsion::near_objects * near_objects_msg, sensor_msgs::LaserScan * laser_scan_msg, sensor_msgs::Range * range_msg, tf::tfMessage * 			tf_msg, nav_msgs::Odometry * odometry_msg, nav_msgs::OccupancyGrid * map_msg, int * sock, bluedragon_netcomm::serial_size * serial_size_msg);
};


void * thread_runner(chariot * chariot, bool * user, int * sock, bluedragon_propulsion::propulsion * propulsion_msg, bluedragon_propulsion::near_objects * near_objects_msg, sensor_msgs::LaserScan * 			laser_scan_msg, sensor_msgs::Range * range_msg, tf::tfMessage * tf_msg, nav_msgs::Odometry * odometry_msg, nav_msgs::OccupancyGrid * map_msg, bluedragon_netcomm::serial_size * serial_size_msg);


////////////////////////////////////////////
// set port data
void chariot::set_port_data(int PG, char * ip)
{
     out_socket = socket(AF_INET, SOCK_DGRAM, 0);

	// hand shake in port
     hsi_si.sin_family = AF_INET;
     hsi_si.sin_port   = htons( PG -1 );
     inet_aton( ip, &hsi_si.sin_addr);

     //checks connection
     if (bind(out_socket, (struct sockaddr *)&hsi_si, sizeof(hsi_si)) < 0) 
     {
     	  perror("Connection error");
     }
     printf("Bind");

	// wait port 
     wait_si.sin_family = AF_INET;
     wait_si.sin_port   = htons( PG -3 );
     inet_aton( ip, &wait_si.sin_addr);

	// hand shake out port
     hso_si.sin_family = AF_INET;
     hso_si.sin_port   = htons( PG -2 );
     inet_aton( ip, &hso_si.sin_addr);

	// serial size socket
     ss_si.sin_family = AF_INET;
     ss_si.sin_port   = htons( PG );
     inet_aton( ip, &ss_si.sin_addr);

	// propulsion socket
     pr_si.sin_family = AF_INET;
     pr_si.sin_port   = htons( PG+1 );
     inet_aton( ip, &pr_si.sin_addr);

	// near objects socket
     no_si.sin_family = AF_INET;
     no_si.sin_port   = htons( PG+2  );
     inet_aton( ip, &no_si.sin_addr);

	// laser scan socket
     ls_si.sin_family = AF_INET;
     ls_si.sin_port   = htons( PG+3  );
     inet_aton( ip, &ls_si.sin_addr);

	// transform tree socket
     tf_si.sin_family = AF_INET;
     tf_si.sin_port   = htons( PG+4  );
     inet_aton( ip, &tf_si.sin_addr);

	// range socket
     ra_si.sin_family = AF_INET;
     ra_si.sin_port   = htons( PG+5  );
     inet_aton( ip, &ra_si.sin_addr);

	// odometry socket
     od_si.sin_family = AF_INET;
     od_si.sin_port   = htons( PG+6  );
     inet_aton( ip, &od_si.sin_addr);

	// map socket
     ma_si.sin_family = AF_INET;
     ma_si.sin_port   = htons( PG+7 );
     inet_aton( ip, &ma_si.sin_addr);

	
}

///////////////////////////////////////////////
// function to multithread

void * thread_runner(chariot * chariot, bool * user, int * sock, bluedragon_propulsion::propulsion * propulsion_msg, bluedragon_propulsion::near_objects * near_objects_msg, sensor_msgs::LaserScan * laser_scan_msg, 		    	sensor_msgs::Range * range_msg, tf::tfMessage * tf_msg, nav_msgs::Odometry * odometry_msg, nav_msgs::OccupancyGrid * map_msg, bluedragon_netcomm::serial_size * serial_size_msg)
{
	chariot->to_send_or_not(user,sock);

	if(*user == false)
	{
		chariot->reporting( user, sock);
	}
	else
	{
		chariot->reporting( user, sock);
	     chariot->hermes(propulsion_msg, near_objects_msg, laser_scan_msg, range_msg, tf_msg, odometry_msg, map_msg, sock, serial_size_msg);
	     while(chariot->get_wait_msg() == false)
	 	{
			chariot->hold_your_horses();
		}
		chariot->set_wait_msg(false);
	}
}

////////////////////////////////////////////
// wait until flagged to move forward
// forces synchronization of message size
// memory buffer and the message that hits
// the target 
void chariot::hold_your_horses()
{
	   namespace ser=ros::serialization;

	   // serialize message buffer
 	   uint32_t wait_serial_size = ros::serialization::serializationLength(wait_msg);
 	   boost::shared_array<uint8_t> wait_buffer(new uint8_t[wait_serial_size]);
 	   
    	   // Receive an incoming message
	   if( recv(out_socket, wait_buffer.get(), wait_serial_size, 0) < 0) 
	   {      
	       perror("wait_Received failed");
   	   }
   	   
   	   // deserialize stream
   	   ser::IStream wait_stream(wait_buffer.get(), wait_serial_size);
        ser::deserialize(wait_stream, wait_msg);
}

////////////////////////////////////////////
// notify if a user is online
void chariot::reporting(bool * user, int * sock)
{
	namespace ser=ros::serialization;
	hso_msg.user_flag = *user;

	// ros serialization
 	uint32_t hso_serial_size = ros::serialization::serializationLength(hso_msg);
 	boost::shared_array<uint8_t> hso_buffer(new uint8_t[hso_serial_size]);
		            
     ser::OStream hso_stream(hso_buffer.get(),hso_serial_size);
     ser::serialize(hso_stream, hso_msg);
           
     size_t hso_nBytes = sendto(*sock, hso_buffer.get(), hso_serial_size, 0, (struct sockaddr*) &hso_si, sizeof(hso_si));
}

////////////////////////////////////////////
// check for a user listening
void chariot::to_send_or_not(bool * user, int * sock)
{
	   namespace ser=ros::serialization;

	   // serialize message buffer
 	   uint32_t hsi_serial_size = ros::serialization::serializationLength(hsi_msg);
 	   boost::shared_array<uint8_t> hsi_buffer(new uint8_t[hsi_serial_size]);
 	   
    	   // Receive an incoming message
	   if( recv(out_socket, hsi_buffer.get(), hsi_serial_size, 0) < 0) 
	   {      
	       perror("hsi_Received failed");
   	   }
   	   
   	   // deserialize stream
   	   ser::IStream hsi_stream(hsi_buffer.get(), hsi_serial_size);
        ser::deserialize(hsi_stream, hsi_msg);

	   // set user to hsi_msg
	   *user=hsi_msg.user_flag;
} 

////////////////////////////////////////////
// messenger
void chariot::hermes(bluedragon_propulsion::propulsion * propulsion_msg, bluedragon_propulsion::near_objects * near_objects_msg, sensor_msgs::LaserScan * laser_scan_msg, sensor_msgs::Range * range_msg, tf::tfMessage * tf_msg, nav_msgs::Odometry * odometry_msg, nav_msgs::OccupancyGrid * map_msg, int * sock, bluedragon_netcomm::serial_size * serial_size_msg)
{
	  namespace ser=ros::serialization;

	  ///////////////////////////////////////////////
	  // hand shake out message
		 hso_msg.user_flag=true;
	 
		 // ros serialization
 		 uint32_t hso_serial_size = ros::serialization::serializationLength(hso_msg);
 		 boost::shared_array<uint8_t> hso_buffer(new uint8_t[hso_serial_size]);
		            
           ser::OStream hso_stream(hso_buffer.get(), hso_serial_size);
           ser::serialize(hso_stream, hso_msg);
           
           size_t hso_nBytes = sendto(*sock, hso_buffer.get(), hso_serial_size, 0, (struct sockaddr*) &hso_si, sizeof(hso_si));

	  ///////////////////////////////////////////////
	  // propulsion message
	 
		 // ros serialization
 		 uint32_t pr_serial_size = ros::serialization::serializationLength(*propulsion_msg);
 		 boost::shared_array<uint8_t> pr_buffer(new uint8_t[pr_serial_size]);
		            
           ser::OStream pr_stream(pr_buffer.get(), pr_serial_size);
           ser::serialize(pr_stream, *propulsion_msg);
           
           size_t pr_nBytes = sendto(*sock, pr_buffer.get(), pr_serial_size, 0, (struct sockaddr*) &pr_si, sizeof(pr_si));

	  ///////////////////////////////////////////////
	  // near objects message

		 // ros serialization
 		 uint32_t no_serial_size = ros::serialization::serializationLength(*near_objects_msg);
 		 boost::shared_array<uint8_t> no_buffer(new uint8_t[no_serial_size]);
		            
           ser::OStream no_stream(no_buffer.get(),no_serial_size);
           ser::serialize(no_stream, *near_objects_msg);
           
           size_t no_nBytes = sendto(*sock, no_buffer.get(), no_serial_size, 0, (struct sockaddr*) &no_si, sizeof(no_si));

	  ///////////////////////////////////////////////
	  // laser scan message

		 // ros serialization
 		 uint32_t ls_serial_size = ros::serialization::serializationLength(*laser_scan_msg);
 		 boost::shared_array<uint8_t> ls_buffer(new uint8_t[ls_serial_size]);
		            
           ser::OStream ls_stream(ls_buffer.get(),ls_serial_size);
           ser::serialize(ls_stream, *laser_scan_msg);

	      size_t ls_nBytes = sendto(*sock, ls_buffer.get(), ls_serial_size, 0, (struct sockaddr*) &ls_si, sizeof(ls_si));
	  
	  ///////////////////////////////////////////////
	  // range message

		 // ros serialization
 		 uint32_t ra_serial_size = ros::serialization::serializationLength(*range_msg);
 		 boost::shared_array<uint8_t> ra_buffer(new uint8_t[ra_serial_size]);
		            
           ser::OStream ra_stream(ra_buffer.get(),ra_serial_size);
           ser::serialize(ra_stream, *range_msg);
           
           size_t ra_nBytes = sendto(*sock, ra_buffer.get(), ra_serial_size, 0, (struct sockaddr*) &ra_si, sizeof(ra_si));

	  ///////////////////////////////////////////////
	  // transform tree message
		 	  
		 // ros serialization
 		 uint32_t tf_serial_size = ros::serialization::serializationLength(*tf_msg);
 		 boost::shared_array<uint8_t> tf_buffer(new uint8_t[tf_serial_size]);
		            
           ser::OStream tf_stream(tf_buffer.get(),tf_serial_size);
           ser::serialize(tf_stream, *tf_msg);
           
           size_t tf_nBytes = sendto(*sock, tf_buffer.get(), tf_serial_size, 0, (struct sockaddr*) &tf_si, sizeof(tf_si));

	  ///////////////////////////////////////////////
	  // odometry message
		 
		 // ros serialization
 		 uint32_t od_serial_size = ros::serialization::serializationLength(*odometry_msg);
 		 boost::shared_array<uint8_t> od_buffer(new uint8_t[od_serial_size]);
		            
           ser::OStream od_stream(od_buffer.get(),od_serial_size);
           ser::serialize(od_stream, *odometry_msg);
           
           size_t od_nBytes = sendto(*sock, od_buffer.get(), od_serial_size, 0, (struct sockaddr*) &od_si, sizeof(od_si));

	  ///////////////////////////////////////////////
	  // map message

		 // ros serialization
 		 uint32_t ma_serial_size = ros::serialization::serializationLength(*map_msg);
 		 boost::shared_array<uint8_t> ma_buffer(new uint8_t[ma_serial_size]);
		            
           ser::OStream ma_stream(ma_buffer.get(),ma_serial_size);
           ser::serialize(ma_stream, *map_msg);
           
           size_t ma_nBytes = sendto(*sock, ma_buffer.get(), ma_serial_size, 0, (struct sockaddr*) &ma_si, sizeof(ma_si));

	  ///////////////////////////////////////////////
	  // serial size message
	  // -- has to be the last message, contains the
	  // -- buffer size of all of the other messages.

           // create serial size message
	   	 serial_size_msg->pr_serial_size=pr_serial_size;
		 serial_size_msg->no_serial_size=no_serial_size;
		 serial_size_msg->ls_serial_size=ls_serial_size;
		 serial_size_msg->tf_serial_size=tf_serial_size;
		 serial_size_msg->ra_serial_size=ra_serial_size;
		 serial_size_msg->od_serial_size=od_serial_size;
		 serial_size_msg->ma_serial_size=ma_serial_size;
		 
		 // ros serialization
 		 uint32_t ss_serial_size = ros::serialization::serializationLength(*serial_size_msg);
 		 boost::shared_array<uint8_t> ss_buffer(new uint8_t[ss_serial_size]);
		        
           ser::OStream ss_stream(ss_buffer.get(), ss_serial_size);
           ser::serialize(ss_stream, *serial_size_msg);
           
           size_t ss_nBytes = sendto(*sock, ss_buffer.get(), ss_serial_size, 0, (struct sockaddr*) &ss_si, sizeof(ss_si));
}
#endif // CHARIOT_H


