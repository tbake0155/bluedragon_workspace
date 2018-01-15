;; Auto-generated. Do not edit!


(when (boundp 'bluedragon_propulsion::near_objects)
  (if (not (find-package "BLUEDRAGON_PROPULSION"))
    (make-package "BLUEDRAGON_PROPULSION"))
  (shadow 'near_objects (find-package "BLUEDRAGON_PROPULSION")))
(unless (find-package "BLUEDRAGON_PROPULSION::NEAR_OBJECTS")
  (make-package "BLUEDRAGON_PROPULSION::NEAR_OBJECTS"))

(in-package "ROS")
;;//! \htmlinclude near_objects.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass bluedragon_propulsion::near_objects
  :super ros::object
  :slots (_header _X_objects _Y_objects _radians _radius _green_bouy _red_bouy _zone ))

(defmethod bluedragon_propulsion::near_objects
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:X_objects __X_objects) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:Y_objects __Y_objects) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:radians __radians) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:radius __radius) (make-array 0 :initial-element 0.0 :element-type :float))
    ((:green_bouy __green_bouy) (let (r) (dotimes (i 0) (push nil r)) r))
    ((:red_bouy __red_bouy) (let (r) (dotimes (i 0) (push nil r)) r))
    ((:zone __zone) (make-array 0 :initial-element 0 :element-type :integer))
    )
   (send-super :init)
   (setq _header __header)
   (setq _X_objects __X_objects)
   (setq _Y_objects __Y_objects)
   (setq _radians __radians)
   (setq _radius __radius)
   (setq _green_bouy __green_bouy)
   (setq _red_bouy __red_bouy)
   (setq _zone __zone)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:X_objects
   (&optional __X_objects)
   (if __X_objects (setq _X_objects __X_objects)) _X_objects)
  (:Y_objects
   (&optional __Y_objects)
   (if __Y_objects (setq _Y_objects __Y_objects)) _Y_objects)
  (:radians
   (&optional __radians)
   (if __radians (setq _radians __radians)) _radians)
  (:radius
   (&optional __radius)
   (if __radius (setq _radius __radius)) _radius)
  (:green_bouy
   (&optional __green_bouy)
   (if __green_bouy (setq _green_bouy __green_bouy)) _green_bouy)
  (:red_bouy
   (&optional __red_bouy)
   (if __red_bouy (setq _red_bouy __red_bouy)) _red_bouy)
  (:zone
   (&optional __zone)
   (if __zone (setq _zone __zone)) _zone)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64[] _X_objects
    (* 8    (length _X_objects)) 4
    ;; float64[] _Y_objects
    (* 8    (length _Y_objects)) 4
    ;; float64[] _radians
    (* 8    (length _radians)) 4
    ;; float64[] _radius
    (* 8    (length _radius)) 4
    ;; bool[] _green_bouy
    (* 1    (length _green_bouy)) 4
    ;; bool[] _red_bouy
    (* 1    (length _red_bouy)) 4
    ;; int64[] _zone
    (* 8    (length _zone)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64[] _X_objects
     (write-long (length _X_objects) s)
     (dotimes (i (length _X_objects))
       (sys::poke (elt _X_objects i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _Y_objects
     (write-long (length _Y_objects) s)
     (dotimes (i (length _Y_objects))
       (sys::poke (elt _Y_objects i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _radians
     (write-long (length _radians) s)
     (dotimes (i (length _radians))
       (sys::poke (elt _radians i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; float64[] _radius
     (write-long (length _radius) s)
     (dotimes (i (length _radius))
       (sys::poke (elt _radius i) (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
       )
     ;; bool[] _green_bouy
     (write-long (length _green_bouy) s)
     (dotimes (i (length _green_bouy))
       (if (elt _green_bouy i) (write-byte -1 s) (write-byte 0 s))
       )
     ;; bool[] _red_bouy
     (write-long (length _red_bouy) s)
     (dotimes (i (length _red_bouy))
       (if (elt _red_bouy i) (write-byte -1 s) (write-byte 0 s))
       )
     ;; int64[] _zone
     (write-long (length _zone) s)
     (dotimes (i (length _zone))
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke (elt _zone i) (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class (elt _zone i)) (= (length ((elt _zone i) . bv)) 2)) ;; bignum
              (write-long (ash (elt ((elt _zone i) . bv) 0) 0) s)
              (write-long (ash (elt ((elt _zone i) . bv) 1) -1) s))
             ((and (class (elt _zone i)) (= (length ((elt _zone i) . bv)) 1)) ;; big1
              (write-long (elt ((elt _zone i) . bv) 0) s)
              (write-long (if (>= (elt _zone i) 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long (elt _zone i) s)(write-long (if (>= (elt _zone i) 0) 0 #xffffffff) s)))
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64[] _X_objects
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _X_objects (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _X_objects i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _Y_objects
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _Y_objects (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _Y_objects i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _radians
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _radians (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _radians i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; float64[] _radius
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _radius (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _radius i) (sys::peek buf ptr- :double)) (incf ptr- 8)
     ))
   ;; bool[] _green_bouy
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _green_bouy (make-list n))
     (dotimes (i n)
     (setf (elt _green_bouy i) (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
     ))
   ;; bool[] _red_bouy
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _red_bouy (make-list n))
     (dotimes (i n)
     (setf (elt _red_bouy i) (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
     ))
   ;; int64[] _zone
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _zone (instantiate integer-vector n))
     (dotimes (i n)
#+(or :alpha :irix6 :x86_64)
      (setf (elt _zone i) (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf (elt _zone i) (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
     ))
   ;;
   self)
  )

(setf (get bluedragon_propulsion::near_objects :md5sum-) "082e7af6d2a808fec3817c0e5bab0b7d")
(setf (get bluedragon_propulsion::near_objects :datatype-) "bluedragon_propulsion/near_objects")
(setf (get bluedragon_propulsion::near_objects :definition-)
      "Header header

float64[] X_objects 
float64[] Y_objects
float64[] radians
float64[] radius
bool[] green_bouy
bool[] red_bouy
int64[] zone




================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
# 0: no frame
# 1: global frame
string frame_id

")



(provide :bluedragon_propulsion/near_objects "082e7af6d2a808fec3817c0e5bab0b7d")


