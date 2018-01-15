;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_netcomm::netcomm)
  (if (not (find-package "BLUEDRAGON_NETCOMM"))
    (make-package "BLUEDRAGON_NETCOMM"))
  (shadow 'netcomm (find-package "BLUEDRAGON_NETCOMM")))
(unless (find-package "BLUEDRAGON_NETCOMM::NETCOMM")
  (make-package "BLUEDRAGON_NETCOMM::NETCOMM"))

(in-package "ROS")
;;//! \htmlinclude netcomm.msg.html
(if (not (find-package "BLUEDRAGON_PROPULSION"))
  (ros::roseus-add-msgs "bluedragon_propulsion"))
(if (not (find-package "NAV_MSGS"))
  (ros::roseus-add-msgs "nav_msgs"))
(if (not (find-package "SENSOR_MSGS"))
  (ros::roseus-add-msgs "sensor_msgs"))
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))
(if (not (find-package "TF"))
  (ros::roseus-add-msgs "tf"))


(defclass bluedragon_netcomm::netcomm
  :super ros::object
  :slots (_header _range _scan _odom_combined _near_objects _propulsion _tf ))

(defmethod bluedragon_netcomm::netcomm
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:range __range) (instance sensor_msgs::Range :init))
    ((:scan __scan) (instance sensor_msgs::LaserScan :init))
    ((:odom_combined __odom_combined) (instance nav_msgs::Odometry :init))
    ((:near_objects __near_objects) (instance bluedragon_propulsion::near_objects :init))
    ((:propulsion __propulsion) (instance bluedragon_propulsion::propulsion :init))
    ((:tf __tf) (instance tf::tfMessage :init))
    )
   (send-super :init)
   (setq _header __header)
   (setq _range __range)
   (setq _scan __scan)
   (setq _odom_combined __odom_combined)
   (setq _near_objects __near_objects)
   (setq _propulsion __propulsion)
   (setq _tf __tf)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:range
   (&rest __range)
   (if (keywordp (car __range))
       (send* _range __range)
     (progn
       (if __range (setq _range (car __range)))
       _range)))
  (:scan
   (&rest __scan)
   (if (keywordp (car __scan))
       (send* _scan __scan)
     (progn
       (if __scan (setq _scan (car __scan)))
       _scan)))
  (:odom_combined
   (&rest __odom_combined)
   (if (keywordp (car __odom_combined))
       (send* _odom_combined __odom_combined)
     (progn
       (if __odom_combined (setq _odom_combined (car __odom_combined)))
       _odom_combined)))
  (:near_objects
   (&rest __near_objects)
   (if (keywordp (car __near_objects))
       (send* _near_objects __near_objects)
     (progn
       (if __near_objects (setq _near_objects (car __near_objects)))
       _near_objects)))
  (:propulsion
   (&rest __propulsion)
   (if (keywordp (car __propulsion))
       (send* _propulsion __propulsion)
     (progn
       (if __propulsion (setq _propulsion (car __propulsion)))
       _propulsion)))
  (:tf
   (&rest __tf)
   (if (keywordp (car __tf))
       (send* _tf __tf)
     (progn
       (if __tf (setq _tf (car __tf)))
       _tf)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; sensor_msgs/Range _range
    (send _range :serialization-length)
    ;; sensor_msgs/LaserScan _scan
    (send _scan :serialization-length)
    ;; nav_msgs/Odometry _odom_combined
    (send _odom_combined :serialization-length)
    ;; bluedragon_propulsion/near_objects _near_objects
    (send _near_objects :serialization-length)
    ;; bluedragon_propulsion/propulsion _propulsion
    (send _propulsion :serialization-length)
    ;; tf/tfMessage _tf
    (send _tf :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; sensor_msgs/Range _range
       (send _range :serialize s)
     ;; sensor_msgs/LaserScan _scan
       (send _scan :serialize s)
     ;; nav_msgs/Odometry _odom_combined
       (send _odom_combined :serialize s)
     ;; bluedragon_propulsion/near_objects _near_objects
       (send _near_objects :serialize s)
     ;; bluedragon_propulsion/propulsion _propulsion
       (send _propulsion :serialize s)
     ;; tf/tfMessage _tf
       (send _tf :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; sensor_msgs/Range _range
     (send _range :deserialize buf ptr-) (incf ptr- (send _range :serialization-length))
   ;; sensor_msgs/LaserScan _scan
     (send _scan :deserialize buf ptr-) (incf ptr- (send _scan :serialization-length))
   ;; nav_msgs/Odometry _odom_combined
     (send _odom_combined :deserialize buf ptr-) (incf ptr- (send _odom_combined :serialization-length))
   ;; bluedragon_propulsion/near_objects _near_objects
     (send _near_objects :deserialize buf ptr-) (incf ptr- (send _near_objects :serialization-length))
   ;; bluedragon_propulsion/propulsion _propulsion
     (send _propulsion :deserialize buf ptr-) (incf ptr- (send _propulsion :serialization-length))
   ;; tf/tfMessage _tf
     (send _tf :deserialize buf ptr-) (incf ptr- (send _tf :serialization-length))
   ;;
   self)
  )

(setf (get bluedragon_netcomm::netcomm :md5sum-) "4aa8528078c27f768d1fea1a3464ded3")
(setf (get bluedragon_netcomm::netcomm :datatype-) "bluedragon_netcomm/netcomm")
(setf (get bluedragon_netcomm::netcomm :definition-)
      "Header header

sensor_msgs/Range range
sensor_msgs/LaserScan scan
nav_msgs/Odometry odom_combined
bluedragon_propulsion/near_objects near_objects
bluedragon_propulsion/propulsion propulsion
tf/tfMessage tf



================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
# 0: no frame
# 1: global frame
string frame_id

================================================================================
MSG: sensor_msgs/Range
# Single range reading from an active ranger that emits energy and reports
# one range reading that is valid along an arc at the distance measured. 
# This message is  not appropriate for laser scanners. See the LaserScan
# message if you are working with a laser scanner.

# This message also can represent a fixed-distance (binary) ranger.  This
# sensor will have min_range===max_range===distance of detection.
# These sensors follow REP 117 and will output -Inf if the object is detected
# and +Inf if the object is outside of the detection range.

Header header           # timestamp in the header is the time the ranger
                        # returned the distance reading

# Radiation type enums
# If you want a value added to this list, send an email to the ros-users list
uint8 ULTRASOUND=0
uint8 INFRARED=1

uint8 radiation_type    # the type of radiation used by the sensor
                        # (sound, IR, etc) [enum]

float32 field_of_view   # the size of the arc that the distance reading is
                        # valid for [rad]
                        # the object causing the range reading may have
                        # been anywhere within -field_of_view/2 and
                        # field_of_view/2 at the measured range. 
                        # 0 angle corresponds to the x-axis of the sensor.

float32 min_range       # minimum range value [m]
float32 max_range       # maximum range value [m]
                        # Fixed distance rangers require min_range==max_range

float32 range           # range data [m]
                        # (Note: values < range_min or > range_max
                        # should be discarded)
                        # Fixed distance rangers only output -Inf or +Inf.
                        # -Inf represents a detection within fixed distance.
                        # (Detection too close to the sensor to quantify)
                        # +Inf represents no detection within the fixed distance.
                        # (Object out of range)
================================================================================
MSG: sensor_msgs/LaserScan
# Single scan from a planar laser range-finder
#
# If you have another ranging device with different behavior (e.g. a sonar
# array), please find or create a different message, since applications
# will make fairly laser-specific assumptions about this data

Header header            # timestamp in the header is the acquisition time of 
                         # the first ray in the scan.
                         #
                         # in frame frame_id, angles are measured around 
                         # the positive Z axis (counterclockwise, if Z is up)
                         # with zero angle being forward along the x axis
                         
float32 angle_min        # start angle of the scan [rad]
float32 angle_max        # end angle of the scan [rad]
float32 angle_increment  # angular distance between measurements [rad]

float32 time_increment   # time between measurements [seconds] - if your scanner
                         # is moving, this will be used in interpolating position
                         # of 3d points
float32 scan_time        # time between scans [seconds]

float32 range_min        # minimum range value [m]
float32 range_max        # maximum range value [m]

float32[] ranges         # range data [m] (Note: values < range_min or > range_max should be discarded)
float32[] intensities    # intensity data [device-specific units].  If your
                         # device does not provide intensities, please leave
                         # the array empty.

================================================================================
MSG: nav_msgs/Odometry
# This represents an estimate of a position and velocity in free space.  
# The pose in this message should be specified in the coordinate frame given by header.frame_id.
# The twist in this message should be specified in the coordinate frame given by the child_frame_id
Header header
string child_frame_id
geometry_msgs/PoseWithCovariance pose
geometry_msgs/TwistWithCovariance twist

================================================================================
MSG: geometry_msgs/PoseWithCovariance
# This represents a pose in free space with uncertainty.

Pose pose

# Row-major representation of the 6x6 covariance matrix
# The orientation parameters use a fixed-axis representation.
# In order, the parameters are:
# (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
float64[36] covariance

================================================================================
MSG: geometry_msgs/Pose
# A representation of pose in free space, composed of position and orientation. 
Point position
Quaternion orientation

================================================================================
MSG: geometry_msgs/Point
# This contains the position of a point in free space
float64 x
float64 y
float64 z

================================================================================
MSG: geometry_msgs/Quaternion
# This represents an orientation in free space in quaternion form.

float64 x
float64 y
float64 z
float64 w

================================================================================
MSG: geometry_msgs/TwistWithCovariance
# This expresses velocity in free space with uncertainty.

Twist twist

# Row-major representation of the 6x6 covariance matrix
# The orientation parameters use a fixed-axis representation.
# In order, the parameters are:
# (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)
float64[36] covariance

================================================================================
MSG: geometry_msgs/Twist
# This expresses velocity in free space broken into its linear and angular parts.
Vector3  linear
Vector3  angular

================================================================================
MSG: geometry_msgs/Vector3
# This represents a vector in free space. 
# It is only meant to represent a direction. Therefore, it does not
# make sense to apply a translation to it (e.g., when applying a 
# generic rigid transformation to a Vector3, tf2 will only apply the
# rotation). If you want your data to be translatable too, use the
# geometry_msgs/Point message instead.

float64 x
float64 y
float64 z
================================================================================
MSG: bluedragon_propulsion/near_objects
Header header

float64[] X_objects 
float64[] Y_objects
float64[] radians
float64[] radius
bool[] green_bouy
bool[] red_bouy
int64[] zone




================================================================================
MSG: bluedragon_propulsion/propulsion
Header header

int64 left_throttle
int64 right_throttle

================================================================================
MSG: tf/tfMessage
geometry_msgs/TransformStamped[] transforms

================================================================================
MSG: geometry_msgs/TransformStamped
# This expresses a transform from coordinate frame header.frame_id
# to the coordinate frame child_frame_id
#
# This message is mostly used by the 
# <a href=\"http://wiki.ros.org/tf\">tf</a> package. 
# See its documentation for more information.

Header header
string child_frame_id # the frame id of the child frame
Transform transform

================================================================================
MSG: geometry_msgs/Transform
# This represents the transform between two coordinate frames in free space.

Vector3 translation
Quaternion rotation

")



(provide :bluedragon_netcomm/netcomm "4aa8528078c27f768d1fea1a3464ded3")


