;; Auto-generated. Do not edit!


(when (boundp 'test_rosbag::Renamed4)
  (if (not (find-package "TEST_ROSBAG"))
    (make-package "TEST_ROSBAG"))
  (shadow 'Renamed4 (find-package "TEST_ROSBAG")))
(unless (find-package "TEST_ROSBAG::RENAMED4")
  (make-package "TEST_ROSBAG::RENAMED4"))

(in-package "ROS")
;;//! \htmlinclude Renamed4.msg.html


(defclass test_rosbag::Renamed4
  :super ros::object
  :slots (_foo _bar ))

(defmethod test_rosbag::Renamed4
  (:init
   (&key
    ((:foo __foo) 0.0)
    ((:bar __bar) (make-array 4 :initial-element 0 :element-type :integer))
    )
   (send-super :init)
   (setq _foo (float __foo))
   (setq _bar __bar)
   self)
  (:foo
   (&optional __foo)
   (if __foo (setq _foo __foo)) _foo)
  (:bar
   (&optional __bar)
   (if __bar (setq _bar __bar)) _bar)
  (:serialization-length
   ()
   (+
    ;; float64 _foo
    8
    ;; int32[4] _bar
    (* 4    4)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _foo
       (sys::poke _foo (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; int32[4] _bar
     (dotimes (i 4)
       (write-long (elt _bar i) s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _foo
     (setq _foo (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; int32[4] _bar
   (dotimes (i (length _bar))
     (setf (elt _bar i) (sys::peek buf ptr- :integer)) (incf ptr- 4)
     )
   ;;
   self)
  )

(setf (get test_rosbag::Renamed4 :md5sum-) "dd19d6452bb5e45bb900f81fed30ae83")
(setf (get test_rosbag::Renamed4 :datatype-) "test_rosbag/Renamed4")
(setf (get test_rosbag::Renamed4 :definition-)
      "float64  foo  # 2.17
int32[4] bar  # [8, 2, 5, 1]
")



(provide :test_rosbag/Renamed4 "dd19d6452bb5e45bb900f81fed30ae83")


