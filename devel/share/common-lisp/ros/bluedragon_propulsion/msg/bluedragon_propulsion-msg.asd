
(cl:in-package :asdf)

(defsystem "bluedragon_propulsion-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "near_objects" :depends-on ("_package_near_objects"))
    (:file "_package_near_objects" :depends-on ("_package"))
    (:file "propulsion" :depends-on ("_package_propulsion"))
    (:file "_package_propulsion" :depends-on ("_package"))
  ))