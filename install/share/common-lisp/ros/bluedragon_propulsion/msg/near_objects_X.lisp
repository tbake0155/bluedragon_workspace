; Auto-generated. Do not edit!


(cl:in-package bluedragon_propulsion-msg)


;//! \htmlinclude near_objects_X.msg.html

(cl:defclass <near_objects_X> (roslisp-msg-protocol:ros-message)
  ((X_objects
    :reader X_objects
    :initarg :X_objects
    :type (cl:vector cl:float)
   :initform (cl:make-array 0 :element-type 'cl:float :initial-element 0.0)))
)

(cl:defclass near_objects_X (<near_objects_X>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <near_objects_X>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'near_objects_X)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_propulsion-msg:<near_objects_X> is deprecated: use bluedragon_propulsion-msg:near_objects_X instead.")))

(cl:ensure-generic-function 'X_objects-val :lambda-list '(m))
(cl:defmethod X_objects-val ((m <near_objects_X>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_propulsion-msg:X_objects-val is deprecated.  Use bluedragon_propulsion-msg:X_objects instead.")
  (X_objects m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <near_objects_X>) ostream)
  "Serializes a message object of type '<near_objects_X>"
  (cl:let ((__ros_arr_len (cl:length (cl:slot-value msg 'X_objects))))
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
   (cl:slot-value msg 'X_objects))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <near_objects_X>) istream)
  "Deserializes a message object of type '<near_objects_X>"
  (cl:let ((__ros_arr_len 0))
    (cl:setf (cl:ldb (cl:byte 8 0) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) __ros_arr_len) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) __ros_arr_len) (cl:read-byte istream))
  (cl:setf (cl:slot-value msg 'X_objects) (cl:make-array __ros_arr_len))
  (cl:let ((vals (cl:slot-value msg 'X_objects)))
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
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<near_objects_X>)))
  "Returns string type for a message object of type '<near_objects_X>"
  "bluedragon_propulsion/near_objects_X")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'near_objects_X)))
  "Returns string type for a message object of type 'near_objects_X"
  "bluedragon_propulsion/near_objects_X")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<near_objects_X>)))
  "Returns md5sum for a message object of type '<near_objects_X>"
  "6f7a1b98aa7ff3484c531a329b3cf233")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'near_objects_X)))
  "Returns md5sum for a message object of type 'near_objects_X"
  "6f7a1b98aa7ff3484c531a329b3cf233")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<near_objects_X>)))
  "Returns full string definition for message of type '<near_objects_X>"
  (cl:format cl:nil "float64[] X_objects ~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'near_objects_X)))
  "Returns full string definition for message of type 'near_objects_X"
  (cl:format cl:nil "float64[] X_objects ~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <near_objects_X>))
  (cl:+ 0
     4 (cl:reduce #'cl:+ (cl:slot-value msg 'X_objects) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ 8)))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <near_objects_X>))
  "Converts a ROS message object to a list"
  (cl:list 'near_objects_X
    (cl:cons ':X_objects (X_objects msg))
))
