; Auto-generated. Do not edit!


(cl:in-package bluedragon_propulsion-msg)


;//! \htmlinclude propulsion.msg.html

(cl:defclass <propulsion> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (left_throttle
    :reader left_throttle
    :initarg :left_throttle
    :type cl:integer
    :initform 0)
   (right_throttle
    :reader right_throttle
    :initarg :right_throttle
    :type cl:integer
    :initform 0))
)

(cl:defclass propulsion (<propulsion>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <propulsion>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'propulsion)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_propulsion-msg:<propulsion> is deprecated: use bluedragon_propulsion-msg:propulsion instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <propulsion>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_propulsion-msg:header-val is deprecated.  Use bluedragon_propulsion-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'left_throttle-val :lambda-list '(m))
(cl:defmethod left_throttle-val ((m <propulsion>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_propulsion-msg:left_throttle-val is deprecated.  Use bluedragon_propulsion-msg:left_throttle instead.")
  (left_throttle m))

(cl:ensure-generic-function 'right_throttle-val :lambda-list '(m))
(cl:defmethod right_throttle-val ((m <propulsion>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_propulsion-msg:right_throttle-val is deprecated.  Use bluedragon_propulsion-msg:right_throttle instead.")
  (right_throttle m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <propulsion>) ostream)
  "Serializes a message object of type '<propulsion>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let* ((signed (cl:slot-value msg 'left_throttle)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 18446744073709551616) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'right_throttle)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 18446744073709551616) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) unsigned) ostream)
    )
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <propulsion>) istream)
  "Deserializes a message object of type '<propulsion>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'left_throttle) (cl:if (cl:< unsigned 9223372036854775808) unsigned (cl:- unsigned 18446744073709551616))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'right_throttle) (cl:if (cl:< unsigned 9223372036854775808) unsigned (cl:- unsigned 18446744073709551616))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<propulsion>)))
  "Returns string type for a message object of type '<propulsion>"
  "bluedragon_propulsion/propulsion")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'propulsion)))
  "Returns string type for a message object of type 'propulsion"
  "bluedragon_propulsion/propulsion")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<propulsion>)))
  "Returns md5sum for a message object of type '<propulsion>"
  "a774e17636e326c8db038b535586c623")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'propulsion)))
  "Returns md5sum for a message object of type 'propulsion"
  "a774e17636e326c8db038b535586c623")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<propulsion>)))
  "Returns full string definition for message of type '<propulsion>"
  (cl:format cl:nil "Header header~%~%int64 left_throttle~%int64 right_throttle~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'propulsion)))
  "Returns full string definition for message of type 'propulsion"
  (cl:format cl:nil "Header header~%~%int64 left_throttle~%int64 right_throttle~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <propulsion>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     8
     8
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <propulsion>))
  "Converts a ROS message object to a list"
  (cl:list 'propulsion
    (cl:cons ':header (header msg))
    (cl:cons ':left_throttle (left_throttle msg))
    (cl:cons ':right_throttle (right_throttle msg))
))
