#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
    DESTDIR_ARG="--root=$DESTDIR"
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/tim/catkin_ws/src/unique_identifier/unique_id"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/tim/catkin_ws/install/lib/python2.7/dist-packages:/home/tim/catkin_ws/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/tim/catkin_ws/build" \
    "/usr/bin/python" \
    "/home/tim/catkin_ws/src/unique_identifier/unique_id/setup.py" \
    build --build-base "/home/tim/catkin_ws/build/unique_identifier/unique_id" \
    install \
    $DESTDIR_ARG \
    --install-layout=deb --prefix="/home/tim/catkin_ws/install" --install-scripts="/home/tim/catkin_ws/install/bin"
