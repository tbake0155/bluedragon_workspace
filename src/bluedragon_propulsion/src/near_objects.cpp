#include "ros/ros.h"
#include <list>
#include <bluedragon_propulsion/coordinates.h>
#include <bluedragon_propulsion/object.h>
#include <bluedragon_propulsion/listener.h>


int main(int argc, char **argv)
{
	// initialize ros
     ros::init(argc, argv, "near_objects");
     
     // create near objects publisher node
     ros::NodeHandle near_objects_node;
     ros::Publisher near_objects_pub = near_objects_node.advertise<bluedragon_propulsion::near_objects>("near_objects", 100);
     
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
     
     // set ros loop rate
     ros::Rate loop_rate(10);

	// variables
     int count = 0;
     coordinates origin;
     std::list<object> detected_objects;
     std::list<object>::iterator detected_objects_itr;

	// main while loop, will run until ros shuts down
	// or until ctr-c is passed
     while(ros::ok())
     {
     	// create temp object
     	object temp_object;
     	
          // obtain data for new objects
          
          // add objectst to list          
          
          // create vector variables for ros message
          std::vector<double> objects_X;
	     std::vector<double> objects_Y;
	     std::vector<double> objects_radians;
	     std::vector<double> objects_radius;
		std::vector<uint8_t> red_bouys;
	 	std::vector<uint8_t> green_bouys;
	     std::vector<int64_t> zones;

		// loop through the list of detected objects, fill the
		// vector variables above with detected objects data
	 	detected_objects_itr=detected_objects.begin();
	 	while(detected_objects_itr!=detected_objects.end())
		 {
		 	 // fill vector variables with list object variables
	    		 objects_X.push_back(detected_objects_itr->get_point().get_X());
	    		 objects_Y.push_back(detected_objects_itr->get_point().get_Y());
	    		 objects_radians.push_back(detected_objects_itr->get_point().get_radians());
	    		 objects_radius.push_back(detected_objects_itr->get_point().get_radius());
	   		 red_bouys.push_back(detected_objects_itr->get_red_bouy());
	     	 green_bouys.push_back(detected_objects_itr->get_green_bouy());
	     	 zones.push_back(detected_objects_itr->get_zone());
	     	 // increment iterator to next object until last object
	     	 detected_objects_itr++;
           }

		 // create message
		 bluedragon_propulsion::near_objects near_objects_msg;
		 // fill message with vector variables
		 near_objects_msg.header.stamp=ros::Time::now();
  		 near_objects_msg.header.frame_id="bluedragon_footprint";
		 near_objects_msg.X_objects=objects_X;
		 near_objects_msg.Y_objects=objects_Y;
           near_objects_msg.red_bouy=red_bouys;
	  	 near_objects_msg.green_bouy=green_bouys;
	 	 near_objects_msg.zone=zones;
	 	 near_objects_msg.radius=objects_radius;
	 	 near_objects_msg.radians=objects_radians;
	 	 //publish the message
	  	 near_objects_pub.publish(near_objects_msg);
	  	 
	  	 //loop ros
	   	 ros::spinOnce();
	 	 loop_rate.sleep();
         	 count++;
     }
	// exit normally
     return 0;
}
