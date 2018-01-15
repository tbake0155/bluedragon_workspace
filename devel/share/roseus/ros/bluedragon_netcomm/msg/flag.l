;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_netcomm::flag)
  (if (not (find-package "BLUEDRAGON_NETCOMM"))
    (make-package "BLUEDRAGON_NETCOMM"))
  (shadow 'flag (find-package "BLUEDRAGON_NETCOMM")))
(unless (find-package "BLUEDRAGON_NETCOMM::FLAG")
  (make-package "BLUEDRAGON_NETCOMM::FLAG"))

(in-package "ROS")
;;//! \htmlinclude flag.msg.html


(defclass bluedragon_netcomm::flag
  :super ros::object
  :slots (_user_flag ))

(defmethod bluedragon_netcomm::flag
  (:init
   (&key
    ((:user_flag __user_flag) 0)
    )
   (send-super :init)
   (setq _user_flag (round __user_flag))
   self)
  (:user_flag
   (&optional __user_flag)
   (if __user_flag (setq _user_flag __user_flag)) _user_flag)
  (:serialization-length
   ()
   (+
    ;; uint8 _user_flag
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint8 _user_flag
       (write-byte _user_flag s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint8 _user_flag
     (setq _user_flag (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;;
   self)
  )

(setf (get bluedragon_netcomm::flag :md5sum-) "d78f593981d746c0e518fd7d6c60416a")
(setf (get bluedragon_netcomm::flag :datatype-) "bluedragon_netcomm/flag")
(setf (get bluedragon_netcomm::flag :definition-)
      "uint8 user_flag



")



(provide :bluedragon_netcomm/flag "d78f593981d746c0e518fd7d6c60416a")


