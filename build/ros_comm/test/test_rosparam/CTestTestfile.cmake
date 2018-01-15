# CMake generated Testfile for 
# Source directory: /home/tim/catkin_ws/src/ros_comm/test/test_rosparam
# Build directory: /home/tim/catkin_ws/build/ros_comm/test/test_rosparam
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_test_rosparam_rostest_test_rosparam.test "/home/tim/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/usr/share/catkin/cmake/test/run_tests.py" "/home/tim/catkin_ws/build/test_results/test_rosparam/rostest-test_rosparam.xml" "--return-code" "/home/tim/catkin_ws/src/ros_comm/tools/rostest/scripts/rostest --pkgdir=/home/tim/catkin_ws/src/ros_comm/test/test_rosparam --package=test_rosparam --results-filename test_rosparam.xml --results-base-dir \"/home/tim/catkin_ws/build/test_results\" /home/tim/catkin_ws/src/ros_comm/test/test_rosparam/test/rosparam.test ")
add_test(_ctest_test_rosparam_nosetests_test "/home/tim/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/usr/share/catkin/cmake/test/run_tests.py" "/home/tim/catkin_ws/build/test_results/test_rosparam/nosetests-test.xml" "--return-code" "/usr/bin/cmake -E make_directory /home/tim/catkin_ws/build/test_results/test_rosparam" "/usr/bin/nosetests-2.7 -P --process-timeout=60 --where=/home/tim/catkin_ws/src/ros_comm/test/test_rosparam/test --with-xunit --xunit-file=/home/tim/catkin_ws/build/test_results/test_rosparam/nosetests-test.xml")
