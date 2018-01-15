;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_propulsion::near_objects_Y)
  (if (not (find-package "BLUEDRAGON_PROPULSION"))
    (make-package "BLUEDRAGON_PROPULSION"))
  (shadow 'near_objects_Y (find-package "BLUEDRAGON_PROPULSION")))
(unless (find-package "BLUEDRAGON_PROPULSION::NEAR_OBJECTS_Y")
  (make-package "BLUEDRAGON_PROPULSION::NEAR_OBJECTS_Y"))

(in-package "ROS")
;;//! \htmlinclude near_objects_Y.msg.html


(defclass bluedragon_propulsion::near_objects_Y
  :super ros::object
  :slots (_Y_objects ))

(defmethod bluedragon_propulsion::near_objects_Y
  (:init
   (&key
    ((:Y_objects __Y_objects) (make-array 0 :initial-element 0.0 :element-type :float))
    )
   (send-super :init)
   (setq _Y_objects __Y_objects)
   self)
  (:Y_objects
   (&optional __Y_objects)
   (if __Y_objects (setq _Y_objects __Y_objects)) _Y_objects)
  (:serialization-length
   ()
   (+
    ;; float64[] _Y_objects
    (* 8    (length _Y_objects)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64[] _Y_objects
     (write-long (length _Y_objects) s)
     (dotimes (i (length _Y_objects))
       (sys::poke (elt _Y_objects i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64[] _Y_objects
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _Y_objects (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _Y_objects i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;;
   self)
  )

(setf (get bluedragon_propulsion::near_objects_Y :md5sum-) "5ebdc4270ce0a25ba89d453ef40152f9")
(setf (get bluedragon_propulsion::near_objects_Y :datatype-) "bluedragon_propulsion/near_objects_Y")
(setf (get bluedragon_propulsion::near_objects_Y :definition-)
      "float64[] Y_objects 

")



(provide :bluedragon_propulsion/near_objects_Y "5ebdc4270ce0a25ba89d453ef40152f9")


