; Auto-generated. Do not edit!


(cl:in-package bluedragon_netcomm-msg)


;//! \htmlinclude serial_size.msg.html

(cl:defclass <serial_size> (roslisp-msg-protocol:ros-message)
  ((pr_serial_size
    :reader pr_serial_size
    :initarg :pr_serial_size
    :type cl:integer
    :initform 0)
   (no_serial_size
    :reader no_serial_size
    :initarg :no_serial_size
    :type cl:integer
    :initform 0)
   (ls_serial_size
    :reader ls_serial_size
    :initarg :ls_serial_size
    :type cl:integer
    :initform 0)
   (tf_serial_size
    :reader tf_serial_size
    :initarg :tf_serial_size
    :type cl:integer
    :initform 0)
   (ra_serial_size
    :reader ra_serial_size
    :initarg :ra_serial_size
    :type cl:integer
    :initform 0)
   (od_serial_size
    :reader od_serial_size
    :initarg :od_serial_size
    :type cl:integer
    :initform 0)
   (ma_serial_size
    :reader ma_serial_size
    :initarg :ma_serial_size
    :type cl:integer
    :initform 0))
)

(cl:defclass serial_size (<serial_size>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <serial_size>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'serial_size)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name bluedragon_netcomm-msg:<serial_size> is deprecated: use bluedragon_netcomm-msg:serial_size instead.")))

(cl:ensure-generic-function 'pr_serial_size-val :lambda-list '(m))
(cl:defmethod pr_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:pr_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:pr_serial_size instead.")
  (pr_serial_size m))

(cl:ensure-generic-function 'no_serial_size-val :lambda-list '(m))
(cl:defmethod no_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:no_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:no_serial_size instead.")
  (no_serial_size m))

(cl:ensure-generic-function 'ls_serial_size-val :lambda-list '(m))
(cl:defmethod ls_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:ls_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:ls_serial_size instead.")
  (ls_serial_size m))

(cl:ensure-generic-function 'tf_serial_size-val :lambda-list '(m))
(cl:defmethod tf_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:tf_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:tf_serial_size instead.")
  (tf_serial_size m))

(cl:ensure-generic-function 'ra_serial_size-val :lambda-list '(m))
(cl:defmethod ra_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:ra_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:ra_serial_size instead.")
  (ra_serial_size m))

(cl:ensure-generic-function 'od_serial_size-val :lambda-list '(m))
(cl:defmethod od_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:od_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:od_serial_size instead.")
  (od_serial_size m))

(cl:ensure-generic-function 'ma_serial_size-val :lambda-list '(m))
(cl:defmethod ma_serial_size-val ((m <serial_size>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader bluedragon_netcomm-msg:ma_serial_size-val is deprecated.  Use bluedragon_netcomm-msg:ma_serial_size instead.")
  (ma_serial_size m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <serial_size>) ostream)
  "Serializes a message object of type '<serial_size>"
  (cl:let* ((signed (cl:slot-value msg 'pr_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'no_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'ls_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'tf_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'ra_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'od_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'ma_serial_size)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <serial_size>) istream)
  "Deserializes a message object of type '<serial_size>"
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'pr_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'no_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'ls_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'tf_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'ra_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'od_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'ma_serial_size) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<serial_size>)))
  "Returns string type for a message object of type '<serial_size>"
  "bluedragon_netcomm/serial_size")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'serial_size)))
  "Returns string type for a message object of type 'serial_size"
  "bluedragon_netcomm/serial_size")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<serial_size>)))
  "Returns md5sum for a message object of type '<serial_size>"
  "4ae69dddfb963b4406ee9199a82f29d0")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'serial_size)))
  "Returns md5sum for a message object of type 'serial_size"
  "4ae69dddfb963b4406ee9199a82f29d0")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<serial_size>)))
  "Returns full string definition for message of type '<serial_size>"
  (cl:format cl:nil "~%int32 pr_serial_size~%int32 no_serial_size~%int32 ls_serial_size~%int32 tf_serial_size~%int32 ra_serial_size~%int32 od_serial_size~%int32 ma_serial_size~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'serial_size)))
  "Returns full string definition for message of type 'serial_size"
  (cl:format cl:nil "~%int32 pr_serial_size~%int32 no_serial_size~%int32 ls_serial_size~%int32 tf_serial_size~%int32 ra_serial_size~%int32 od_serial_size~%int32 ma_serial_size~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <serial_size>))
  (cl:+ 0
     4
     4
     4
     4
     4
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <serial_size>))
  "Converts a ROS message object to a list"
  (cl:list 'serial_size
    (cl:cons ':pr_serial_size (pr_serial_size msg))
    (cl:cons ':no_serial_size (no_serial_size msg))
    (cl:cons ':ls_serial_size (ls_serial_size msg))
    (cl:cons ':tf_serial_size (tf_serial_size msg))
    (cl:cons ':ra_serial_size (ra_serial_size msg))
    (cl:cons ':od_serial_size (od_serial_size msg))
    (cl:cons ':ma_serial_size (ma_serial_size msg))
))
