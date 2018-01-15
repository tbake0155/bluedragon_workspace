#include "ros/ros.h"
#include <list>
#include <bluedragon_propulsion/coordinates.h>
#include <bluedragon_propulsion/object.h>
#include <bluedragon_propulsion/listener.h>


int main(int argc, char **argv)
{
	// initialize ros
     ros::init(argc, argv, "propulsion");
     
     // create propulsion node
     ros::NodeHandle propulsion_node;
     ros::Publisher propulsion_pub = propulsion_node.advertise<bluedragon_propulsion::propulsion>("propulsion", 100);
     
     // create near objects subscriber node
     near_objects_listener no_listener;
     ros::NodeHandle near_objects_node;
     ros::Subscriber near_objects_sub = near_objects_node.subscribe("near_objects", 100, &near_objects_listener::near_objects_callback, &no_listener);
     
     // create odometry subscriber node
     odometry_listener od_listener;
     ros::NodeHandle odometry_node;
     ros::Subscriber odometry_sub = odometry_node.subscribe("odom_combined", 100, &odometry_listener::odometry_callback, &od_listener);
     
     // ret ros loop rate
     ros::Rate loop_rate(10);

	// main variables
     int count = 0;
     std::list<object> detected_objects;
     std::list<object>::iterator detected_objects_itr;

	// main while loop
     while(ros::ok())
     {	
           // vector objects to create near object message
           std::vector<double> objects_X=no_listener.get_X_objects();
           std::vector<double> objects_Y=no_listener.get_Y_objects();
	      std::vector<double> objects_radians=no_listener.get_radians();
	      std::vector<double> objects_radius=no_listener.get_radius();
		 std::vector<uint8_t> red_bouys=no_listener.get_red_bouy();
	 	 std::vector<uint8_t> green_bouys=no_listener.get_green_bouy();
	      std::vector<int64_t> zones=no_listener.get_zone();
	     
	      for(int i=0; i<objects_X.size();i++)
	      {
	           object * temp_object = new object;
     	 
     	 	 temp_object->set_point(objects_X.at(i), objects_Y.at(i), objects_radians.at(i), objects_radius.at(i));
     	 	 temp_object->set_red_bouy(red_bouys.at(i));
     		 temp_object->set_green_bouy(green_bouys.at(i));
     		 temp_object->set_zone(zones.at(i));
     	 
     		 detected_objects.push_back(*temp_object);     	
     		 delete temp_object; 
	      }

     	 // throttle logic
     	 int64_t left_throttle=1500;
		 int64_t right_throttle=1500;
		 
		 // react to object detection in zone 1	
     	 detected_objects.sort();
     	 
     	 detected_objects_itr=detected_objects.begin();
     	 while(detected_objects_itr!=detected_objects.end())
     	 {
     	 	if(detected_objects_itr->get_zone()!=1)
     	 	{
     	 		detected_objects.erase(detected_objects_itr);
       	 	}
       	 	detected_objects_itr++;
     	 }
     	 
     	 
     	 // create propulsion message
	      bluedragon_propulsion::propulsion  propulsion_msg;
  		 // fill propulsion message
  		 propulsion_msg.header.stamp=ros::Time::now();
  		 propulsion_msg.header.frame_id="bluedragon_footprint";
     	 propulsion_msg.left_throttle=left_throttle;
     	 propulsion_msg.right_throttle=right_throttle;  
     	 // publish propulsion message
		 propulsion_pub.publish(propulsion_msg);

		 // loop ros
		 ros::spinOnce();
		 loop_rate.sleep();
     	 count++;
     }
	// exit normally
     return 0;
}
