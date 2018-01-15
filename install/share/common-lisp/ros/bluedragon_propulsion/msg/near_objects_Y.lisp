; Auto-generated. Do not edit!


(cl:in-package bluedragon_propulsion-msg)


;//! \htmlinclude near_objects_Y.msg.html

(cl:defclass <near_objects_Y> (roslisp-msg-protocol:ros-message)
  ((Y_objects
    :reader Y_objects
    :initarg :Y_objects
    :type (cl:vector cl:float)
   :initform (cl:make-array 0 :element-type 'cl:float :initial-element 0.0)))
)

(cl:defclass near_objects_Y (<near_objects_Y>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <near_objects_Y>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'near_objects_Y)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_propulsion-msg:<near_objects_Y> is deprecated: use bluedragon_propulsion-msg:near_objects_Y instead.")))

(cl:ensure-generic-function 'Y_objects-val :lambda-list '(m))
(cl:defmethod Y_objects-val ((m <near_objects_Y>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_propulsion-msg:Y_objects-val is deprecated.  Use bluedragon_propulsion-msg:Y_objects instead.")
  (Y_objects m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <near_objects_Y>) ostream)
  "Serializes a message object of type '<near_objects_Y>"
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'Y_objects))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) __ros_arr_len) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) __ros_arr_len) ostream))
  (cl:map cl:nil #'(cl:lambda (ele) (cl:let ((bits (roslisp-utils:encode-double-float-bits ele)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream)))
   (cl:slot-value msg 'Y_objects))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <near_objects_Y>) istream)
  "Deserializes a message object of type '<near_objects_Y>"
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'Y_objects) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'Y_objects)))
    (cl:dotimes (i __ros_arr_len)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:aref vals i) (roslisp-utils:decode-double-float-bits bits))))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<near_objects_Y>)))
  "Returns string type for a message object of type '<near_objects_Y>"
  "bluedragon_propulsion/near_objects_Y")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'near_objects_Y)))
  "Returns string type for a message object of type 'near_objects_Y"
  "bluedragon_propulsion/near_objects_Y")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<near_objects_Y>)))
  "Returns md5sum for a message object of type '<near_objects_Y>"
  "5ebdc4270ce0a25ba89d453ef40152f9")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'near_objects_Y)))
  "Returns md5sum for a message object of type 'near_objects_Y"
  "5ebdc4270ce0a25ba89d453ef40152f9")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<near_objects_Y>)))
  "Returns full string definition for message of type '<near_objects_Y>"
  (cl:format cl:nil "float64[] Y_objects ~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'near_objects_Y)))
  "Returns full string definition for message of type 'near_objects_Y"
  (cl:format cl:nil "float64[] Y_objects ~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <near_objects_Y>))
  (cl:+ 0
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'Y_objects) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ 8)))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <near_objects_Y>))
  "Converts a ROS message object to a list"
  (cl:list 'near_objects_Y
    (cl:cons ':Y_objects (Y_objects msg))
))
