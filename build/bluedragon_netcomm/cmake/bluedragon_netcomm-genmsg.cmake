# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "bluedragon_netcomm: 3 messages, 0 services")

set(MSG_I_FLAGS "-Ibluedragon_netcomm:/home/tim/catkin_ws/src/bluedragon_netcomm/msg;-Istd_msgs:/opt/ros/kinetic/share/std_msgs/cmake/../msg;-Iroscpp:/home/tim/catkin_ws/src/ros_comm/clients/roscpp/msg;-Inav_msgs:/opt/ros/kinetic/share/nav_msgs/cmake/../msg;-Itf:/opt/ros/kinetic/share/tf/cmake/../msg;-Ibluedragon_propulsion:/home/tim/catkin_ws/src/bluedragon_propulsion/msg;-Igeometry_msgs:/opt/ros/kinetic/share/geometry_msgs/cmake/../msg;-Iactionlib_msgs:/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg;-Isensor_msgs:/opt/ros/kinetic/share/sensor_msgs/cmake/../msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(bluedragon_netcomm_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" NAME_WE)
add_custom_target(_bluedragon_netcomm_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "bluedragon_netcomm" "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" ""
)

get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" NAME_WE)
add_custom_target(_bluedragon_netcomm_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "bluedragon_netcomm" "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" "geometry_msgs/Transform:bluedragon_propulsion/near_objects:geometry_msgs/Twist:geometry_msgs/TransformStamped:std_msgs/Header:tf/tfMessage:geometry_msgs/Quaternion:sensor_msgs/Range:geometry_msgs/Point:geometry_msgs/TwistWithCovariance:sensor_msgs/LaserScan:bluedragon_propulsion/propulsion:geometry_msgs/PoseWithCovariance:geometry_msgs/Pose:nav_msgs/Odometry:geometry_msgs/Vector3"
)

get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" NAME_WE)
add_custom_target(_bluedragon_netcomm_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "bluedragon_netcomm" "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" ""
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_cpp(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Transform.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TransformStamped.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/tf/cmake/../msg/tfMessage.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/Range.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TwistWithCovariance.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/LaserScan.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/PoseWithCovariance.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg;/opt/ros/kinetic/share/nav_msgs/cmake/../msg/Odometry.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_cpp(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_netcomm
)

### Generating Services

### Generating Module File
_generate_module_cpp(bluedragon_netcomm
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_netcomm
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(bluedragon_netcomm_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(bluedragon_netcomm_generate_messages bluedragon_netcomm_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_cpp _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_cpp _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_cpp _bluedragon_netcomm_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_netcomm_gencpp)
add_dependencies(bluedragon_netcomm_gencpp bluedragon_netcomm_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_netcomm_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_eus(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Transform.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TransformStamped.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/tf/cmake/../msg/tfMessage.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/Range.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TwistWithCovariance.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/LaserScan.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/PoseWithCovariance.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg;/opt/ros/kinetic/share/nav_msgs/cmake/../msg/Odometry.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_eus(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_netcomm
)

### Generating Services

### Generating Module File
_generate_module_eus(bluedragon_netcomm
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_netcomm
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(bluedragon_netcomm_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(bluedragon_netcomm_generate_messages bluedragon_netcomm_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_eus _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_eus _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_eus _bluedragon_netcomm_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_netcomm_geneus)
add_dependencies(bluedragon_netcomm_geneus bluedragon_netcomm_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_netcomm_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_lisp(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Transform.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TransformStamped.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/tf/cmake/../msg/tfMessage.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/Range.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TwistWithCovariance.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/LaserScan.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/PoseWithCovariance.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg;/opt/ros/kinetic/share/nav_msgs/cmake/../msg/Odometry.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_lisp(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_netcomm
)

### Generating Services

### Generating Module File
_generate_module_lisp(bluedragon_netcomm
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_netcomm
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(bluedragon_netcomm_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(bluedragon_netcomm_generate_messages bluedragon_netcomm_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_lisp _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_lisp _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_lisp _bluedragon_netcomm_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_netcomm_genlisp)
add_dependencies(bluedragon_netcomm_genlisp bluedragon_netcomm_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_netcomm_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_nodejs(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Transform.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TransformStamped.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/tf/cmake/../msg/tfMessage.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/Range.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TwistWithCovariance.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/LaserScan.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/PoseWithCovariance.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg;/opt/ros/kinetic/share/nav_msgs/cmake/../msg/Odometry.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_nodejs(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_netcomm
)

### Generating Services

### Generating Module File
_generate_module_nodejs(bluedragon_netcomm
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_netcomm
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(bluedragon_netcomm_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(bluedragon_netcomm_generate_messages bluedragon_netcomm_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_nodejs _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_nodejs _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_nodejs _bluedragon_netcomm_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_netcomm_gennodejs)
add_dependencies(bluedragon_netcomm_gennodejs bluedragon_netcomm_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_netcomm_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_py(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Transform.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Twist.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TransformStamped.msg;/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/kinetic/share/tf/cmake/../msg/tfMessage.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Quaternion.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/Range.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Point.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/TwistWithCovariance.msg;/opt/ros/kinetic/share/sensor_msgs/cmake/../msg/LaserScan.msg;/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/PoseWithCovariance.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Pose.msg;/opt/ros/kinetic/share/nav_msgs/cmake/../msg/Odometry.msg;/opt/ros/kinetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm
)
_generate_msg_py(bluedragon_netcomm
  "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm
)

### Generating Services

### Generating Module File
_generate_module_py(bluedragon_netcomm
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(bluedragon_netcomm_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(bluedragon_netcomm_generate_messages bluedragon_netcomm_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/serial_size.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_py _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/netcomm.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_py _bluedragon_netcomm_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_netcomm/msg/flag.msg" NAME_WE)
add_dependencies(bluedragon_netcomm_generate_messages_py _bluedragon_netcomm_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_netcomm_genpy)
add_dependencies(bluedragon_netcomm_genpy bluedragon_netcomm_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_netcomm_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_netcomm)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_netcomm
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(bluedragon_netcomm_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()
if(TARGET roscpp_generate_messages_cpp)
  add_dependencies(bluedragon_netcomm_generate_messages_cpp roscpp_generate_messages_cpp)
endif()
if(TARGET nav_msgs_generate_messages_cpp)
  add_dependencies(bluedragon_netcomm_generate_messages_cpp nav_msgs_generate_messages_cpp)
endif()
if(TARGET tf_generate_messages_cpp)
  add_dependencies(bluedragon_netcomm_generate_messages_cpp tf_generate_messages_cpp)
endif()
if(TARGET bluedragon_propulsion_generate_messages_cpp)
  add_dependencies(bluedragon_netcomm_generate_messages_cpp bluedragon_propulsion_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_netcomm)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_netcomm
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(bluedragon_netcomm_generate_messages_eus std_msgs_generate_messages_eus)
endif()
if(TARGET roscpp_generate_messages_eus)
  add_dependencies(bluedragon_netcomm_generate_messages_eus roscpp_generate_messages_eus)
endif()
if(TARGET nav_msgs_generate_messages_eus)
  add_dependencies(bluedragon_netcomm_generate_messages_eus nav_msgs_generate_messages_eus)
endif()
if(TARGET tf_generate_messages_eus)
  add_dependencies(bluedragon_netcomm_generate_messages_eus tf_generate_messages_eus)
endif()
if(TARGET bluedragon_propulsion_generate_messages_eus)
  add_dependencies(bluedragon_netcomm_generate_messages_eus bluedragon_propulsion_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_netcomm)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_netcomm
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(bluedragon_netcomm_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()
if(TARGET roscpp_generate_messages_lisp)
  add_dependencies(bluedragon_netcomm_generate_messages_lisp roscpp_generate_messages_lisp)
endif()
if(TARGET nav_msgs_generate_messages_lisp)
  add_dependencies(bluedragon_netcomm_generate_messages_lisp nav_msgs_generate_messages_lisp)
endif()
if(TARGET tf_generate_messages_lisp)
  add_dependencies(bluedragon_netcomm_generate_messages_lisp tf_generate_messages_lisp)
endif()
if(TARGET bluedragon_propulsion_generate_messages_lisp)
  add_dependencies(bluedragon_netcomm_generate_messages_lisp bluedragon_propulsion_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_netcomm)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_netcomm
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(bluedragon_netcomm_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()
if(TARGET roscpp_generate_messages_nodejs)
  add_dependencies(bluedragon_netcomm_generate_messages_nodejs roscpp_generate_messages_nodejs)
endif()
if(TARGET nav_msgs_generate_messages_nodejs)
  add_dependencies(bluedragon_netcomm_generate_messages_nodejs nav_msgs_generate_messages_nodejs)
endif()
if(TARGET tf_generate_messages_nodejs)
  add_dependencies(bluedragon_netcomm_generate_messages_nodejs tf_generate_messages_nodejs)
endif()
if(TARGET bluedragon_propulsion_generate_messages_nodejs)
  add_dependencies(bluedragon_netcomm_generate_messages_nodejs bluedragon_propulsion_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm)
  install(CODE "execute_process(COMMAND \"/usr/bin/python\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_netcomm
    DESTINATION ${genpy_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(bluedragon_netcomm_generate_messages_py std_msgs_generate_messages_py)
endif()
if(TARGET roscpp_generate_messages_py)
  add_dependencies(bluedragon_netcomm_generate_messages_py roscpp_generate_messages_py)
endif()
if(TARGET nav_msgs_generate_messages_py)
  add_dependencies(bluedragon_netcomm_generate_messages_py nav_msgs_generate_messages_py)
endif()
if(TARGET tf_generate_messages_py)
  add_dependencies(bluedragon_netcomm_generate_messages_py tf_generate_messages_py)
endif()
if(TARGET bluedragon_propulsion_generate_messages_py)
  add_dependencies(bluedragon_netcomm_generate_messages_py bluedragon_propulsion_generate_messages_py)
endif()
