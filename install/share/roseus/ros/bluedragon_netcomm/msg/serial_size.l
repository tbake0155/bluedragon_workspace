;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_netcomm::serial_size)
  (if (not (find-package "BLUEDRAGON_NETCOMM"))
    (make-package "BLUEDRAGON_NETCOMM"))
  (shadow 'serial_size (find-package "BLUEDRAGON_NETCOMM")))
(unless (find-package "BLUEDRAGON_NETCOMM::SERIAL_SIZE")
  (make-package "BLUEDRAGON_NETCOMM::SERIAL_SIZE"))

(in-package "ROS")
;;//! \htmlinclude serial_size.msg.html


(defclass bluedragon_netcomm::serial_size
  :super ros::object
  :slots (_pr_serial_size _no_serial_size _ls_serial_size _tf_serial_size _ra_serial_size _od_serial_size _ma_serial_size ))

(defmethod bluedragon_netcomm::serial_size
  (:init
   (&key
    ((:pr_serial_size __pr_serial_size) 0)
    ((:no_serial_size __no_serial_size) 0)
    ((:ls_serial_size __ls_serial_size) 0)
    ((:tf_serial_size __tf_serial_size) 0)
    ((:ra_serial_size __ra_serial_size) 0)
    ((:od_serial_size __od_serial_size) 0)
    ((:ma_serial_size __ma_serial_size) 0)
    )
   (send-super :init)
   (setq _pr_serial_size (round __pr_serial_size))
   (setq _no_serial_size (round __no_serial_size))
   (setq _ls_serial_size (round __ls_serial_size))
   (setq _tf_serial_size (round __tf_serial_size))
   (setq _ra_serial_size (round __ra_serial_size))
   (setq _od_serial_size (round __od_serial_size))
   (setq _ma_serial_size (round __ma_serial_size))
   self)
  (:pr_serial_size
   (&optional __pr_serial_size)
   (if __pr_serial_size (setq _pr_serial_size __pr_serial_size)) _pr_serial_size)
  (:no_serial_size
   (&optional __no_serial_size)
   (if __no_serial_size (setq _no_serial_size __no_serial_size)) _no_serial_size)
  (:ls_serial_size
   (&optional __ls_serial_size)
   (if __ls_serial_size (setq _ls_serial_size __ls_serial_size)) _ls_serial_size)
  (:tf_serial_size
   (&optional __tf_serial_size)
   (if __tf_serial_size (setq _tf_serial_size __tf_serial_size)) _tf_serial_size)
  (:ra_serial_size
   (&optional __ra_serial_size)
   (if __ra_serial_size (setq _ra_serial_size __ra_serial_size)) _ra_serial_size)
  (:od_serial_size
   (&optional __od_serial_size)
   (if __od_serial_size (setq _od_serial_size __od_serial_size)) _od_serial_size)
  (:ma_serial_size
   (&optional __ma_serial_size)
   (if __ma_serial_size (setq _ma_serial_size __ma_serial_size)) _ma_serial_size)
  (:serialization-length
   ()
   (+
    ;; int32 _pr_serial_size
    4
    ;; int32 _no_serial_size
    4
    ;; int32 _ls_serial_size
    4
    ;; int32 _tf_serial_size
    4
    ;; int32 _ra_serial_size
    4
    ;; int32 _od_serial_size
    4
    ;; int32 _ma_serial_size
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int32 _pr_serial_size
       (write-long _pr_serial_size s)
     ;; int32 _no_serial_size
       (write-long _no_serial_size s)
     ;; int32 _ls_serial_size
       (write-long _ls_serial_size s)
     ;; int32 _tf_serial_size
       (write-long _tf_serial_size s)
     ;; int32 _ra_serial_size
       (write-long _ra_serial_size s)
     ;; int32 _od_serial_size
       (write-long _od_serial_size s)
     ;; int32 _ma_serial_size
       (write-long _ma_serial_size s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int32 _pr_serial_size
     (setq _pr_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _no_serial_size
     (setq _no_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _ls_serial_size
     (setq _ls_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _tf_serial_size
     (setq _tf_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _ra_serial_size
     (setq _ra_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _od_serial_size
     (setq _od_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _ma_serial_size
     (setq _ma_serial_size (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get bluedragon_netcomm::serial_size :md5sum-) "4ae69dddfb963b4406ee9199a82f29d0")
(setf (get bluedragon_netcomm::serial_size :datatype-) "bluedragon_netcomm/serial_size")
(setf (get bluedragon_netcomm::serial_size :definition-)
      "
int32 pr_serial_size
int32 no_serial_size
int32 ls_serial_size
int32 tf_serial_size
int32 ra_serial_size
int32 od_serial_size
int32 ma_serial_size

")



(provide :bluedragon_netcomm/serial_size "4ae69dddfb963b4406ee9199a82f29d0")


