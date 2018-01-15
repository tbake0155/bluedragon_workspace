# Install script for directory: /home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/tim/catkin_ws/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/test_rosbag/msg_current" TYPE FILE FILES
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/Constants.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/Converged.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/MigratedAddSub.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/MigratedExplicit.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/MigratedImplicit.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/MigratedMixed.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/PartiallyMigrated.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/Renamed4.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/Simple.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/SimpleMigrated.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/SubUnmigrated.msg"
    "/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current/Unmigrated.msg"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/test_rosbag/cmake" TYPE FILE FILES "/home/tim/catkin_ws/build/ros_comm/test/test_rosbag/bag_migration_tests/catkin_generated/installspace/test_rosbag-msg-paths.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/tim/catkin_ws/devel/include/test_rosbag")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "/home/tim/catkin_ws/devel/share/roseus/ros/test_rosbag")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "/home/tim/catkin_ws/devel/share/common-lisp/ros/test_rosbag")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "/home/tim/catkin_ws/devel/share/gennodejs/ros/test_rosbag")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  execute_process(COMMAND "/usr/bin/python" -m compileall "/home/tim/catkin_ws/devel/lib/python2.7/dist-packages/test_rosbag")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python2.7/dist-packages" TYPE DIRECTORY FILES "/home/tim/catkin_ws/devel/lib/python2.7/dist-packages/test_rosbag")
endif()

