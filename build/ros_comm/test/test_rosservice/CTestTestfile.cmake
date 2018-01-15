# CMake generated Testfile for 
# Source directory: /home/tim/catkin_ws/src/ros_comm/test/test_rosservice
# Build directory: /home/tim/catkin_ws/build/ros_comm/test/test_rosservice
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_test_rosservice_nosetests_test "/home/tim/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/usr/share/catkin/cmake/test/run_tests.py" "/home/tim/catkin_ws/build/test_results/test_rosservice/nosetests-test.xml" "--return-code" "/usr/bin/cmake -E make_directory /home/tim/catkin_ws/build/test_results/test_rosservice" "/usr/bin/nosetests-2.7 -P --process-timeout=60 --where=/home/tim/catkin_ws/src/ros_comm/test/test_rosservice/test --with-xunit --xunit-file=/home/tim/catkin_ws/build/test_results/test_rosservice/nosetests-test.xml")
add_test(_ctest_test_rosservice_rostest_test_rosservice.test "/home/tim/catkin_ws/build/catkin_generated/env_cached.sh" "/usr/bin/python" "/usr/share/catkin/cmake/test/run_tests.py" "/home/tim/catkin_ws/build/test_results/test_rosservice/rostest-test_rosservice.xml" "--return-code" "/home/tim/catkin_ws/src/ros_comm/tools/rostest/scripts/rostest --pkgdir=/home/tim/catkin_ws/src/ros_comm/test/test_rosservice --package=test_rosservice --results-filename test_rosservice.xml --results-base-dir \"/home/tim/catkin_ws/build/test_results\" /home/tim/catkin_ws/src/ros_comm/test/test_rosservice/test/rosservice.test ")
