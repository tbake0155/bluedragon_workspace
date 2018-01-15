; Auto-generated. Do not edit!


(cl:in-package bluedragon_propulsion-msg)


;//! \htmlinclude object_detection.msg.html

(cl:defclass <object_detection> (roslisp-msg-protocol:ros-message)
  ((object_detection
    :reader object_detection
    :initarg :object_detection
    :type (cl:vector cl:boolean)
   :initform (cl:make-array 6 :element-type 'cl:boolean :initial-element cl:nil)))
)

(cl:defclass object_detection (<object_detection>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <object_detection>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'object_detection)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_propulsion-msg:<object_detection> is deprecated: use bluedragon_propulsion-msg:object_detection instead.")))

(cl:ensure-generic-function 'object_detection-val :lambda-list '(m))
(cl:defmethod object_detection-val ((m <object_detection>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_propulsion-msg:object_detection-val is deprecated.  Use bluedragon_propulsion-msg:object_detection instead.")
  (object_detection m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <object_detection>) ostream)
  "Serializes a message object of type '<object_detection>"
  (cl:map cl:nil #'(cl:lambda (ele) (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:if ele 1 0)) ostream))
   (cl:slot-value msg 'object_detection))
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <object_detection>) istream)
  "Deserializes a message object of type '<object_detection>"
  (cl:setf (cl:slot-value msg 'object_detection) (cl:make-array 6))
  (cl:let ((vals (cl:slot-value msg 'object_detection)))
    (cl:dotimes (i 6)
    (cl:setf (cl:aref vals i) (cl:not (cl:zerop (cl:read-byte istream))))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<object_detection>)))
  "Returns string type for a message object of type '<object_detection>"
  "bluedragon_propulsion/object_detection")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'object_detection)))
  "Returns string type for a message object of type 'object_detection"
  "bluedragon_propulsion/object_detection")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<object_detection>)))
  "Returns md5sum for a message object of type '<object_detection>"
  "f9da5b0bcdc242559cfa3d1d953b4db2")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'object_detection)))
  "Returns md5sum for a message object of type 'object_detection"
  "f9da5b0bcdc242559cfa3d1d953b4db2")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<object_detection>)))
  "Returns full string definition for message of type '<object_detection>"
  (cl:format cl:nil "bool[6] object_detection~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'object_detection)))
  "Returns full string definition for message of type 'object_detection"
  (cl:format cl:nil "bool[6] object_detection~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <object_detection>))
  (cl:+ 0
     0 (cl:reduce #'cl:+ (cl:slot-value msg 'object_detection) :key #'(cl:lambda (ele) (cl:declare (cl:ignorable ele)) (cl:+ 1)))
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <object_detection>))
  "Converts a ROS message object to a list"
  (cl:list 'object_detection
    (cl:cons ':object_detection (object_detection msg))
))
