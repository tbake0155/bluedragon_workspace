;; Auto-generated. Do not edit!


(when (boundp 'ublox_msgs::CfgRATE)
  (if (not (find-package "UBLOX_MSGS"))
    (make-package "UBLOX_MSGS"))
  (shadow 'CfgRATE (find-package "UBLOX_MSGS")))
(unless (find-package "UBLOX_MSGS::CFGRATE")
  (make-package "UBLOX_MSGS::CFGRATE"))

(in-package "ROS")
;;//! \htmlinclude CfgRATE.msg.html


(intern "*CLASS_ID*" (find-package "UBLOX_MSGS::CFGRATE"))
(shadow '*CLASS_ID* (find-package "UBLOX_MSGS::CFGRATE"))
(defconstant ublox_msgs::CfgRATE::*CLASS_ID* 6)
(intern "*MESSAGE_ID*" (find-package "UBLOX_MSGS::CFGRATE"))
(shadow '*MESSAGE_ID* (find-package "UBLOX_MSGS::CFGRATE"))
(defconstant ublox_msgs::CfgRATE::*MESSAGE_ID* 8)
(intern "*TIME_REF_UTC*" (find-package "UBLOX_MSGS::CFGRATE"))
(shadow '*TIME_REF_UTC* (find-package "UBLOX_MSGS::CFGRATE"))
(defconstant ublox_msgs::CfgRATE::*TIME_REF_UTC* 0)
(intern "*TIME_REF_GPS*" (find-package "UBLOX_MSGS::CFGRATE"))
(shadow '*TIME_REF_GPS* (find-package "UBLOX_MSGS::CFGRATE"))
(defconstant ublox_msgs::CfgRATE::*TIME_REF_GPS* 1)
(defclass ublox_msgs::CfgRATE
  :super ros::object
  :slots (_measRate _navRate _timeRef ))

(defmethod ublox_msgs::CfgRATE
  (:init
   (&key
    ((:measRate __measRate) 0)
    ((:navRate __navRate) 0)
    ((:timeRef __timeRef) 0)
    )
   (send-super :init)
   (setq _measRate (round __measRate))
   (setq _navRate (round __navRate))
   (setq _timeRef (round __timeRef))
   self)
  (:measRate
   (&optional __measRate)
   (if __measRate (setq _measRate __measRate)) _measRate)
  (:navRate
   (&optional __navRate)
   (if __navRate (setq _navRate __navRate)) _navRate)
  (:timeRef
   (&optional __timeRef)
   (if __timeRef (setq _timeRef __timeRef)) _timeRef)
  (:serialization-length
   ()
   (+
    ;; uint16 _measRate
    2
    ;; uint16 _navRate
    2
    ;; uint16 _timeRef
    2
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint16 _measRate
       (write-word _measRate s)
     ;; uint16 _navRate
       (write-word _navRate s)
     ;; uint16 _timeRef
       (write-word _timeRef s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint16 _measRate
     (setq _measRate (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _navRate
     (setq _navRate (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _timeRef
     (setq _timeRef (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;;
   self)
  )

(setf (get ublox_msgs::CfgRATE :md5sum-) "da095554bde2600fd2a774def27fb48e")
(setf (get ublox_msgs::CfgRATE :datatype-) "ublox_msgs/CfgRATE")
(setf (get ublox_msgs::CfgRATE :definition-)
      "# CFG-RATE (0x06 0x08)
# Navigation/Measurement Rate Settings
#

uint8 CLASS_ID = 6
uint8 MESSAGE_ID = 8

uint16 measRate           # Measurement Rate, GPS measurements are
                          # taken every measRate milliseconds [ms]
uint16 navRate            # Navigation Rate, in number of measurement
                          # cycles. On u-blox 5 and u-blox 6, this parameter
                          # cannot be changed, and is always equals 1.
uint16 timeRef            # Alignment to reference time: 0 = UTC time, 1 = GPS time
uint16 TIME_REF_UTC = 0
uint16 TIME_REF_GPS = 1

")



(provide :ublox_msgs/CfgRATE "da095554bde2600fd2a774def27fb48e")


