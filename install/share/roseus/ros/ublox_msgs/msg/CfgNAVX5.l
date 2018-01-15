;; Auto-generated. Do not edit!


(when (boundp 'ublox_msgs::CfgNAVX5)
  (if (not (find-package "UBLOX_MSGS"))
    (make-package "UBLOX_MSGS"))
  (shadow 'CfgNAVX5 (find-package "UBLOX_MSGS")))
(unless (find-package "UBLOX_MSGS::CFGNAVX5")
  (make-package "UBLOX_MSGS::CFGNAVX5"))

(in-package "ROS")
;;//! \htmlinclude CfgNAVX5.msg.html


(intern "*CLASS_ID*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*CLASS_ID* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*CLASS_ID* 6)
(intern "*MESSAGE_ID*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MESSAGE_ID* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MESSAGE_ID* 35)
(intern "*MASK_MIN_MAX*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MASK_MIN_MAX* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MASK_MIN_MAX* 4)
(intern "*MASK_MIN_CNO*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MASK_MIN_CNO* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MASK_MIN_CNO* 8)
(intern "*MASK_INITIAL_FIX_3D*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MASK_INITIAL_FIX_3D* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MASK_INITIAL_FIX_3D* 64)
(intern "*MASK_WKN_ROLL*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MASK_WKN_ROLL* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MASK_WKN_ROLL* 512)
(intern "*MASK_PPP*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MASK_PPP* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MASK_PPP* 8192)
(intern "*MASK_AOP*" (find-package "UBLOX_MSGS::CFGNAVX5"))
(shadow '*MASK_AOP* (find-package "UBLOX_MSGS::CFGNAVX5"))
(defconstant ublox_msgs::CfgNAVX5::*MASK_AOP* 16384)
(defclass ublox_msgs::CfgNAVX5
  :super ros::object
  :slots (_version _mask1 _reserved0 _reserved1 _reserved2 _minSVs _maxSVs _minCNO _reserved5 _iniFix3D _reserved6 _reserved7 _ackAiding _wknRollover _reserved8 _reserved9 _reserved10 _usePPP _aopCfg _reserved11 _reserved12 _aopOrbMaxErr _reserved13 _reserved14 _reserved3 _reserved4 ))

(defmethod ublox_msgs::CfgNAVX5
  (:init
   (&key
    ((:version __version) 0)
    ((:mask1 __mask1) 0)
    ((:reserved0 __reserved0) 0)
    ((:reserved1 __reserved1) 0)
    ((:reserved2 __reserved2) 0)
    ((:minSVs __minSVs) 0)
    ((:maxSVs __maxSVs) 0)
    ((:minCNO __minCNO) 0)
    ((:reserved5 __reserved5) 0)
    ((:iniFix3D __iniFix3D) 0)
    ((:reserved6 __reserved6) 0)
    ((:reserved7 __reserved7) 0)
    ((:ackAiding __ackAiding) 0)
    ((:wknRollover __wknRollover) 0)
    ((:reserved8 __reserved8) 0)
    ((:reserved9 __reserved9) 0)
    ((:reserved10 __reserved10) 0)
    ((:usePPP __usePPP) 0)
    ((:aopCfg __aopCfg) 0)
    ((:reserved11 __reserved11) 0)
    ((:reserved12 __reserved12) 0)
    ((:aopOrbMaxErr __aopOrbMaxErr) 0)
    ((:reserved13 __reserved13) 0)
    ((:reserved14 __reserved14) 0)
    ((:reserved3 __reserved3) 0)
    ((:reserved4 __reserved4) 0)
    )
   (send-super :init)
   (setq _version (round __version))
   (setq _mask1 (round __mask1))
   (setq _reserved0 (round __reserved0))
   (setq _reserved1 (round __reserved1))
   (setq _reserved2 (round __reserved2))
   (setq _minSVs (round __minSVs))
   (setq _maxSVs (round __maxSVs))
   (setq _minCNO (round __minCNO))
   (setq _reserved5 (round __reserved5))
   (setq _iniFix3D (round __iniFix3D))
   (setq _reserved6 (round __reserved6))
   (setq _reserved7 (round __reserved7))
   (setq _ackAiding (round __ackAiding))
   (setq _wknRollover (round __wknRollover))
   (setq _reserved8 (round __reserved8))
   (setq _reserved9 (round __reserved9))
   (setq _reserved10 (round __reserved10))
   (setq _usePPP (round __usePPP))
   (setq _aopCfg (round __aopCfg))
   (setq _reserved11 (round __reserved11))
   (setq _reserved12 (round __reserved12))
   (setq _aopOrbMaxErr (round __aopOrbMaxErr))
   (setq _reserved13 (round __reserved13))
   (setq _reserved14 (round __reserved14))
   (setq _reserved3 (round __reserved3))
   (setq _reserved4 (round __reserved4))
   self)
  (:version
   (&optional __version)
   (if __version (setq _version __version)) _version)
  (:mask1
   (&optional __mask1)
   (if __mask1 (setq _mask1 __mask1)) _mask1)
  (:reserved0
   (&optional __reserved0)
   (if __reserved0 (setq _reserved0 __reserved0)) _reserved0)
  (:reserved1
   (&optional __reserved1)
   (if __reserved1 (setq _reserved1 __reserved1)) _reserved1)
  (:reserved2
   (&optional __reserved2)
   (if __reserved2 (setq _reserved2 __reserved2)) _reserved2)
  (:minSVs
   (&optional __minSVs)
   (if __minSVs (setq _minSVs __minSVs)) _minSVs)
  (:maxSVs
   (&optional __maxSVs)
   (if __maxSVs (setq _maxSVs __maxSVs)) _maxSVs)
  (:minCNO
   (&optional __minCNO)
   (if __minCNO (setq _minCNO __minCNO)) _minCNO)
  (:reserved5
   (&optional __reserved5)
   (if __reserved5 (setq _reserved5 __reserved5)) _reserved5)
  (:iniFix3D
   (&optional __iniFix3D)
   (if __iniFix3D (setq _iniFix3D __iniFix3D)) _iniFix3D)
  (:reserved6
   (&optional __reserved6)
   (if __reserved6 (setq _reserved6 __reserved6)) _reserved6)
  (:reserved7
   (&optional __reserved7)
   (if __reserved7 (setq _reserved7 __reserved7)) _reserved7)
  (:ackAiding
   (&optional __ackAiding)
   (if __ackAiding (setq _ackAiding __ackAiding)) _ackAiding)
  (:wknRollover
   (&optional __wknRollover)
   (if __wknRollover (setq _wknRollover __wknRollover)) _wknRollover)
  (:reserved8
   (&optional __reserved8)
   (if __reserved8 (setq _reserved8 __reserved8)) _reserved8)
  (:reserved9
   (&optional __reserved9)
   (if __reserved9 (setq _reserved9 __reserved9)) _reserved9)
  (:reserved10
   (&optional __reserved10)
   (if __reserved10 (setq _reserved10 __reserved10)) _reserved10)
  (:usePPP
   (&optional __usePPP)
   (if __usePPP (setq _usePPP __usePPP)) _usePPP)
  (:aopCfg
   (&optional __aopCfg)
   (if __aopCfg (setq _aopCfg __aopCfg)) _aopCfg)
  (:reserved11
   (&optional __reserved11)
   (if __reserved11 (setq _reserved11 __reserved11)) _reserved11)
  (:reserved12
   (&optional __reserved12)
   (if __reserved12 (setq _reserved12 __reserved12)) _reserved12)
  (:aopOrbMaxErr
   (&optional __aopOrbMaxErr)
   (if __aopOrbMaxErr (setq _aopOrbMaxErr __aopOrbMaxErr)) _aopOrbMaxErr)
  (:reserved13
   (&optional __reserved13)
   (if __reserved13 (setq _reserved13 __reserved13)) _reserved13)
  (:reserved14
   (&optional __reserved14)
   (if __reserved14 (setq _reserved14 __reserved14)) _reserved14)
  (:reserved3
   (&optional __reserved3)
   (if __reserved3 (setq _reserved3 __reserved3)) _reserved3)
  (:reserved4
   (&optional __reserved4)
   (if __reserved4 (setq _reserved4 __reserved4)) _reserved4)
  (:serialization-length
   ()
   (+
    ;; uint16 _version
    2
    ;; uint16 _mask1
    2
    ;; uint32 _reserved0
    4
    ;; uint8 _reserved1
    1
    ;; uint8 _reserved2
    1
    ;; uint8 _minSVs
    1
    ;; uint8 _maxSVs
    1
    ;; uint8 _minCNO
    1
    ;; uint8 _reserved5
    1
    ;; uint8 _iniFix3D
    1
    ;; uint8 _reserved6
    1
    ;; uint8 _reserved7
    1
    ;; uint8 _ackAiding
    1
    ;; uint16 _wknRollover
    2
    ;; uint32 _reserved8
    4
    ;; uint8 _reserved9
    1
    ;; uint8 _reserved10
    1
    ;; uint8 _usePPP
    1
    ;; uint8 _aopCfg
    1
    ;; uint8 _reserved11
    1
    ;; uint8 _reserved12
    1
    ;; uint16 _aopOrbMaxErr
    2
    ;; uint8 _reserved13
    1
    ;; uint8 _reserved14
    1
    ;; uint16 _reserved3
    2
    ;; uint32 _reserved4
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; uint16 _version
       (write-word _version s)
     ;; uint16 _mask1
       (write-word _mask1 s)
     ;; uint32 _reserved0
       (write-long _reserved0 s)
     ;; uint8 _reserved1
       (write-byte _reserved1 s)
     ;; uint8 _reserved2
       (write-byte _reserved2 s)
     ;; uint8 _minSVs
       (write-byte _minSVs s)
     ;; uint8 _maxSVs
       (write-byte _maxSVs s)
     ;; uint8 _minCNO
       (write-byte _minCNO s)
     ;; uint8 _reserved5
       (write-byte _reserved5 s)
     ;; uint8 _iniFix3D
       (write-byte _iniFix3D s)
     ;; uint8 _reserved6
       (write-byte _reserved6 s)
     ;; uint8 _reserved7
       (write-byte _reserved7 s)
     ;; uint8 _ackAiding
       (write-byte _ackAiding s)
     ;; uint16 _wknRollover
       (write-word _wknRollover s)
     ;; uint32 _reserved8
       (write-long _reserved8 s)
     ;; uint8 _reserved9
       (write-byte _reserved9 s)
     ;; uint8 _reserved10
       (write-byte _reserved10 s)
     ;; uint8 _usePPP
       (write-byte _usePPP s)
     ;; uint8 _aopCfg
       (write-byte _aopCfg s)
     ;; uint8 _reserved11
       (write-byte _reserved11 s)
     ;; uint8 _reserved12
       (write-byte _reserved12 s)
     ;; uint16 _aopOrbMaxErr
       (write-word _aopOrbMaxErr s)
     ;; uint8 _reserved13
       (write-byte _reserved13 s)
     ;; uint8 _reserved14
       (write-byte _reserved14 s)
     ;; uint16 _reserved3
       (write-word _reserved3 s)
     ;; uint32 _reserved4
       (write-long _reserved4 s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; uint16 _version
     (setq _version (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _mask1
     (setq _mask1 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint32 _reserved0
     (setq _reserved0 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint8 _reserved1
     (setq _reserved1 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved2
     (setq _reserved2 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _minSVs
     (setq _minSVs (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _maxSVs
     (setq _maxSVs (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _minCNO
     (setq _minCNO (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved5
     (setq _reserved5 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _iniFix3D
     (setq _iniFix3D (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved6
     (setq _reserved6 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved7
     (setq _reserved7 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _ackAiding
     (setq _ackAiding (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint16 _wknRollover
     (setq _wknRollover (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint32 _reserved8
     (setq _reserved8 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint8 _reserved9
     (setq _reserved9 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved10
     (setq _reserved10 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _usePPP
     (setq _usePPP (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _aopCfg
     (setq _aopCfg (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved11
     (setq _reserved11 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved12
     (setq _reserved12 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint16 _aopOrbMaxErr
     (setq _aopOrbMaxErr (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint8 _reserved13
     (setq _reserved13 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint8 _reserved14
     (setq _reserved14 (sys::peek buf ptr- :char)) (incf ptr- 1)
   ;; uint16 _reserved3
     (setq _reserved3 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint32 _reserved4
     (setq _reserved4 (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get ublox_msgs::CfgNAVX5 :md5sum-) "51508a96b05799aa4924b225bcb10fb3")
(setf (get ublox_msgs::CfgNAVX5 :datatype-) "ublox_msgs/CfgNAVX5")
(setf (get ublox_msgs::CfgNAVX5 :definition-)
      "# CFG-NAVX5 (0x06 0x24)
# Navigation Engine Expert Settings
# Warning: Refer to u-blox protocol spec before changing these settings.

uint8 CLASS_ID = 6
uint8 MESSAGE_ID = 35

uint16 version        # Message version (set to 0)

uint16 mask1          # First parameters bitmask (possible values below)
uint16 MASK_MIN_MAX        = 4
uint16 MASK_MIN_CNO        = 8
uint16 MASK_INITIAL_FIX_3D = 64
uint16 MASK_WKN_ROLL       = 512
uint16 MASK_PPP            = 8192
uint16 MASK_AOP            = 16384

uint32 reserved0      # Always set to zero
uint8 reserved1       # Always set to zero
uint8 reserved2       # Always set to zero

uint8 minSVs          # Minimum number of satellites for navigation
uint8 maxSVs          # Maximum number of satellites for navigation
uint8 minCNO          # Minimum satellite signal level for navigation

uint8 reserved5       # Always set to zero

uint8 iniFix3D        # If set to 1, initial fix must be 3D

uint8 reserved6       # Always set to zero
uint8 reserved7       # Always set to zero

uint8 ackAiding       # If set to 1, issue acknowledgements for assistance
uint16 wknRollover    # GPS rollover number

uint32 reserved8      # Always set to zero
uint8 reserved9       # Always set to zero
uint8 reserved10      # Always set to zero

uint8 usePPP          # Enable/disable PPP (on supported units)
uint8 aopCfg          # AssistNow Autonomous configuration

uint8 reserved11      # Always set to zero
uint8 reserved12      # Always set to zero

uint16 aopOrbMaxErr   # Maximum acceptable (modelled) autonomous orbit error

uint8 reserved13      # Always set to zero
uint8 reserved14      # Always set to zero
uint16 reserved3      # Always set to zero
uint32 reserved4      # Always set to zero

")



(provide :ublox_msgs/CfgNAVX5 "51508a96b05799aa4924b225bcb10fb3")


