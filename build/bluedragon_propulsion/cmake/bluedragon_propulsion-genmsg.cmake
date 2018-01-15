# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "bluedragon_propulsion: 2 messages, 0 services")

set(MSG_I_FLAGS "-Ibluedragon_propulsion:/home/tim/catkin_ws/src/bluedragon_propulsion/msg;-Istd_msgs:/opt/ros/kinetic/share/std_msgs/cmake/../msg;-Iroscpp:/home/tim/catkin_ws/src/ros_comm/clients/roscpp/msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(bluedragon_propulsion_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" NAME_WE)
add_custom_target(_bluedragon_propulsion_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "bluedragon_propulsion" "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" NAME_WE)
add_custom_target(_bluedragon_propulsion_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "bluedragon_propulsion" "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" "std_msgs/Header"
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_propulsion
)
_generate_msg_cpp(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_propulsion
)

### Generating Services

### Generating Module File
_generate_module_cpp(bluedragon_propulsion
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_propulsion
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(bluedragon_propulsion_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(bluedragon_propulsion_generate_messages bluedragon_propulsion_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_cpp _bluedragon_propulsion_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_cpp _bluedragon_propulsion_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_propulsion_gencpp)
add_dependencies(bluedragon_propulsion_gencpp bluedragon_propulsion_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_propulsion_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_propulsion
)
_generate_msg_eus(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_propulsion
)

### Generating Services

### Generating Module File
_generate_module_eus(bluedragon_propulsion
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_propulsion
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(bluedragon_propulsion_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(bluedragon_propulsion_generate_messages bluedragon_propulsion_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_eus _bluedragon_propulsion_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_eus _bluedragon_propulsion_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_propulsion_geneus)
add_dependencies(bluedragon_propulsion_geneus bluedragon_propulsion_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_propulsion_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_propulsion
)
_generate_msg_lisp(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_propulsion
)

### Generating Services

### Generating Module File
_generate_module_lisp(bluedragon_propulsion
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_propulsion
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(bluedragon_propulsion_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(bluedragon_propulsion_generate_messages bluedragon_propulsion_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_lisp _bluedragon_propulsion_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_lisp _bluedragon_propulsion_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_propulsion_genlisp)
add_dependencies(bluedragon_propulsion_genlisp bluedragon_propulsion_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_propulsion_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_propulsion
)
_generate_msg_nodejs(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_propulsion
)

### Generating Services

### Generating Module File
_generate_module_nodejs(bluedragon_propulsion
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_propulsion
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(bluedragon_propulsion_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(bluedragon_propulsion_generate_messages bluedragon_propulsion_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_nodejs _bluedragon_propulsion_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_nodejs _bluedragon_propulsion_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_propulsion_gennodejs)
add_dependencies(bluedragon_propulsion_gennodejs bluedragon_propulsion_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_propulsion_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_propulsion
)
_generate_msg_py(bluedragon_propulsion
  "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/kinetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_propulsion
)

### Generating Services

### Generating Module File
_generate_module_py(bluedragon_propulsion
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_propulsion
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(bluedragon_propulsion_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(bluedragon_propulsion_generate_messages bluedragon_propulsion_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/near_objects.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_py _bluedragon_propulsion_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/bluedragon_propulsion/msg/propulsion.msg" NAME_WE)
add_dependencies(bluedragon_propulsion_generate_messages_py _bluedragon_propulsion_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(bluedragon_propulsion_genpy)
add_dependencies(bluedragon_propulsion_genpy bluedragon_propulsion_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS bluedragon_propulsion_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_propulsion)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/bluedragon_propulsion
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(bluedragon_propulsion_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()
if(TARGET roscpp_generate_messages_cpp)
  add_dependencies(bluedragon_propulsion_generate_messages_cpp roscpp_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_propulsion)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/bluedragon_propulsion
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(bluedragon_propulsion_generate_messages_eus std_msgs_generate_messages_eus)
endif()
if(TARGET roscpp_generate_messages_eus)
  add_dependencies(bluedragon_propulsion_generate_messages_eus roscpp_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_propulsion)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/bluedragon_propulsion
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(bluedragon_propulsion_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()
if(TARGET roscpp_generate_messages_lisp)
  add_dependencies(bluedragon_propulsion_generate_messages_lisp roscpp_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_propulsion)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/bluedragon_propulsion
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(bluedragon_propulsion_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()
if(TARGET roscpp_generate_messages_nodejs)
  add_dependencies(bluedragon_propulsion_generate_messages_nodejs roscpp_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_propulsion)
  install(CODE "execute_process(COMMAND \"/usr/bin/python\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_propulsion\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/bluedragon_propulsion
    DESTINATION ${genpy_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(bluedragon_propulsion_generate_messages_py std_msgs_generate_messages_py)
endif()
if(TARGET roscpp_generate_messages_py)
  add_dependencies(bluedragon_propulsion_generate_messages_py roscpp_generate_messages_py)
endif()
