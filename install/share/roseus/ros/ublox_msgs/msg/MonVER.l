;; Auto-generated. Do not edit!


(when (boundp 'ublox_msgs::MonVER)
  (if (not (find-package "UBLOX_MSGS"))
    (make-package "UBLOX_MSGS"))
  (shadow 'MonVER (find-package "UBLOX_MSGS")))
(unless (find-package "UBLOX_MSGS::MONVER")
  (make-package "UBLOX_MSGS::MONVER"))

(in-package "ROS")
;;//! \htmlinclude MonVER.msg.html


(intern "*CLASS_ID*" (find-package "UBLOX_MSGS::MONVER"))
(shadow '*CLASS_ID* (find-package "UBLOX_MSGS::MONVER"))
(defconstant ublox_msgs::MonVER::*CLASS_ID* 10)
(intern "*MESSAGE_ID*" (find-package "UBLOX_MSGS::MONVER"))
(shadow '*MESSAGE_ID* (find-package "UBLOX_MSGS::MONVER"))
(defconstant ublox_msgs::MonVER::*MESSAGE_ID* 4)
(defclass ublox_msgs::MonVER
  :super ros::object
  :slots (_swVersion _hwVersion ))

(defmethod ublox_msgs::MonVER
  (:init
   (&key
    ((:swVersion __swVersion) (make-array 30 :initial-element 0 :element-type :integer))
    ((:hwVersion __hwVersion) (make-array 10 :initial-element 0 :element-type :integer))
    )
   (send-super :init)
   (setq _swVersion __swVersion)
   (setq _hwVersion __hwVersion)
   self)
  (:swVersion
   (&optional __swVersion)
   (if __swVersion (setq _swVersion __swVersion)) _swVersion)
  (:hwVersion
   (&optional __hwVersion)
   (if __hwVersion (setq _hwVersion __hwVersion)) _hwVersion)
  (:serialization-length
   ()
   (+
    ;; char[30] _swVersion
    (* 1    30)
    ;; char[10] _hwVersion
    (* 1    10)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; char[30] _swVersion
     (dotimes (i 30)
       (write-byte (elt _swVersion i) s)
       )
     ;; char[10] _hwVersion
     (dotimes (i 10)
       (write-byte (elt _hwVersion i) s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; char[30] _swVersion
   (dotimes (i (length _swVersion))
     (setf (elt _swVersion i) (sys::peek buf ptr- :char)) (incf ptr- 1)
     )
   ;; char[10] _hwVersion
   (dotimes (i (length _hwVersion))
     (setf (elt _hwVersion i) (sys::peek buf ptr- :char)) (incf ptr- 1)
     )
   ;;
   self)
  )

(setf (get ublox_msgs::MonVER :md5sum-) "89732a19b51c49be31e36fb80481a8d4")
(setf (get ublox_msgs::MonVER :datatype-) "ublox_msgs/MonVER")
(setf (get ublox_msgs::MonVER :definition-)
      "# MON-VER (0xB5 0x62)
# Receiver/Software Version
# Returned when the version is polled.

uint8 CLASS_ID = 10
uint8 MESSAGE_ID = 4

char[30] swVersion    # Zero-terminated software version string.
char[10] hwVersion    # Zero-terminated hardware version string.

# TODO: Implement support for dynamic char[] array in serializer.
")



(provide :ublox_msgs/MonVER "89732a19b51c49be31e36fb80481a8d4")


