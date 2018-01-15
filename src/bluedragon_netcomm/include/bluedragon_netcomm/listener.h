#ifndef LISTENER_H
#define LISTENER_H

#include <bluedragon_netcomm/netcomm.h>
#include <bluedragon_propulsion/near_objects.h>
#include <bluedragon_propulsion/propulsion.h>
#include <sensor_msgs/LaserScan.h>
#include <sensor_msgs/Range.h>
#include <nav_msgs/Odometry.h>
#include <nav_msgs/OccupancyGrid.h>
#include <geometry_msgs/PoseWithCovariance.h>
#include <geometry_msgs/TwistWithCovariance.h>
#include <vector>
#include <string>


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// transform listener

class transform_listener
{
	private:
		tf::tfMessage temp_tf_msg;
	public:
		void tf_callback(const tf::tfMessage& msg)
		{
			temp_tf_msg=msg;
		}
		tf::tfMessage get_tf_msg(){return temp_tf_msg;}
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// netcomm listener

class netcomm_listener
{
	private:
		bluedragon_netcomm::netcomm temp_netcomm_msg;
	public:
		void netcomm_callback(const bluedragon_netcomm::netcomm& msg)
		{
			temp_netcomm_msg=msg;
		}
		bluedragon_netcomm::netcomm get_netcomm_msg(){return temp_netcomm_msg;}
	     sensor_msgs::Range get_range(){return temp_netcomm_msg.range;}
		sensor_msgs::LaserScan get_scan(){return temp_netcomm_msg.scan;}
		nav_msgs::Odometry get_odometry(){return temp_netcomm_msg.odom_combined;}
		bluedragon_propulsion::propulsion get_propulsion(){return temp_netcomm_msg.propulsion;}
		bluedragon_propulsion::near_objects get_near_objects(){return temp_netcomm_msg.near_objects;}
		tf::tfMessage get_tf(){return temp_netcomm_msg.tf;}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// near objects listener 
class near_objects_listener
{
	private:
		bluedragon_propulsion::near_objects temp_near_objects_msg;
		
	public:
		void near_objects_callback(const bluedragon_propulsion::near_objects& msg)
		{
			temp_near_objects_msg.X_objects=msg.X_objects;
			temp_near_objects_msg.Y_objects=msg.Y_objects;
			temp_near_objects_msg.radians=msg.radians;
			temp_near_objects_msg.radius=msg.radius;
			temp_near_objects_msg.green_bouy=msg.green_bouy;
			temp_near_objects_msg.red_bouy=msg.red_bouy;
			temp_near_objects_msg.zone=msg.zone;
			temp_near_objects_msg.header.stamp=msg.header.stamp;
			temp_near_objects_msg.header.frame_id=msg.header.frame_id;
		}
		bluedragon_propulsion::near_objects get_near_objects_msg(){return temp_near_objects_msg;}
		std::vector<double> get_X_objects(){return temp_near_objects_msg.X_objects;}
		std::vector<double> get_Y_objects(){return temp_near_objects_msg.Y_objects;}
		std::vector<double> get_radians(){return temp_near_objects_msg.radians;}
		std::vector<double> get_radius(){return temp_near_objects_msg.radius;}
		std::vector<uint8_t> get_green_bouy(){return temp_near_objects_msg.green_bouy;}
		std::vector<uint8_t> get_red_bouy(){return temp_near_objects_msg.red_bouy;}
		std::vector<int64_t> get_zone(){return temp_near_objects_msg.zone;}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// laser scan listener
class laser_scan_listener
{
	private:
		sensor_msgs::LaserScan temp_laser_scan_msg;
		
	public:
		void laser_scan_callback(const sensor_msgs::LaserScan& msg)
		{
			temp_laser_scan_msg=msg;
		}
		sensor_msgs::LaserScan get_laser_scan_msg(){return temp_laser_scan_msg;}
		float get_angle_min(){return temp_laser_scan_msg.angle_min;}
		float get_angle_max(){return temp_laser_scan_msg.angle_max;}
		float get_angle_increment(){return temp_laser_scan_msg.angle_increment;}
		float get_time_increment(){return temp_laser_scan_msg.time_increment;}
		float get_scan_time(){return temp_laser_scan_msg.scan_time;}
		float get_range_min(){return temp_laser_scan_msg.range_min;}
		float get_range_max(){return temp_laser_scan_msg.range_max;}
		std::vector<float> get_ranges(){return temp_laser_scan_msg.ranges;}
		std::vector<float> get_intensities(){return temp_laser_scan_msg.intensities;}		
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// odometry listener 
class odometry_listener
{
	private:
		nav_msgs::Odometry temp_odometry_msg;
		
	public:
		void odometry_callback(const nav_msgs::Odometry& msg)
		{
			temp_odometry_msg=msg;
		}
		nav_msgs::Odometry get_odometry_msg(){return temp_odometry_msg;}
		std::string get_child_frame_id(){return temp_odometry_msg.child_frame_id;}
		geometry_msgs::PoseWithCovariance get_pose(){return temp_odometry_msg.pose;}
		geometry_msgs::TwistWithCovariance get_twist(){return temp_odometry_msg.twist;}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// propulsion listener
class propulsion_listener
{
	private:
		bluedragon_propulsion::propulsion temp_propulsion_msg;
		
	public:
		void propulsion_callback(const bluedragon_propulsion::propulsion& msg)
		{
			temp_propulsion_msg=msg;
		}
		bluedragon_propulsion::propulsion get_propulsion_msg(){return temp_propulsion_msg;}
		int64_t get_left_throttle(){return temp_propulsion_msg.left_throttle;}
		int64_t get_right_throttle(){return temp_propulsion_msg.right_throttle;}	
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ultrasound listener
class range_listener
{
	private:
		sensor_msgs::Range temp_range_msg;
	
	public:
		void range_callback(const sensor_msgs::Range& msg)
		{
			temp_range_msg=msg;
		}
		sensor_msgs::Range get_range_msg(){return temp_range_msg;}
		uint8_t get_radiation_type(){return temp_range_msg.radiation_type;}
		float get_field_of_view(){return temp_range_msg.field_of_view;}
		float get_min_range(){return temp_range_msg.min_range;}
		float get_max_range(){return temp_range_msg.max_range;}
		float get_range(){return temp_range_msg.range;}
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// map listener 
class map_listener
{
	private:
		nav_msgs::OccupancyGrid temp_map_msg;
		
	public:
		void map_callback(const nav_msgs::OccupancyGrid& msg)
		{
			temp_map_msg=msg;
		}
		nav_msgs::OccupancyGrid get_map_msg(){return temp_map_msg;}
};

#endif // LISTENER_H
