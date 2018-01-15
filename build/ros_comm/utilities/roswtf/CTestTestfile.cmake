# CMake generated Testfile for 
# Source directory: /home/tim/catkin_ws/src/ros_comm/utilities/roswtf
# Build directory: /home/tim/catkin_ws/build/ros_comm/utilities/roswtf
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_roswtf_rostest_test_roswtf.test "/home/tim/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/usr/share/catkin/cmake/test/run_tests.py" "/home/tim/catkin_ws/build/test_results/roswtf/rostest-test_roswtf.xml" "--return-code" "/home/tim/catkin_ws/src/ros_comm/tools/rostest/scripts/rostest --pkgdir=/home/tim/catkin_ws/src/ros_comm/utilities/roswtf --package=roswtf --results-filename test_roswtf.xml --results-base-dir \"/home/tim/catkin_ws/build/test_results\" /home/tim/catkin_ws/src/ros_comm/utilities/roswtf/test/roswtf.test ")
add_test(_ctest_roswtf_nosetests_test "/home/tim/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/usr/share/catkin/cmake/test/run_tests.py" "/home/tim/catkin_ws/build/test_results/roswtf/nosetests-test.xml" "--return-code" "/usr/bin/cmake -E make_directory /home/tim/catkin_ws/build/test_results/roswtf" "/usr/bin/nosetests-2.7 -P --process-timeout=60 --where=/home/tim/catkin_ws/src/ros_comm/utilities/roswtf/test --with-xunit --xunit-file=/home/tim/catkin_ws/build/test_results/roswtf/nosetests-test.xml")
