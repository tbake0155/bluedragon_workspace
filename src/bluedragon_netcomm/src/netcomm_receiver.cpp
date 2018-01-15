
#include <bluedragon_netcomm/chariot.h>

int main(int argc, char **argv)
{
  //////////////////////////////////////////////////
  // initialize ros
     ros::init(argc, argv, "netcomm_receiver");
     printf("initializing ros... ");

  //////////////////////////////////////////////////
  // create publishing nodes for our incoming
  // messages
  
     // create propulsion publisher node
     ros::NodeHandle propulsion_node;
     ros::Publisher propulsion_pub = propulsion_node.advertise<bluedragon_propulsion::propulsion>("propulsion", 100);
     
     // create near objects publisher node
     ros::NodeHandle near_objects_node;
     ros::Publisher near_objects_pub = near_objects_node.advertise<bluedragon_propulsion::near_objects>("near_objects", 100);
     
     // create laser scan publisher node
     ros::NodeHandle laser_scan_node;
     ros::Publisher laser_scan_pub = laser_scan_node.advertise<sensor_msgs::LaserScan>("scan", 100);
     
     // create odometry publisher node
     ros::NodeHandle odometry_node;
     ros::Publisher odometry_pub = odometry_node.advertise<nav_msgs::Odometry>("odom_combined", 100);
     
     // create range publisher node
     ros::NodeHandle range_node;
     ros::Publisher range_pub = range_node.advertise<sensor_msgs::Range>("ultrasound_combined", 100);
     
    	// create tf publisher node
    	ros::NodeHandle tf_node;
    	ros::Publisher tf_pub = tf_node.advertise<tf::tfMessage>("tf", 100);
    	
     // create map publisher node
     ros::NodeHandle map_node;
     ros::Publisher map_pub = map_node.advertise<nav_msgs::OccupancyGrid>("map", 100);
          
  //////////////////////////////////////////////////
  // set ros loop rate
     ros::Rate loop_rate(10);

  //////////////////////////////////////////////////
  // variables
     int count = 0;
	int port_group_1 = 5999;
	int port_group_2 = 6999;
	int port_group_3 = 7999;
	int port_group_4 = 8999;
	int start_port = 0;
	int hand_shake_in_port = 0;
	int hand_shake_out_port = 0;
     namespace ser = ros::serialization;
	bluedragon_netcomm::flag hso_msg;
	bluedragon_netcomm::flag hsi_msg;
	bluedragon_netcomm::flag wait_msg;
     bluedragon_netcomm::serial_size serial_size_msg;
     bluedragon_propulsion::propulsion propulsion_msg;
	bluedragon_propulsion::near_objects near_object_msg;
     tf::tfMessage tf_msg;
	nav_msgs::Odometry odometry_msg;
     nav_msgs::OccupancyGrid map_msg;
	sensor_msgs::Range range_msg;
	sensor_msgs::LaserScan laser_scan_msg;


  //////////////////////////////////////////////////
  // Check if other users are online, only 4 users
  // can listen at a time.  Each user will have their
  // own group of ports, with handshaking, so that
  // all messages received will have the correct 
  // memory buffer alloted to it to prevent buffer 
  // overflow

  //////////////////////////////////////////////////////
  // setup output socket

  	// udp socket variables
     int sock;
     int broadcast = 1;
     char *ip = "167.228.105.255";

     // udp socket error check
     if( (sock = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP)) == -1)
     {
         perror("socket : ");
         return -1;
     }
     if( setsockopt(sock, SOL_SOCKET, SO_BROADCAST, &broadcast, sizeof(broadcast)) != 0 )
     {
         perror("setsockopt : ");
         close(sock);
         return -1;
     }

  ///////////////////////////////////////////////////////
  // hand shake in socket
  
    //  socket variables
    int hsi_socket;
    struct sockaddr_in hsi_si;
	
    //create socket
    hsi_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    hsi_si.sin_addr.s_addr =  INADDR_ANY;
    hsi_si.sin_port = htons( 5997 );
    hsi_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(hsi_socket, (struct sockaddr *)&hsi_si, sizeof(hsi_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("hsi_Bind");


  ///////////////////////////////////////////////////////
  // check for users

	   // serialize message buffer
 	   uint32_t hsi_serial_size = ros::serialization::serializationLength(hsi_msg);
 	   boost::shared_array<uint8_t> hsi_buffer(new uint8_t[hsi_serial_size]);
 	   
    	   //Receive an incoming message
	   if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) < 0) 
	   {      
	       perror("hsi_Received failed");
            return 1;
   	   }
   	   else
	   {
   	   	    // deserialize stream
   	         ser::IStream hsi_stream(hsi_buffer.get(), hsi_serial_size);
              ser::deserialize(hsi_stream, hsi_msg);

  	   	    // check for user on port group 1
 	   	    if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) == 0)
              {
	             start_port=port_group_1;
	             printf("using port group 1");
  	         }

	   	    else
	         {
		        hsi_si.sin_port = htons( 6997 );
    	 		   //Receive an incoming message
	  	 	   if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) < 0) 
	  		   {      
	   	             perror("hsi_Received failed");
           	 	   return 1;
   	 		   }

			   else
			   {
   	   	   		    // deserialize stream
   	       	 	    ser::IStream hsi_stream(hsi_buffer.get(), hsi_serial_size);
            	         ser::deserialize(hsi_stream, hsi_msg);

  	   	    		    // check for user on port group 2
 	   	  	 	    if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) == 0)
             		    {
	            		   start_port=port_group_2;
	             		   printf("using port group 2");
  	      		    }
  	      		    
  	      		    else
  	      		    {
  	      		    		hsi_si.sin_port = htons( 7997 );
    	 		   			//Receive an incoming message
	  	 	   			if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) < 0) 
	  		  		     {      
	   	           		     perror("hsi_Received failed");
           	 	 		     return 1;
   	 		   			}

			  			else
			   			{
   	   	   		   			 // deserialize stream
   	       	 	   			 ser::IStream hsi_stream(hsi_buffer.get(), hsi_serial_size);
            	        			 ser::deserialize(hsi_stream, hsi_msg);

  	   	    		   			 // check for user on port group 3
 	   	  	 	 		      if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) == 0)
             		  		      {
	            			      	   start_port=port_group_3;
	             			   		   printf("using port group 3");
  	      				      }
  	      		    
  	      		   			 else
  	      		   			 {
  	      		      	      	  hsi_si.sin_port = htons( 8997 );
    	 		   					  //Receive an incoming message
	  	 	   					  if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) < 0) 
	  		  		 	            {      
	   	           		   			  perror("hsi_Received failed");
           	 	 		   			  return 1;
   	 		   					  }

			  					  else
			   					  {
   	   	   		   					   // deserialize stream
   	       	 	   					   ser::IStream hsi_stream(hsi_buffer.get(), hsi_serial_size);
            	        					   ser::deserialize(hsi_stream, hsi_msg);

  	   	    		   			 		   // check for user on port group 4
 	   	  	 	 		      		   if( recv(hsi_socket, hsi_buffer.get(), hsi_serial_size, 0) == 0)
             		  		      		   {
	            			      	   	        start_port=port_group_4;
	             			   		   	        printf("using port group 4");
  	      				      	 	   }
  	      		   				  }
  	      		  	           }
			               }
              	         }
                  }
             }
       }

  	  if(start_port == 0)
  	  {
		 // no ports available, return 0 and exit normally
    		 printf("ALL USER PORTS ARE BEING UTILIZED...");
		 printf("EXITING NORMALLY.  TRY AGAIN LATER");
		 return 0;
 	  }

  //////////////////////////////////////////////////
  // udp socket configuratoin
  // a different port will be used for each message
  // all messages are broadcast to the local subnet
  // X.X.X.255

  ///////////////////////////////////////////////////////
  // wait socket
  
    //  socket variables
    struct sockaddr_in wait_si;
	
    //assign socket values
    wait_si.sin_addr.s_addr =  INADDR_ANY;
    wait_si.sin_port = htons( start_port - 3 );
    wait_si.sin_family = AF_INET;

  ///////////////////////////////////////////////////////
  // hand shake out socket
  
    //  socket variables
    struct sockaddr_in hso_si;
	
    //assign socket values
    hso_si.sin_addr.s_addr =  INADDR_ANY;
    hso_si.sin_port = htons( start_port - 1 );
    hso_si.sin_family = AF_INET;

  ///////////////////////////////////////////////////////
  // serial size socket
  
    //  socket variables
    int ss_socket;
    struct sockaddr_in ss_si;
	
    //create socket
    ss_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    ss_si.sin_addr.s_addr =  INADDR_ANY;
    ss_si.sin_port = htons( start_port );
    ss_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(ss_socket, (struct sockaddr *)&ss_si, sizeof(ss_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("ss_Bind");
      
  ///////////////////////////////////////////////////////
  // propulsion socket
  
    //  socket variables
    int pr_socket;
    struct sockaddr_in pr_si;
	
    //create socket
    pr_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    pr_si.sin_addr.s_addr =  INADDR_ANY;
    pr_si.sin_port = htons( start_port + 1 );
    pr_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(pr_socket, (struct sockaddr *)&pr_si, sizeof(pr_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("pr_Bind");
    
  ///////////////////////////////////////////////////////
  // near object socket
  
    //  socket variables
    int no_socket;
    struct sockaddr_in no_si;
	
    //create socket
    no_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    no_si.sin_addr.s_addr =  INADDR_ANY;
    no_si.sin_port = htons( start_port + 2 );
    no_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(no_socket, (struct sockaddr *)&no_si, sizeof(no_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("no_Bind");

  ///////////////////////////////////////////////////////
  // laser scan socket
  
    //  socket variables
    int ls_socket;
    struct sockaddr_in ls_si;
	
    //create socket
    ls_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    ls_si.sin_addr.s_addr =  INADDR_ANY;
    ls_si.sin_port = htons( start_port + 3 );
    ls_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(ls_socket, (struct sockaddr *)&ls_si, sizeof(ls_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("ls_Bind");
    
  ///////////////////////////////////////////////////////
  // transform tree socket
  
    //  socket variables
    int tf_socket;
    struct sockaddr_in tf_si;
	
    //create socket
    tf_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    tf_si.sin_addr.s_addr =  INADDR_ANY;
    tf_si.sin_port = htons( start_port + 4 );
    tf_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(tf_socket, (struct sockaddr *)&tf_si, sizeof(tf_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("tf_Bind");
    
  ///////////////////////////////////////////////////////
  // range socket
  
    // socket variables
    int ra_socket;
    struct sockaddr_in ra_si;
	
    //create socket
    ra_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    ra_si.sin_addr.s_addr =  INADDR_ANY;
    ra_si.sin_port = htons( start_port + 5 );
    ra_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(ra_socket, (struct sockaddr *)&ra_si, sizeof(ra_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("ra_Bind");

  ///////////////////////////////////////////////////////
  // odometry socket
  
    // socket variables
    int od_socket;
    struct sockaddr_in od_si;
	
    //create socket
    od_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    od_si.sin_addr.s_addr =  INADDR_ANY;
    od_si.sin_port = htons( start_port + 6 );
    od_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(od_socket, (struct sockaddr *)&od_si, sizeof(od_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("od_Bind");
    
  ///////////////////////////////////////////////////////
  // map socket
  
    // socket variables
    int ma_socket;
    struct sockaddr_in ma_si;
	
    //create socket
    ma_socket = socket(AF_INET, SOCK_DGRAM, 0);
    
    //assign socket values
    ma_si.sin_addr.s_addr =  INADDR_ANY;
    ma_si.sin_port = htons( start_port + 7 );
    ma_si.sin_family = AF_INET;
    
    //checks connection
    if (bind(ma_socket, (struct sockaddr *)&ma_si, sizeof(ma_si)) < 0) 
    {
    	  perror("Connection error");
       return 1;
    }
    printf("ma_Bind");


  ///////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  // main while loop, runs until termination
     while(ros::ok())
	{

      ///////////////////////////////////////////////////////
	 // tell the broadcaster you're listening
	 hso_msg.user_flag=true;

	 // ros serialization
 	 uint32_t hso_serial_size = ros::serialization::serializationLength(hso_msg);
   	 boost::shared_array<uint8_t> hso_buffer(new uint8_t[hso_serial_size]);
		            
      ser::OStream hso_stream(hso_buffer.get(),hso_serial_size);
      ser::serialize(hso_stream, hso_msg);
           
      size_t hso_nBytes = sendto(sock, hso_buffer.get(), hso_serial_size, 0, (struct sockaddr*) &hso_si, sizeof(hso_si));

	   ///////////////////////////////////////////////////////
	   // check for the size of all messages
	   	   
	   // create fake message so that our buffer is 
	   // the size of a full message.  This message
	   // will contain the actual size of all of the 
	   // following messages, some of which contain
	   // vector values that are not fixed. This 
	   // allows us to update the message size for
	   // each iteration through the cycle.  First the
	   // serial size message is received with all of 
	   // following messages sizes, then the messages
	   // can be receieved safely since we know the 
	   // size of the buffer they will be sending
	      
	   // serialize message buffer
 	   uint32_t ss_serial_size = ros::serialization::serializationLength(serial_size_msg);
 	   boost::shared_array<uint8_t> ss_buffer(new uint8_t[ss_serial_size]);
 	   
    	   //Receive an incoming message
	   if( recv(ss_socket, ss_buffer.get(), ss_serial_size, 0) < 0) 
	   {      
	       perror("ss_Received failed");
            return 1;
   	   }
   	   
   	   // deserialize stream
   	   ser::IStream ss_stream(ss_buffer.get(), ss_serial_size);
        ser::deserialize(ss_stream, serial_size_msg);

      ///////////////////////////////////////////////////////
	 // transform tree message
	     
	      // serialize message buffer
 		 uint32_t tf_serial_size = serial_size_msg.tf_serial_size;
 		 boost::shared_array<uint8_t> tf_buffer(new uint8_t[tf_serial_size]);
 		 
    		 //Receive an incoming message
		 if( recv(tf_socket, tf_buffer.get(), tf_serial_size, 0) < 0) 
		 {      
		      perror("tf_Received failed");
    			 return 1;
   	      }
   	      
   	      ser::IStream tf_stream(tf_buffer.get(), tf_serial_size);
    		 ser::deserialize(tf_stream, tf_msg);
    		 
    		 tf_pub.publish(tf_msg);

	 ///////////////////////////////////////////////////////
	 // propulsion message

	      // serialize message buffer
		 uint32_t pr_serial_size = serial_size_msg.pr_serial_size;
 		 boost::shared_array<uint8_t> pr_buffer(new uint8_t[pr_serial_size]);
           
    		 //Receive an incoming message
		 if( recv(pr_socket, pr_buffer.get(), pr_serial_size, 0) < 0) 
		 {      
		      perror("pr_Received failed");
    			 return 1;
   	      }
   	      
   	      ser::IStream pr_stream(pr_buffer.get(), pr_serial_size);
    		 ser::deserialize(pr_stream, propulsion_msg);
    		 
    		 propulsion_pub.publish(propulsion_msg);
    		 
    	 ///////////////////////////////////////////////////////
	 // near_objects message
	          
	      // serialize message buffer
 		 uint32_t no_serial_size = serial_size_msg.no_serial_size;
 		 boost::shared_array<uint8_t> no_buffer(new uint8_t[no_serial_size]);
 		 
    		 //Receive an incoming message
		 if( recv(no_socket, no_buffer.get(), no_serial_size, 0) < 0) 
		 {      
		      perror("no_Received failed");
    			 return 1;
   	      }
   	      
   	      ser::IStream no_stream(no_buffer.get(), no_serial_size);
    		 ser::deserialize(no_stream, near_object_msg);
    		 
    		 near_objects_pub.publish(near_object_msg);
    		 
      ///////////////////////////////////////////////////////
	 // laser scan message

	      // serialize message buffer
 		 uint32_t ls_serial_size = serial_size_msg.ls_serial_size;
 		 boost::shared_array<uint8_t> ls_buffer(new uint8_t[ls_serial_size]);
 		 
    		 //Receive an incoming message
		 if( recv(ls_socket, ls_buffer.get(), ls_serial_size, 0) < 0) 
		 {      
		      perror("ls_Received failed");
    			 return 1;
    		 }   
    		 
    		 ser::IStream ls_stream(ls_buffer.get(), ls_serial_size);
    		 ser::deserialize(ls_stream, laser_scan_msg);	
    		 
    		 laser_scan_pub.publish(laser_scan_msg);      
    		 
      ///////////////////////////////////////////////////////
	 // range message
	   
	      // serialize message buffer
 		 uint32_t ra_serial_size = serial_size_msg.ra_serial_size;
 		 boost::shared_array<uint8_t> ra_buffer(new uint8_t[ra_serial_size]);
 		 
    		 //Receive an incoming message
		 if( recv(ra_socket, ra_buffer.get(), ra_serial_size, 0) < 0) 
		 {      
		      perror("ra_Received failed");
    			 return 1;
   	      }
    		 
    		 ser::IStream ra_stream(ra_buffer.get(), ra_serial_size);
    		 ser::deserialize(ra_stream, range_msg);
    		 
    		 range_pub.publish(range_msg);
    		 
      ///////////////////////////////////////////////////////
	 // odometry message
	 
	      // serialize message buffer
 		 uint32_t od_serial_size = serial_size_msg.od_serial_size;
 		 boost::shared_array<uint8_t> od_buffer(new uint8_t[od_serial_size]);
 		 
    		 //Receive an incoming message
		 if( recv(od_socket, od_buffer.get(), od_serial_size, 0) < 0) 
		 {      
		      perror("od_Received failed");
    			 return 1;
   	      }
   	      
   	      ser::IStream od_stream(od_buffer.get(), od_serial_size);
    		 ser::deserialize(od_stream, odometry_msg);
    		 
    		 odometry_pub.publish(odometry_msg);
    		 
      ///////////////////////////////////////////////////////
	 // map message
	      
	      // serialize message buffer
 		 uint32_t ma_serial_size = serial_size_msg.ma_serial_size;
 		 boost::shared_array<uint8_t> ma_buffer(new uint8_t[ma_serial_size]);
 		 
    		 //Receive an incoming message
		 if( recv(ma_socket, ma_buffer.get(), ma_serial_size, 0) < 0) 
		 {      
		      perror("ma_Received failed");
    			 return 1;
   	      }
	
	   	 ser::IStream ma_stream(ma_buffer.get(), ma_serial_size);
    		 ser::deserialize(ma_stream, map_msg);
	 
	      map_pub.publish(map_msg);
	    
      ///////////////////////////////////////////////////////
	 // alert netcomm broadcaster that the messages have 
	 // been processed
	 wait_msg.user_flag=true;

	 // ros serialization
 	 uint32_t wait_serial_size = ros::serialization::serializationLength(wait_msg);
   	 boost::shared_array<uint8_t> wait_buffer(new uint8_t[wait_serial_size]);
		            
      ser::OStream wait_stream(wait_buffer.get(),wait_serial_size);
      ser::serialize(wait_stream, wait_msg);
           
      size_t wait_nBytes = sendto(sock, wait_buffer.get(), wait_serial_size, 0, (struct sockaddr*) &wait_si, sizeof(wait_si));
		 
	 ///////////////////////////////////////////////////////
      // loop ros
		 ros::spinOnce();
		 loop_rate.sleep();
     	 count++;
     }
	// exit normally
     return 0;
}

