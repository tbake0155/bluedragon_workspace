; Auto-generated. Do not edit!


(cl:in-package bluedragon_netcomm-msg)


;//! \htmlinclude flag.msg.html

(cl:defclass <flag> (roslisp-msg-protocol:ros-message)
  ((user_flag
    :reader user_flag
    :initarg :user_flag
    :type cl:fixnum
    :initform 0))
)

(cl:defclass flag (<flag>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <flag>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'flag)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_netcomm-msg:<flag> is deprecated: use bluedragon_netcomm-msg:flag instead.")))

(cl:ensure-generic-function 'user_flag-val :lambda-list '(m))
(cl:defmethod user_flag-val ((m <flag>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:user_flag-val is deprecated.  Use bluedragon_netcomm-msg:user_flag instead.")
  (user_flag m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <flag>) ostream)
  "Serializes a message object of type '<flag>"
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'user_flag)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <flag>) istream)
  "Deserializes a message object of type '<flag>"
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'user_flag)) (cl:read-byte istream))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<flag>)))
  "Returns string type for a message object of type '<flag>"
  "bluedragon_netcomm/flag")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'flag)))
  "Returns string type for a message object of type 'flag"
  "bluedragon_netcomm/flag")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<flag>)))
  "Returns md5sum for a message object of type '<flag>"
  "d78f593981d746c0e518fd7d6c60416a")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'flag)))
  "Returns md5sum for a message object of type 'flag"
  "d78f593981d746c0e518fd7d6c60416a")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<flag>)))
  "Returns full string definition for message of type '<flag>"
  (cl:format cl:nil "uint8 user_flag~%~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'flag)))
  "Returns full string definition for message of type 'flag"
  (cl:format cl:nil "uint8 user_flag~%~%~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <flag>))
  (cl:+ 0
     1
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <flag>))
  "Converts a ROS message object to a list"
  (cl:list 'flag
    (cl:cons ':user_flag (user_flag msg))
))
