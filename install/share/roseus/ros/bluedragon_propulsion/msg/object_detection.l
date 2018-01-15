;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_propulsion::object_detection)
  (if (not (find-package "BLUEDRAGON_PROPULSION"))
    (make-package "BLUEDRAGON_PROPULSION"))
  (shadow 'object_detection (find-package "BLUEDRAGON_PROPULSION")))
(unless (find-package "BLUEDRAGON_PROPULSION::OBJECT_DETECTION")
  (make-package "BLUEDRAGON_PROPULSION::OBJECT_DETECTION"))

(in-package "ROS")
;;//! \htmlinclude object_detection.msg.html


(defclass bluedragon_propulsion::object_detection
  :super ros::object
  :slots (_object_detection ))

(defmethod bluedragon_propulsion::object_detection
  (:init
   (&key
    ((:object_detection __object_detection) (let (r) (dotimes (i 6) (push nil r)) r))
    )
   (send-super :init)
   (setq _object_detection __object_detection)
   self)
  (:object_detection
   (&optional __object_detection)
   (if __object_detection (setq _object_detection __object_detection)) _object_detection)
  (:serialization-length
   ()
   (+
    ;; bool[6] _object_detection
    (* 1    6)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool[6] _object_detection
     (dotimes (i 6)
       (if (elt _object_detection i) (write-byte -1 s) (write-byte 0 s))
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool[6] _object_detection
   (dotimes (i (length _object_detection))
     (setf (elt _object_detection i) (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
     )
   ;;
   self)
  )

(setf (get bluedragon_propulsion::object_detection :md5sum-) "f9da5b0bcdc242559cfa3d1d953b4db2")
(setf (get bluedragon_propulsion::object_detection :datatype-) "bluedragon_propulsion/object_detection")
(setf (get bluedragon_propulsion::object_detection :definition-)
      "bool[6] object_detection

")



(provide :bluedragon_propulsion/object_detection "f9da5b0bcdc242559cfa3d1d953b4db2")


