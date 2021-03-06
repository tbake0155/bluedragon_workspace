
(cl:in-package :asdf)

(defsystem "geographic_msgs-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :geometry_msgs-msg
               :std_msgs-msg
               :uuid_msgs-msg
)
  :components ((:file "_package")
    (:file "BoundingBox" :depends-on ("_package_BoundingBox"))
    (:file "_package_BoundingBox" :depends-on ("_package"))
    (:file "GeoPoint" :depends-on ("_package_GeoPoint"))
    (:file "_package_GeoPoint" :depends-on ("_package"))
    (:file "GeoPose" :depends-on ("_package_GeoPose"))
    (:file "_package_GeoPose" :depends-on ("_package"))
    (:file "GeographicMap" :depends-on ("_package_GeographicMap"))
    (:file "_package_GeographicMap" :depends-on ("_package"))
    (:file "GeographicMapChanges" :depends-on ("_package_GeographicMapChanges"))
    (:file "_package_GeographicMapChanges" :depends-on ("_package"))
    (:file "KeyValue" :depends-on ("_package_KeyValue"))
    (:file "_package_KeyValue" :depends-on ("_package"))
    (:file "MapFeature" :depends-on ("_package_MapFeature"))
    (:file "_package_MapFeature" :depends-on ("_package"))
    (:file "RouteNetwork" :depends-on ("_package_RouteNetwork"))
    (:file "_package_RouteNetwork" :depends-on ("_package"))
    (:file "RoutePath" :depends-on ("_package_RoutePath"))
    (:file "_package_RoutePath" :depends-on ("_package"))
    (:file "RouteSegment" :depends-on ("_package_RouteSegment"))
    (:file "_package_RouteSegment" :depends-on ("_package"))
    (:file "WayPoint" :depends-on ("_package_WayPoint"))
    (:file "_package_WayPoint" :depends-on ("_package"))
  ))