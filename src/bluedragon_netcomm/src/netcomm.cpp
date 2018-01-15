
#include <bluedragon_netcomm/chariot.h>
#include <thread>

int main(int argc, char **argv)
{
  //////////////////////////////////////////////////
  // initialize ros
     ros::init(argc, argv, "netcomm");
     
  //////////////////////////////////////////////////
  // create subscriber nodes 

     // create propulsion subscriber node
     propulsion_listener pr_listener;
     ros::NodeHandle propulsion_node;
     ros::Subscriber propulsion_sub = propulsion_node.subscribe("propulsion", 100, &propulsion_listener::propulsion_callback, &pr_listener);
     
     // create near objects subscriber node
     near_objects_listener no_listener;
     ros::NodeHandle near_objects_node;
     ros::Subscriber near_objects_sub = near_objects_node.subscribe("near_objects", 100, &near_objects_listener::near_objects_callback, &no_listener);
     
     // create laser scan subscriber node
     laser_scan_listener ls_listener;
     ros::NodeHandle laser_scan_node;
     ros::Subscriber laser_scan_sub = laser_scan_node.subscribe("scan", 100, &laser_scan_listener::laser_scan_callback, &ls_listener);
     
     // create odometry subscriber node
     odometry_listener od_listener;
     ros::NodeHandle odometry_node;
     ros::Subscriber odometry_sub = odometry_node.subscribe("odom_combined", 100, &odometry_listener::odometry_callback, &od_listener);
     
     // create range subscriber node
     range_listener ra_listener;
     ros::NodeHandle range_node;
     ros::Subscriber range_sub = range_node.subscribe("ultrasound_combined", 100, &range_listener::range_callback, &ra_listener);
     
    	// create tf subscriber node
    	transform_listener tf_listener;
    	ros::NodeHandle tf_node;
    	ros::Subscriber tf_sub = tf_node.subscribe("tf", 100, &transform_listener::tf_callback, &tf_listener);

     // create odometry subscriber node
     map_listener ma_listener;
     ros::NodeHandle map_node;
     ros::Subscriber map_sub = map_node.subscribe("map", 100, &map_listener::map_callback, &ma_listener);
          
  //////////////////////////////////////////////////
  // set ros loop rate
     ros::Rate loop_rate(3);

  //////////////////////////////////////////////////
  // main variables
     int count = 0;
	bool user_1 = false;
	bool user_2 = false;
	bool user_3 = false;
	bool user_4 = false;
 	namespace ser = ros::serialization;
     bluedragon_propulsion::propulsion propulsion_msg;
     bluedragon_propulsion::near_objects near_objects_msg;
     sensor_msgs::LaserScan laser_scan_msg; 
	sensor_msgs::Range range_msg;
     tf::tfMessage tf_msg;
     nav_msgs::Odometry odometry_msg;   
     nav_msgs::OccupancyGrid map_msg;  
     bluedragon_netcomm::serial_size serial_size_msg;

  //////////////////////////////////////////////////
  // create a socket and check the connection

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

  ///////////////////////////////////////////////
  // create chariot messengers
  // each messenger handles it's own group of
  // ports and will deliver messages to only one
  // user at a time.  Therefore 4 users max.  Each
  // chariot will be utilizing it's own thread, so
  // a minimum of a 4 core cpu is necessary
  	chariot chariot_1 = chariot(5999, ip);
  	chariot chariot_2 = chariot(6999, ip);
 	chariot chariot_3 = chariot(7999, ip);
  	chariot chariot_4 = chariot(8999, ip);
  
     //////////////////
     //////////////////
     // main while loop
     while(ros::ok())
     {
	  ///////////////////////////////////////////////
	  // get all of the messages from publishers
	      propulsion_msg=pr_listener.get_propulsion_msg();
	      near_objects_msg=no_listener.get_near_objects_msg();
	      laser_scan_msg=ls_listener.get_laser_scan_msg();
	      range_msg=ra_listener.get_range_msg();
	      tf_msg=tf_listener.get_tf_msg();
	      odometry_msg=od_listener.get_odometry_msg();
	      map_msg=ma_listener.get_map_msg();

	  ///////////////////////////////////////////////
	  // check if a user is listening, if they are 
	  // publish data, if they are not, check to see if
       // someone has come online since the last iteration
		std::thread thread_1(thread_runner, &chariot_1, &user_1, &sock, &propulsion_msg, &near_objects_msg, &laser_scan_msg, &range_msg, &tf_msg, &odometry_msg, &map_msg, &serial_size_msg);
		std::thread thread_2(thread_runner, &chariot_2, &user_2, &sock, &propulsion_msg, &near_objects_msg, &laser_scan_msg, &range_msg, &tf_msg, &odometry_msg, &map_msg, &serial_size_msg);
		std::thread thread_3(thread_runner, &chariot_3, &user_3, &sock, &propulsion_msg, &near_objects_msg, &laser_scan_msg, &range_msg, &tf_msg, &odometry_msg, &map_msg, &serial_size_msg);
		std::thread thread_4(thread_runner, &chariot_4, &user_4, &sock, &propulsion_msg, &near_objects_msg, &laser_scan_msg, &range_msg, &tf_msg, &odometry_msg, &map_msg, &serial_size_msg);

	  ////////////////////////////////////////////
	  // wait for threads to synchronize
		thread_1.join();
		thread_2.join();
		thread_3.join();
		thread_4.join();		

	  ///////////////////////////////////////////////
	  // loop ros
		 ros::spinOnce();
		 loop_rate.sleep();
     	 count++;
     }
	// exit normally
     return 0;
}

