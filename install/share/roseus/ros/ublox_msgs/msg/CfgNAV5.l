;; Auto-generated. Do not edit!


(when (boundp 'ublox_msgs::CfgNAV5)
  (if (not (find-package "UBLOX_MSGS"))
    (make-package "UBLOX_MSGS"))
  (shadow 'CfgNAV5 (find-package "UBLOX_MSGS")))
(unless (find-package "UBLOX_MSGS::CFGNAV5")
  (make-package "UBLOX_MSGS::CFGNAV5"))

(in-package "ROS")
;;//! \htmlinclude CfgNAV5.msg.html


(intern "*CLASS_ID*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*CLASS_ID* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*CLASS_ID* 6)
(intern "*MESSAGE_ID*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MESSAGE_ID* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MESSAGE_ID* 36)
(intern "*MASK_DYN*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_DYN* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_DYN* 1)
(intern "*MASK_MIN_EL*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_MIN_EL* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_MIN_EL* 2)
(intern "*MASK_FIX_MODE*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_FIX_MODE* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_FIX_MODE* 4)
(intern "*MASK_DR_LIM*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_DR_LIM* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_DR_LIM* 8)
(intern "*MASK_POS_MASK*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_POS_MASK* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_POS_MASK* 16)
(intern "*MASK_TIME_MASK*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_TIME_MASK* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_TIME_MASK* 32)
(intern "*MASK_STATIC_HOLD_MASK*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_STATIC_HOLD_MASK* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_STATIC_HOLD_MASK* 64)
(intern "*MASK_DGPS_MASK*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*MASK_DGPS_MASK* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*MASK_DGPS_MASK* 128)
(intern "*DYN_MODEL_PORTABLE*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_PORTABLE* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_PORTABLE* 0)
(intern "*DYN_MODEL_STATIONARY*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_STATIONARY* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_STATIONARY* 2)
(intern "*DYN_MODEL_PEDESTRIAN*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_PEDESTRIAN* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_PEDESTRIAN* 3)
(intern "*DYN_MODEL_AUTOMOTIVE*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_AUTOMOTIVE* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_AUTOMOTIVE* 4)
(intern "*DYN_MODEL_SEA*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_SEA* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_SEA* 5)
(intern "*DYN_MODEL_AIRBORNE_1G*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_AIRBORNE_1G* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_AIRBORNE_1G* 6)
(intern "*DYN_MODEL_AIRBORNE_2G*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_AIRBORNE_2G* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_AIRBORNE_2G* 7)
(intern "*DYN_MODEL_AIRBORNE_4G*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*DYN_MODEL_AIRBORNE_4G* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*DYN_MODEL_AIRBORNE_4G* 8)
(intern "*FIX_MODE_2D_ONLY*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*FIX_MODE_2D_ONLY* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*FIX_MODE_2D_ONLY* 1)
(intern "*FIX_MODE_3D_ONLY*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*FIX_MODE_3D_ONLY* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*FIX_MODE_3D_ONLY* 2)
(intern "*FIX_MODE_AUTO*" (find-package "UBLOX_MSGS::CFGNAV5"))
(shadow '*FIX_MODE_AUTO* (find-package "UBLOX_MSGS::CFGNAV5"))
(defconstant ublox_msgs::CfgNAV5::*FIX_MODE_AUTO* 3)
(defclass ublox_msgs::CfgNAV5
  :super ros::object
  :slots (_mask _dynModel _fixMode _fixedAlt _fixedAltVar _minElev _drLimit _pDop _tDop _pAcc _tAcc _staticHoldThresh _dgpsTimeOut _reserved2 _reserved3 _reserved4 ))

(defmethod ublox_msgs::CfgNAV5
  (:init
   (&key
    ((:mask __mask) 0)
    ((:dynModel __dynModel) 0)
    ((:fixMode __fixMode) 0)
    ((:fixedAlt __fixedAlt) 0)
    ((:fixedAltVar __fixedAltVar) 0)
    ((:minElev __minElev) 0)
    ((:drLimit __drLimit) 0)
    ((:pDop __pDop) 0)
    ((:tDop __tDop) 0)
    ((:pAcc __pAcc) 0)
    ((:tAcc __tAcc) 0)
    ((:staticHoldThresh __staticHoldThresh) 0)
    ((:dgpsTimeOut __dgpsTimeOut) 0)
    ((:reserved2 __reserved2) 0)
    ((:reserved3 __reserved3) 0)
    ((:reserved4 __reserved4) 0)
    )
   (send-super :init)
   (setq _mask (round __mask))
   (setq _dynModel (round __dynModel))
   (setq _fixMode (round __fixMode))
   (setq _fixedAlt (round __fixedAlt))
   (setq _fixedAltVar (round __fixedAltVar))
   (setq _minElev (round __minElev))
   (setq _drLimit (round __drLimit))
   (setq _pDop (round __pDop))
   (setq _tDop (round __tDop))
   (setq _pAcc (round __pAcc))
   (setq _tAcc (round __tAcc))
   (setq _staticHoldThresh (round __staticHoldThresh))
   (setq _dgpsTimeOut (round __dgpsTimeOut))
   (setq _reserved2 (round __reserved2))
   (setq _reserved3 (round __reserved3))
   (setq _reserved4 (round __reserved4))
   self)
  (:mask
   (&optional __mask)
   (if __mask (setq _mask __mask)) _mask)
  (:dynModel
   (&optional __dynModel)
   (if __dynModel (setq _dynModel __dynModel)) _dynModel)
  (:fixMode
   (&optional __fixMode)
   (if __fixMode (setq _fixMode __fixMode)) _fixMode)
  (:fixedAlt
   (&optional __fixedAlt)
   (if __fixedAlt (setq _fixedAlt __fixedAlt)) _fixedAlt)
  (:fixedAltVar
   (&optional __fixedAltVar)
   (if __fixedAltVar (setq _fixedAltVar __fixedAltVar)) _fixedAltVar)
  (:minElev
   (&optional __minElev)
   (if __minElev (setq _minElev __minElev)) _minElev)
  (:drLimit
   (&optional __drLimit)
   (if __drLimit (setq _drLimit __drLimit)) _drLimit)
  (:pDop
   (&optional __pDop)
   (if __pDop (setq _pDop __pDop)) _pDop)
  (:tDop
   (&optional __tDop)
   (if __tDop (setq _tDop __tDop)) _tDop)
  (:pAcc
   (&optional __pAcc)
   (if __pAcc (setq _pAcc __pAcc)) _pAcc)
  (:tAcc
   (&optional __tAcc)
   (if __tAcc (setq _tAcc __tAcc)) _tAcc)
  (:staticHoldThresh
   (&optional __staticHoldThresh)
   (if __staticHoldThresh (setq _staticHoldThresh __staticHoldThresh)) _staticHoldThresh)
  (:dgpsTimeOut
   (&optional __dgpsTimeOut)
   (if __dgpsTimeOut (setq _dgpsTimeOut __dgpsTimeOut)) _dgpsTimeOut)
  (:reserved2
   (&optional __reserved2)
   (if __reserved2 (setq _reserved2 __reserved2)) _reserved2)
  (:reserved3
   (&optional __reserved3)
   (if __reserved3 (setq _reserved3 __reserved3)) _reserved3)
  (:reserved4
   (&optional __reserved4)
   (if __reserved4 (setq _reserved4 __reserved4)) _reserved4)
  (:serialization-length
   ()
   (+
    ;; uint16 _mask
    2
    ;; uint8 _dynModel
    1
    ;; uint8 _fixMode
    1
    ;; int32 _fixedAlt
    4
    ;; uint32 _fixedAltVar
    4
    ;; int8 _minElev
    1
    ;; uint8 _drLimit
    1
    ;; uint16 _pDop
    2
    ;; uint16 _tDop
    2
    ;; uint16 _pAcc
    2
    ;; uint16 _tAcc
    2
    ;; uint8 _staticHoldThresh
    1
    ;; uint8 _dgpsTimeOut
    1
    ;; uint32 _reserved2
    4
    ;; uint32 _reserved3
    4
    ;; uint32 _reserved4
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint16 _mask
       (write-word _mask s)
     ;; uint8 _dynModel
       (write-byte _dynModel s)
     ;; uint8 _fixMode
       (write-byte _fixMode s)
     ;; int32 _fixedAlt
       (write-long _fixedAlt s)
     ;; uint32 _fixedAltVar
       (write-long _fixedAltVar s)
     ;; int8 _minElev
       (write-byte _minElev s)
     ;; uint8 _drLimit
       (write-byte _drLimit s)
     ;; uint16 _pDop
       (write-word _pDop s)
     ;; uint16 _tDop
       (write-word _tDop s)
     ;; uint16 _pAcc
       (write-word _pAcc s)
     ;; uint16 _tAcc
       (write-word _tAcc s)
     ;; uint8 _staticHoldThresh
       (write-byte _staticHoldThresh s)
     ;; uint8 _dgpsTimeOut
       (write-byte _dgpsTimeOut s)
     ;; uint32 _reserved2
       (write-long _reserved2 s)
     ;; uint32 _reserved3
       (write-long _reserved3 s)
     ;; uint32 _reserved4
       (write-long _reserved4 s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint16 _mask
     (setq _mask (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint8 _dynModel
     (setq _dynModel (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _fixMode
     (setq _fixMode (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; int32 _fixedAlt
     (setq _fixedAlt (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _fixedAltVar
     (setq _fixedAltVar (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int8 _minElev
     (setq _minElev (sys::peek buf ptr- :char)) (incf ptr- 1)
     (if (> _minElev 127) (setq _minElev (- _minElev 256)))
   ;; uint8 _drLimit
     (setq _drLimit (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint16 _pDop
     (setq _pDop (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _tDop
     (setq _tDop (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _pAcc
     (setq _pAcc (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _tAcc
     (setq _tAcc (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint8 _staticHoldThresh
     (setq _staticHoldThresh (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _dgpsTimeOut
     (setq _dgpsTimeOut (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint32 _reserved2
     (setq _reserved2 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _reserved3
     (setq _reserved3 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _reserved4
     (setq _reserved4 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get ublox_msgs::CfgNAV5 :md5sum-) "7c6e2419d1dd6532b8f09e39a02e167c")
(setf (get ublox_msgs::CfgNAV5 :datatype-) "ublox_msgs/CfgNAV5")
(setf (get ublox_msgs::CfgNAV5 :definition-)
      "# CFG-NAV5 (0x06 0x24)
# Navigation Engine Settings
#

uint8 CLASS_ID = 6
uint8 MESSAGE_ID = 36

uint16 mask             # Parameters Bitmask. Only the masked
                        # parameters will be applied.
uint16 MASK_DYN = 1                 # Apply dynamic model settings
uint16 MASK_MIN_EL = 2              # Apply minimum elevation settings
uint16 MASK_FIX_MODE = 4            # Apply fix mode settings
uint16 MASK_DR_LIM = 8              # Apply DR limit settings
uint16 MASK_POS_MASK = 16           # Apply position mask settings
uint16 MASK_TIME_MASK = 32          # Apply time mask settings
uint16 MASK_STATIC_HOLD_MASK = 64   # Apply static hold settings
uint16 MASK_DGPS_MASK = 128         # Apply DGPS settings, firmware 7 and newer only

uint8 dynModel          # Dynamic Platform model:
uint8 DYN_MODEL_PORTABLE = 0        # Portable
uint8 DYN_MODEL_STATIONARY = 2      # Stationary
uint8 DYN_MODEL_PEDESTRIAN = 3      # Pedestrian
uint8 DYN_MODEL_AUTOMOTIVE = 4      # Automotive
uint8 DYN_MODEL_SEA = 5             # Sea
uint8 DYN_MODEL_AIRBORNE_1G = 6     # Airborne with <1g Acceleration
uint8 DYN_MODEL_AIRBORNE_2G = 7     # Airborne with <2g Acceleration
uint8 DYN_MODEL_AIRBORNE_4G = 8     # Airborne with <4g Acceleration

uint8 fixMode           # Position Fixing Mode.
uint8 FIX_MODE_2D_ONLY = 1          # 2D only
uint8 FIX_MODE_3D_ONLY = 2          # 3D only
uint8 FIX_MODE_AUTO = 3             # Auto 2D/3D

int32 fixedAlt          # Fixed altitude (mean sea level) for 2D fix mode. [m / 0.01]
uint32 fixedAltVar      # Fixed altitude variance for 2D mode. [m^2 / 0.0001]
int8 minElev            # Minimum Elevation for a GNSS satellite to be used in NAV [deg]
uint8 drLimit           # Maximum time to perform dead reckoning [s]
                        # (linear extrapolation) in case of GPS signal loss
uint16 pDop             # Position DOP Mask to use [1 / 0.1]
uint16 tDop             # Time DOP Mask to use [1 / 0.1]
uint16 pAcc             # Position Accuracy Mask [m]
uint16 tAcc             # Time Accuracy Mask [m]
uint8 staticHoldThresh  # Static hold threshold [cm/s]
uint8 dgpsTimeOut       # DGPS timeout, firmware 7 and newer only [s]
uint32 reserved2        # Always set to zero
uint32 reserved3        # Always set to zero
uint32 reserved4        # Always set to zero

")



(provide :ublox_msgs/CfgNAV5 "7c6e2419d1dd6532b8f09e39a02e167c")


