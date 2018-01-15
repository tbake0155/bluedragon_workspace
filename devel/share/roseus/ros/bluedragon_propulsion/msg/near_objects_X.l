;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_propulsion::near_objects_X)
  (if (not (find-package "BLUEDRAGON_PROPULSION"))
    (make-package "BLUEDRAGON_PROPULSION"))
  (shadow 'near_objects_X (find-package "BLUEDRAGON_PROPULSION")))
(unless (find-package "BLUEDRAGON_PROPULSION::NEAR_OBJECTS_X")
  (make-package "BLUEDRAGON_PROPULSION::NEAR_OBJECTS_X"))

(in-package "ROS")
;;//! \htmlinclude near_objects_X.msg.html


(defclass bluedragon_propulsion::near_objects_X
  :super ros::object
  :slots (_X_objects ))

(defmethod bluedragon_propulsion::near_objects_X
  (:init
   (&key
    ((:X_objects __X_objects) (make-array 0 :initial-element 0.0 :element-type :float))
    )
   (send-super :init)
   (setq _X_objects __X_objects)
   self)
  (:X_objects
   (&optional __X_objects)
   (if __X_objects (setq _X_objects __X_objects)) _X_objects)
  (:serialization-length
   ()
   (+
    ;; float64[] _X_objects
    (* 8    (length _X_objects)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64[] _X_objects
     (write-long (length _X_objects) s)
     (dotimes (i (length _X_objects))
       (sys::poke (elt _X_objects i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64[] _X_objects
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _X_objects (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _X_objects i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;;
   self)
  )

(setf (get bluedragon_propulsion::near_objects_X :md5sum-) "6f7a1b98aa7ff3484c531a329b3cf233")
(setf (get bluedragon_propulsion::near_objects_X :datatype-) "bluedragon_propulsion/near_objects_X")
(setf (get bluedragon_propulsion::near_objects_X :definition-)
      "float64[] X_objects 

")



(provide :bluedragon_propulsion/near_objects_X "6f7a1b98aa7ff3484c531a329b3cf233")


