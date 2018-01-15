;; Auto-generated. Do not edit!


(when (boundp 'test_rosbag::MigratedExplicit)
  (if (not (find-package "TEST_ROSBAG"))
    (make-package "TEST_ROSBAG"))
  (shadow 'MigratedExplicit (find-package "TEST_ROSBAG")))
(unless (find-package "TEST_ROSBAG::MIGRATEDEXPLICIT")
  (make-package "TEST_ROSBAG::MIGRATEDEXPLICIT"))

(in-package "ROS")
;;//! \htmlinclude MigratedExplicit.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass test_rosbag::MigratedExplicit
  :super ros::object
  :slots (_header _afield2 _combo_field3 _afield4 ))

(defmethod test_rosbag::MigratedExplicit
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:afield2 __afield2) 0.0)
    ((:combo_field3 __combo_field3) "")
    ((:afield4 __afield4) 0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _afield2 (float __afield2))
   (setq _combo_field3 (string __combo_field3))
   (setq _afield4 (round __afield4))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:afield2
   (&optional __afield2)
   (if __afield2 (setq _afield2 __afield2)) _afield2)
  (:combo_field3
   (&optional __combo_field3)
   (if __combo_field3 (setq _combo_field3 __combo_field3)) _combo_field3)
  (:afield4
   (&optional __afield4)
   (if __afield4 (setq _afield4 __afield4)) _afield4)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float32 _afield2
    4
    ;; string _combo_field3
    4 (length _combo_field3)
    ;; int32 _afield4
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float32 _afield2
       (sys::poke _afield2 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; string _combo_field3
       (write-long (length _combo_field3) s) (princ _combo_field3 s)
     ;; int32 _afield4
       (write-long _afield4 s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float32 _afield2
     (setq _afield2 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; string _combo_field3
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _combo_field3 (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; int32 _afield4
     (setq _afield4 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get test_rosbag::MigratedExplicit :md5sum-) "615f47263d68f3ea2dee962dc22dd171")
(setf (get test_rosbag::MigratedExplicit :datatype-) "test_rosbag/MigratedExplicit")
(setf (get test_rosbag::MigratedExplicit :definition-)
      "Header  header
float32 afield2 #58.2
string  combo_field3 #\"aldfkja 17\"
int32   afield4 #82
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



(provide :test_rosbag/MigratedExplicit "615f47263d68f3ea2dee962dc22dd171")


