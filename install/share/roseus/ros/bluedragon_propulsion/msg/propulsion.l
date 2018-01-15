;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_propulsion::propulsion)
  (if (not (find-package "BLUEDRAGON_PROPULSION"))
    (make-package "BLUEDRAGON_PROPULSION"))
  (shadow 'propulsion (find-package "BLUEDRAGON_PROPULSION")))
(unless (find-package "BLUEDRAGON_PROPULSION::PROPULSION")
  (make-package "BLUEDRAGON_PROPULSION::PROPULSION"))

(in-package "ROS")
;;//! \htmlinclude propulsion.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass bluedragon_propulsion::propulsion
  :super ros::object
  :slots (_header _left_throttle _right_throttle ))

(defmethod bluedragon_propulsion::propulsion
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:left_throttle __left_throttle) 0)
    ((:right_throttle __right_throttle) 0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _left_throttle (round __left_throttle))
   (setq _right_throttle (round __right_throttle))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:left_throttle
   (&optional __left_throttle)
   (if __left_throttle (setq _left_throttle __left_throttle)) _left_throttle)
  (:right_throttle
   (&optional __right_throttle)
   (if __right_throttle (setq _right_throttle __right_throttle)) _right_throttle)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; int64 _left_throttle
    8
    ;; int64 _right_throttle
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; int64 _left_throttle
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _left_throttle (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _left_throttle) (= (length (_left_throttle . bv)) 2)) ;; bignum
              (write-long (ash (elt (_left_throttle . bv) 0) 0) s)
              (write-long (ash (elt (_left_throttle . bv) 1) -1) s))
             ((and (class _left_throttle) (= (length (_left_throttle . bv)) 1)) ;; big1
              (write-long (elt (_left_throttle . bv) 0) s)
              (write-long (if (>= _left_throttle 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _left_throttle s)(write-long (if (>= _left_throttle 0) 0 #xffffffff) s)))
     ;; int64 _right_throttle
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _right_throttle (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _right_throttle) (= (length (_right_throttle . bv)) 2)) ;; bignum
              (write-long (ash (elt (_right_throttle . bv) 0) 0) s)
              (write-long (ash (elt (_right_throttle . bv) 1) -1) s))
             ((and (class _right_throttle) (= (length (_right_throttle . bv)) 1)) ;; big1
              (write-long (elt (_right_throttle . bv) 0) s)
              (write-long (if (>= _right_throttle 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _right_throttle s)(write-long (if (>= _right_throttle 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; int64 _left_throttle
#+(or :alpha :irix6 :x86_64)
      (setf _left_throttle (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _left_throttle (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;; int64 _right_throttle
#+(or :alpha :irix6 :x86_64)
      (setf _right_throttle (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _right_throttle (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;;
   self)
  )

(setf (get bluedragon_propulsion::propulsion :md5sum-) "a774e17636e326c8db038b535586c623")
(setf (get bluedragon_propulsion::propulsion :datatype-) "bluedragon_propulsion/propulsion")
(setf (get bluedragon_propulsion::propulsion :definition-)
      "Header header

int64 left_throttle
int64 right_throttle

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

")



(provide :bluedragon_propulsion/propulsion "a774e17636e326c8db038b535586c623")


