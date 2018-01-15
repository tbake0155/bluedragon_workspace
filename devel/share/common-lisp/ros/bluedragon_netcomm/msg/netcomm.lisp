; Auto-generated. Do not edit!


(cl:in-package bluedragon_netcomm-msg)


;//! \htmlinclude netcomm.msg.html

(cl:defclass <netcomm> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (range
    :reader range
    :initarg :range
    :type sensor_msgs-msg:Range
    :initform (cl:make-instance 'sensor_msgs-msg:Range))
   (scan
    :reader scan
    :initarg :scan
    :type sensor_msgs-msg:LaserScan
    :initform (cl:make-instance 'sensor_msgs-msg:LaserScan))
   (odom_combined
    :reader odom_combined
    :initarg :odom_combined
    :type nav_msgs-msg:Odometry
    :initform (cl:make-instance 'nav_msgs-msg:Odometry))
   (near_objects
    :reader near_objects
    :initarg :near_objects
    :type bluedragon_propulsion-msg:near_objects
    :initform (cl:make-instance 'bluedragon_propulsion-msg:near_objects))
   (propulsion
    :reader propulsion
    :initarg :propulsion
    :type bluedragon_propulsion-msg:propulsion
    :initform (cl:make-instance 'bluedragon_propulsion-msg:propulsion))
   (tf
    :reader tf
    :initarg :tf
    :type tf-msg:tfMessage
    :initform (cl:make-instance 'tf-msg:tfMessage)))
)

(cl:defclass netcomm (<netcomm>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <netcomm>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'netcomm)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_netcomm-msg:<netcomm> is deprecated: use bluedragon_netcomm-msg:netcomm instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:header-val is deprecated.  Use bluedragon_netcomm-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'range-val :lambda-list '(m))
(cl:defmethod range-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:range-val is deprecated.  Use bluedragon_netcomm-msg:range instead.")
  (range m))

(cl:ensure-generic-function 'scan-val :lambda-list '(m))
(cl:defmethod scan-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:scan-val is deprecated.  Use bluedragon_netcomm-msg:scan instead.")
  (scan m))

(cl:ensure-generic-function 'odom_combined-val :lambda-list '(m))
(cl:defmethod odom_combined-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:odom_combined-val is deprecated.  Use bluedragon_netcomm-msg:odom_combined instead.")
  (odom_combined m))

(cl:ensure-generic-function 'near_objects-val :lambda-list '(m))
(cl:defmethod near_objects-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:near_objects-val is deprecated.  Use bluedragon_netcomm-msg:near_objects instead.")
  (near_objects m))

(cl:ensure-generic-function 'propulsion-val :lambda-list '(m))
(cl:defmethod propulsion-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:propulsion-val is deprecated.  Use bluedragon_netcomm-msg:propulsion instead.")
  (propulsion m))

(cl:ensure-generic-function 'tf-val :lambda-list '(m))
(cl:defmethod tf-val ((m <netcomm>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:tf-val is deprecated.  Use bluedragon_netcomm-msg:tf instead.")
  (tf m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <netcomm>) ostream)
  "Serializes a message object of type '<netcomm>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'range) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'scan) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'odom_combined) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'near_objects) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'propulsion) ostream)
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'tf) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <netcomm>) istream)
  "Deserializes a message object of type '<netcomm>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'range) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'scan) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'odom_combined) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'near_objects) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'propulsion) istream)
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'tf) istream)
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<netcomm>)))
  "Returns string type for a message object of type '<netcomm>"
  "bluedragon_netcomm/netcomm")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'netcomm)))
  "Returns string type for a message object of type 'netcomm"
  "bluedragon_netcomm/netcomm")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<netcomm>)))
  "Returns md5sum for a message object of type '<netcomm>"
  "4aa8528078c27f768d1fea1a3464ded3")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'netcomm)))
  "Returns md5sum for a message object of type 'netcomm"
  "4aa8528078c27f768d1fea1a3464ded3")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<netcomm>)))
  "Returns full string definition for message of type '<netcomm>"
  (cl:format cl:nil "Header header~%~%sensor_msgs/Range range~%sensor_msgs/LaserScan scan~%nav_msgs/Odometry odom_combined~%bluedragon_propulsion/near_objects near_objects~%bluedragon_propulsion/propulsion propulsion~%tf/tfMessage tf~%~%~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%================================================================================~%MSG: sensor_msgs/Range~%# Single range reading from an active ranger that emits energy and reports~%# one range reading that is valid along an arc at the distance measured. ~%# This message is  not appropriate for laser scanners. See the LaserScan~%# message if you are working with a laser scanner.~%~%# This message also can represent a fixed-distance (binary) ranger.  This~%# sensor will have min_range===max_range===distance of detection.~%# These sensors follow REP 117 and will output -Inf if the object is detected~%# and +Inf if the object is outside of the detection range.~%~%Header header           # timestamp in the header is the time the ranger~%                        # returned the distance reading~%~%# Radiation type enums~%# If you want a value added to this list, send an email to the ros-users list~%uint8 ULTRASOUND=0~%uint8 INFRARED=1~%~%uint8 radiation_type    # the type of radiation used by the sensor~%                        # (sound, IR, etc) [enum]~%~%float32 field_of_view   # the size of the arc that the distance reading is~%                        # valid for [rad]~%                        # the object causing the range reading may have~%                        # been anywhere within -field_of_view/2 and~%                        # field_of_view/2 at the measured range. ~%                        # 0 angle corresponds to the x-axis of the sensor.~%~%float32 min_range       # minimum range value [m]~%float32 max_range       # maximum range value [m]~%                        # Fixed distance rangers require min_range==max_range~%~%float32 range           # range data [m]~%                        # (Note: values < range_min or > range_max~%                        # should be discarded)~%                        # Fixed distance rangers only output -Inf or +Inf.~%                        # -Inf represents a detection within fixed distance.~%                        # (Detection too close to the sensor to quantify)~%                        # +Inf represents no detection within the fixed distance.~%                        # (Object out of range)~%================================================================================~%MSG: sensor_msgs/LaserScan~%# Single scan from a planar laser range-finder~%#~%# If you have another ranging device with different behavior (e.g. a sonar~%# array), please find or create a different message, since applications~%# will make fairly laser-specific assumptions about this data~%~%Header header            # timestamp in the header is the acquisition time of ~%                         # the first ray in the scan.~%                         #~%                         # in frame frame_id, angles are measured around ~%                         # the positive Z axis (counterclockwise, if Z is up)~%                         # with zero angle being forward along the x axis~%                         ~%float32 angle_min        # start angle of the scan [rad]~%float32 angle_max        # end angle of the scan [rad]~%float32 angle_increment  # angular distance between measurements [rad]~%~%float32 time_increment   # time between measurements [seconds] - if your scanner~%                         # is moving, this will be used in interpolating position~%                         # of 3d points~%float32 scan_time        # time between scans [seconds]~%~%float32 range_min        # minimum range value [m]~%float32 range_max        # maximum range value [m]~%~%float32[] ranges         # range data [m] (Note: values < range_min or > range_max should be discarded)~%float32[] intensities    # intensity data [device-specific units].  If your~%                         # device does not provide intensities, please leave~%                         # the array empty.~%~%================================================================================~%MSG: nav_msgs/Odometry~%# This represents an estimate of a position and velocity in free space.  ~%# The pose in this message should be specified in the coordinate frame given by header.frame_id.~%# The twist in this message should be specified in the coordinate frame given by the child_frame_id~%Header header~%string child_frame_id~%geometry_msgs/PoseWithCovariance pose~%geometry_msgs/TwistWithCovariance twist~%~%================================================================================~%MSG: geometry_msgs/PoseWithCovariance~%# This represents a pose in free space with uncertainty.~%~%Pose pose~%~%# Row-major representation of the 6x6 covariance matrix~%# The orientation parameters use a fixed-axis representation.~%# In order, the parameters are:~%# (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)~%float64[36] covariance~%~%================================================================================~%MSG: geometry_msgs/Pose~%# A representation of pose in free space, composed of position and orientation. ~%Point position~%Quaternion orientation~%~%================================================================================~%MSG: geometry_msgs/Point~%# This contains the position of a point in free space~%float64 x~%float64 y~%float64 z~%~%================================================================================~%MSG: geometry_msgs/Quaternion~%# This represents an orientation in free space in quaternion form.~%~%float64 x~%float64 y~%float64 z~%float64 w~%~%================================================================================~%MSG: geometry_msgs/TwistWithCovariance~%# This expresses velocity in free space with uncertainty.~%~%Twist twist~%~%# Row-major representation of the 6x6 covariance matrix~%# The orientation parameters use a fixed-axis representation.~%# In order, the parameters are:~%# (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)~%float64[36] covariance~%~%================================================================================~%MSG: geometry_msgs/Twist~%# This expresses velocity in free space broken into its linear and angular parts.~%Vector3  linear~%Vector3  angular~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%================================================================================~%MSG: bluedragon_propulsion/near_objects~%Header header~%~%float64[] X_objects ~%float64[] Y_objects~%float64[] radians~%float64[] radius~%bool[] green_bouy~%bool[] red_bouy~%int64[] zone~%~%~%~%~%================================================================================~%MSG: bluedragon_propulsion/propulsion~%Header header~%~%int64 left_throttle~%int64 right_throttle~%~%================================================================================~%MSG: tf/tfMessage~%geometry_msgs/TransformStamped[] transforms~%~%================================================================================~%MSG: geometry_msgs/TransformStamped~%# This expresses a transform from coordinate frame header.frame_id~%# to the coordinate frame child_frame_id~%#~%# This message is mostly used by the ~%# <a href=\"http://wiki.ros.org/tf\">tf</a> package. ~%# See its documentation for more information.~%~%Header header~%string child_frame_id # the frame id of the child frame~%Transform transform~%~%================================================================================~%MSG: geometry_msgs/Transform~%# This represents the transform between two coordinate frames in free space.~%~%Vector3 translation~%Quaternion rotation~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'netcomm)))
  "Returns full string definition for message of type 'netcomm"
  (cl:format cl:nil "Header header~%~%sensor_msgs/Range range~%sensor_msgs/LaserScan scan~%nav_msgs/Odometry odom_combined~%bluedragon_propulsion/near_objects near_objects~%bluedragon_propulsion/propulsion propulsion~%tf/tfMessage tf~%~%~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%================================================================================~%MSG: sensor_msgs/Range~%# Single range reading from an active ranger that emits energy and reports~%# one range reading that is valid along an arc at the distance measured. ~%# This message is  not appropriate for laser scanners. See the LaserScan~%# message if you are working with a laser scanner.~%~%# This message also can represent a fixed-distance (binary) ranger.  This~%# sensor will have min_range===max_range===distance of detection.~%# These sensors follow REP 117 and will output -Inf if the object is detected~%# and +Inf if the object is outside of the detection range.~%~%Header header           # timestamp in the header is the time the ranger~%                        # returned the distance reading~%~%# Radiation type enums~%# If you want a value added to this list, send an email to the ros-users list~%uint8 ULTRASOUND=0~%uint8 INFRARED=1~%~%uint8 radiation_type    # the type of radiation used by the sensor~%                        # (sound, IR, etc) [enum]~%~%float32 field_of_view   # the size of the arc that the distance reading is~%                        # valid for [rad]~%                        # the object causing the range reading may have~%                        # been anywhere within -field_of_view/2 and~%                        # field_of_view/2 at the measured range. ~%                        # 0 angle corresponds to the x-axis of the sensor.~%~%float32 min_range       # minimum range value [m]~%float32 max_range       # maximum range value [m]~%                        # Fixed distance rangers require min_range==max_range~%~%float32 range           # range data [m]~%                        # (Note: values < range_min or > range_max~%                        # should be discarded)~%                        # Fixed distance rangers only output -Inf or +Inf.~%                        # -Inf represents a detection within fixed distance.~%                        # (Detection too close to the sensor to quantify)~%                        # +Inf represents no detection within the fixed distance.~%                        # (Object out of range)~%================================================================================~%MSG: sensor_msgs/LaserScan~%# Single scan from a planar laser range-finder~%#~%# If you have another ranging device with different behavior (e.g. a sonar~%# array), please find or create a different message, since applications~%# will make fairly laser-specific assumptions about this data~%~%Header header            # timestamp in the header is the acquisition time of ~%                         # the first ray in the scan.~%                         #~%                         # in frame frame_id, angles are measured around ~%                         # the positive Z axis (counterclockwise, if Z is up)~%                         # with zero angle being forward along the x axis~%                         ~%float32 angle_min        # start angle of the scan [rad]~%float32 angle_max        # end angle of the scan [rad]~%float32 angle_increment  # angular distance between measurements [rad]~%~%float32 time_increment   # time between measurements [seconds] - if your scanner~%                         # is moving, this will be used in interpolating position~%                         # of 3d points~%float32 scan_time        # time between scans [seconds]~%~%float32 range_min        # minimum range value [m]~%float32 range_max        # maximum range value [m]~%~%float32[] ranges         # range data [m] (Note: values < range_min or > range_max should be discarded)~%float32[] intensities    # intensity data [device-specific units].  If your~%                         # device does not provide intensities, please leave~%                         # the array empty.~%~%================================================================================~%MSG: nav_msgs/Odometry~%# This represents an estimate of a position and velocity in free space.  ~%# The pose in this message should be specified in the coordinate frame given by header.frame_id.~%# The twist in this message should be specified in the coordinate frame given by the child_frame_id~%Header header~%string child_frame_id~%geometry_msgs/PoseWithCovariance pose~%geometry_msgs/TwistWithCovariance twist~%~%================================================================================~%MSG: geometry_msgs/PoseWithCovariance~%# This represents a pose in free space with uncertainty.~%~%Pose pose~%~%# Row-major representation of the 6x6 covariance matrix~%# The orientation parameters use a fixed-axis representation.~%# In order, the parameters are:~%# (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)~%float64[36] covariance~%~%================================================================================~%MSG: geometry_msgs/Pose~%# A representation of pose in free space, composed of position and orientation. ~%Point position~%Quaternion orientation~%~%================================================================================~%MSG: geometry_msgs/Point~%# This contains the position of a point in free space~%float64 x~%float64 y~%float64 z~%~%================================================================================~%MSG: geometry_msgs/Quaternion~%# This represents an orientation in free space in quaternion form.~%~%float64 x~%float64 y~%float64 z~%float64 w~%~%================================================================================~%MSG: geometry_msgs/TwistWithCovariance~%# This expresses velocity in free space with uncertainty.~%~%Twist twist~%~%# Row-major representation of the 6x6 covariance matrix~%# The orientation parameters use a fixed-axis representation.~%# In order, the parameters are:~%# (x, y, z, rotation about X axis, rotation about Y axis, rotation about Z axis)~%float64[36] covariance~%~%================================================================================~%MSG: geometry_msgs/Twist~%# This expresses velocity in free space broken into its linear and angular parts.~%Vector3  linear~%Vector3  angular~%~%================================================================================~%MSG: geometry_msgs/Vector3~%# This represents a vector in free space. ~%# It is only meant to represent a direction. Therefore, it does not~%# make sense to apply a translation to it (e.g., when applying a ~%# generic rigid transformation to a Vector3, tf2 will only apply the~%# rotation). If you want your data to be translatable too, use the~%# geometry_msgs/Point message instead.~%~%float64 x~%float64 y~%float64 z~%================================================================================~%MSG: bluedragon_propulsion/near_objects~%Header header~%~%float64[] X_objects ~%float64[] Y_objects~%float64[] radians~%float64[] radius~%bool[] green_bouy~%bool[] red_bouy~%int64[] zone~%~%~%~%~%================================================================================~%MSG: bluedragon_propulsion/propulsion~%Header header~%~%int64 left_throttle~%int64 right_throttle~%~%================================================================================~%MSG: tf/tfMessage~%geometry_msgs/TransformStamped[] transforms~%~%================================================================================~%MSG: geometry_msgs/TransformStamped~%# This expresses a transform from coordinate frame header.frame_id~%# to the coordinate frame child_frame_id~%#~%# This message is mostly used by the ~%# <a href=\"http://wiki.ros.org/tf\">tf</a> package. ~%# See its documentation for more information.~%~%Header header~%string child_frame_id # the frame id of the child frame~%Transform transform~%~%================================================================================~%MSG: geometry_msgs/Transform~%# This represents the transform between two coordinate frames in free space.~%~%Vector3 translation~%Quaternion rotation~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <netcomm>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'range))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'scan))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'odom_combined))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'near_objects))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'propulsion))
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'tf))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <netcomm>))
  "Converts a ROS message object to a list"
  (cl:list 'netcomm
    (cl:cons ':header (header msg))
    (cl:cons ':range (range msg))
    (cl:cons ':scan (scan msg))
    (cl:cons ':odom_combined (odom_combined msg))
    (cl:cons ':near_objects (near_objects msg))
    (cl:cons ':propulsion (propulsion msg))
    (cl:cons ':tf (tf msg))
))
