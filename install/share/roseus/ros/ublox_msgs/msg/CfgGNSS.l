;; Auto-generated. Do not edit!


(when (boundp 'ublox_msgs::CfgGNSS)
  (if (not (find-package "UBLOX_MSGS"))
    (make-package "UBLOX_MSGS"))
  (shadow 'CfgGNSS (find-package "UBLOX_MSGS")))
(unless (find-package "UBLOX_MSGS::CFGGNSS")
  (make-package "UBLOX_MSGS::CFGGNSS"))

(in-package "ROS")
;;//! \htmlinclude CfgGNSS.msg.html


(intern "*CLASS_ID*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*CLASS_ID* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*CLASS_ID* 6)
(intern "*MESSAGE_ID*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*MESSAGE_ID* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*MESSAGE_ID* 62)
(intern "*GNSS_ID_GPS*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*GNSS_ID_GPS* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*GNSS_ID_GPS* 0)
(intern "*GNSS_ID_SBAS*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*GNSS_ID_SBAS* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*GNSS_ID_SBAS* 1)
(intern "*GNSS_ID_GALILEO*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*GNSS_ID_GALILEO* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*GNSS_ID_GALILEO* 2)
(intern "*GNSS_ID_BEIDOU*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*GNSS_ID_BEIDOU* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*GNSS_ID_BEIDOU* 3)
(intern "*GNSS_ID_QZSS*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*GNSS_ID_QZSS* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*GNSS_ID_QZSS* 5)
(intern "*GNSS_ID_GLONASS*" (find-package "UBLOX_MSGS::CFGGNSS"))
(shadow '*GNSS_ID_GLONASS* (find-package "UBLOX_MSGS::CFGGNSS"))
(defconstant ublox_msgs::CfgGNSS::*GNSS_ID_GLONASS* 6)
(defclass ublox_msgs::CfgGNSS
  :super ros::object
  :slots (_msgVer _numTrkChHw _numTrkChUse _numConfigBlocks _gnssId _resTrkCh _maxTrkCh _reserved1 _flags ))

(defmethod ublox_msgs::CfgGNSS
  (:init
   (&key
    ((:msgVer __msgVer) 0)
    ((:numTrkChHw __numTrkChHw) 0)
    ((:numTrkChUse __numTrkChUse) 0)
    ((:numConfigBlocks __numConfigBlocks) 0)
    ((:gnssId __gnssId) 0)
    ((:resTrkCh __resTrkCh) 0)
    ((:maxTrkCh __maxTrkCh) 0)
    ((:reserved1 __reserved1) 0)
    ((:flags __flags) 0)
    )
   (send-super :init)
   (setq _msgVer (round __msgVer))
   (setq _numTrkChHw (round __numTrkChHw))
   (setq _numTrkChUse (round __numTrkChUse))
   (setq _numConfigBlocks (round __numConfigBlocks))
   (setq _gnssId (round __gnssId))
   (setq _resTrkCh (round __resTrkCh))
   (setq _maxTrkCh (round __maxTrkCh))
   (setq _reserved1 (round __reserved1))
   (setq _flags (round __flags))
   self)
  (:msgVer
   (&optional __msgVer)
   (if __msgVer (setq _msgVer __msgVer)) _msgVer)
  (:numTrkChHw
   (&optional __numTrkChHw)
   (if __numTrkChHw (setq _numTrkChHw __numTrkChHw)) _numTrkChHw)
  (:numTrkChUse
   (&optional __numTrkChUse)
   (if __numTrkChUse (setq _numTrkChUse __numTrkChUse)) _numTrkChUse)
  (:numConfigBlocks
   (&optional __numConfigBlocks)
   (if __numConfigBlocks (setq _numConfigBlocks __numConfigBlocks)) _numConfigBlocks)
  (:gnssId
   (&optional __gnssId)
   (if __gnssId (setq _gnssId __gnssId)) _gnssId)
  (:resTrkCh
   (&optional __resTrkCh)
   (if __resTrkCh (setq _resTrkCh __resTrkCh)) _resTrkCh)
  (:maxTrkCh
   (&optional __maxTrkCh)
   (if __maxTrkCh (setq _maxTrkCh __maxTrkCh)) _maxTrkCh)
  (:reserved1
   (&optional __reserved1)
   (if __reserved1 (setq _reserved1 __reserved1)) _reserved1)
  (:flags
   (&optional __flags)
   (if __flags (setq _flags __flags)) _flags)
  (:serialization-length
   ()
   (+
    ;; uint8 _msgVer
    1
    ;; uint8 _numTrkChHw
    1
    ;; uint8 _numTrkChUse
    1
    ;; uint8 _numConfigBlocks
    1
    ;; uint8 _gnssId
    1
    ;; uint8 _resTrkCh
    1
    ;; uint8 _maxTrkCh
    1
    ;; uint8 _reserved1
    1
    ;; uint32 _flags
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint8 _msgVer
       (write-byte _msgVer s)
     ;; uint8 _numTrkChHw
       (write-byte _numTrkChHw s)
     ;; uint8 _numTrkChUse
       (write-byte _numTrkChUse s)
     ;; uint8 _numConfigBlocks
       (write-byte _numConfigBlocks s)
     ;; uint8 _gnssId
       (write-byte _gnssId s)
     ;; uint8 _resTrkCh
       (write-byte _resTrkCh s)
     ;; uint8 _maxTrkCh
       (write-byte _maxTrkCh s)
     ;; uint8 _reserved1
       (write-byte _reserved1 s)
     ;; uint32 _flags
       (write-long _flags s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint8 _msgVer
     (setq _msgVer (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _numTrkChHw
     (setq _numTrkChHw (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _numTrkChUse
     (setq _numTrkChUse (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _numConfigBlocks
     (setq _numConfigBlocks (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _gnssId
     (setq _gnssId (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _resTrkCh
     (setq _resTrkCh (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _maxTrkCh
     (setq _maxTrkCh (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved1
     (setq _reserved1 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint32 _flags
     (setq _flags (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get ublox_msgs::CfgGNSS :md5sum-) "b7f92af0b44aa7c047fd14c5926fb0fc")
(setf (get ublox_msgs::CfgGNSS :datatype-) "ublox_msgs/CfgGNSS")
(setf (get ublox_msgs::CfgGNSS :definition-)
      "# CFG-GNSS (0x06 0x3E)
# GNSS Configuration
# Gets or sets the GNSS system channel sharing configuration.

uint8 CLASS_ID = 6
uint8 MESSAGE_ID = 62

uint8 msgVer            # Message version (= 0 for this version)
uint8 numTrkChHw        # Number of tracking channels in hardware (read only)
uint8 numTrkChUse       # Number of tracking channels to use (<= numTrkChHw)
uint8 numConfigBlocks   # Number of configuration blocks following (set to 1)

uint8 gnssId            # GNSS identifier (select from following list)

uint8 GNSS_ID_GPS = 0
uint8 GNSS_ID_SBAS = 1
uint8 GNSS_ID_GALILEO = 2
uint8 GNSS_ID_BEIDOU = 3
uint8 GNSS_ID_QZSS = 5
uint8 GNSS_ID_GLONASS = 6

uint8 resTrkCh          # Number of reserved (minimum) tracking channels for this GNSS system
uint8 maxTrkCh          # Maximum number of tracking channels (>=resTrkChn)
uint8 reserved1         # Reserved
uint32 flags            # Bitfield of flags (bit 0 = enable/disable)
")



(provide :ublox_msgs/CfgGNSS "b7f92af0b44aa7c047fd14c5926fb0fc")


