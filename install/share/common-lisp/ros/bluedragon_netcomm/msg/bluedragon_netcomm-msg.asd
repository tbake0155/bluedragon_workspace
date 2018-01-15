
(cl:in-package :asdf)

(defsystem "bluedragon_netcomm-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :bluedragon_propulsion-msg
               :nav_msgs-msg
               :sensor_msgs-msg
               :std_msgs-msg
               :tf-msg
)
  :components ((:file "_package")
    (:file "flag" :depends-on ("_package_flag"))
    (:file "_package_flag" :depends-on ("_package"))
    (:file "netcomm" :depends-on ("_package_netcomm"))
    (:file "_package_netcomm" :depends-on ("_package"))
    (:file "serial_size" :depends-on ("_package_serial_size"))
    (:file "_package_serial_size" :depends-on ("_package"))
  ))