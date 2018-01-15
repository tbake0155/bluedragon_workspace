# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "rqt_py_common: 2 messages, 0 services")

set(MSG_I_FLAGS "-Irqt_py_common:/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg;-Istd_msgs:/opt/ros/kinetic/share/std_msgs/cmake/../msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(rqt_py_common_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" NAME_WE)
add_custom_target(_rqt_py_common_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "rqt_py_common" "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" ""
)

get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" NAME_WE)
add_custom_target(_rqt_py_common_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "rqt_py_common" "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" "rqt_py_common/Val"
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/rqt_py_common
)
_generate_msg_cpp(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg"
  "${MSG_I_FLAGS}"
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/rqt_py_common
)

### Generating Services

### Generating Module File
_generate_module_cpp(rqt_py_common
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/rqt_py_common
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(rqt_py_common_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(rqt_py_common_generate_messages rqt_py_common_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_cpp _rqt_py_common_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_cpp _rqt_py_common_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(rqt_py_common_gencpp)
add_dependencies(rqt_py_common_gencpp rqt_py_common_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS rqt_py_common_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/rqt_py_common
)
_generate_msg_eus(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg"
  "${MSG_I_FLAGS}"
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/rqt_py_common
)

### Generating Services

### Generating Module File
_generate_module_eus(rqt_py_common
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/rqt_py_common
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(rqt_py_common_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(rqt_py_common_generate_messages rqt_py_common_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_eus _rqt_py_common_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_eus _rqt_py_common_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(rqt_py_common_geneus)
add_dependencies(rqt_py_common_geneus rqt_py_common_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS rqt_py_common_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/rqt_py_common
)
_generate_msg_lisp(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg"
  "${MSG_I_FLAGS}"
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/rqt_py_common
)

### Generating Services

### Generating Module File
_generate_module_lisp(rqt_py_common
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/rqt_py_common
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(rqt_py_common_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(rqt_py_common_generate_messages rqt_py_common_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_lisp _rqt_py_common_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_lisp _rqt_py_common_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(rqt_py_common_genlisp)
add_dependencies(rqt_py_common_genlisp rqt_py_common_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS rqt_py_common_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/rqt_py_common
)
_generate_msg_nodejs(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg"
  "${MSG_I_FLAGS}"
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/rqt_py_common
)

### Generating Services

### Generating Module File
_generate_module_nodejs(rqt_py_common
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/rqt_py_common
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(rqt_py_common_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(rqt_py_common_generate_messages rqt_py_common_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_nodejs _rqt_py_common_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_nodejs _rqt_py_common_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(rqt_py_common_gennodejs)
add_dependencies(rqt_py_common_gennodejs rqt_py_common_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS rqt_py_common_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common
)
_generate_msg_py(rqt_py_common
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg"
  "${MSG_I_FLAGS}"
  "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common
)

### Generating Services

### Generating Module File
_generate_module_py(rqt_py_common
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(rqt_py_common_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(rqt_py_common_generate_messages rqt_py_common_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/Val.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_py _rqt_py_common_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/tim/catkin_ws/src/rqt_common_plugins/rqt_py_common/test/msg/ArrayVal.msg" NAME_WE)
add_dependencies(rqt_py_common_generate_messages_py _rqt_py_common_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(rqt_py_common_genpy)
add_dependencies(rqt_py_common_genpy rqt_py_common_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS rqt_py_common_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/rqt_py_common)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/rqt_py_common
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(rqt_py_common_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/rqt_py_common)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/rqt_py_common
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(rqt_py_common_generate_messages_eus std_msgs_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/rqt_py_common)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/rqt_py_common
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(rqt_py_common_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/rqt_py_common)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/rqt_py_common
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(rqt_py_common_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common)
  install(CODE "execute_process(COMMAND \"/usr/bin/python\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common
    DESTINATION ${genpy_INSTALL_DIR}
    # skip all init files
    PATTERN "__init__.py" EXCLUDE
    PATTERN "__init__.pyc" EXCLUDE
  )
  # install init files which are not in the root folder of the generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common
    DESTINATION ${genpy_INSTALL_DIR}
    FILES_MATCHING
    REGEX "${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/rqt_py_common/.+/__init__.pyc?$"
  )
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(rqt_py_common_generate_messages_py std_msgs_generate_messages_py)
endif()
