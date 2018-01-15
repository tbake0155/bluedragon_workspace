execute_process(COMMAND "/home/tim/catkin_ws/build/ros_comm/tools/roslaunch/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/tim/catkin_ws/build/ros_comm/tools/roslaunch/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
