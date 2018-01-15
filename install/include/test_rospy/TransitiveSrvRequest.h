// Generated by gencpp from file test_rospy/TransitiveSrvRequest.msg
// DO NOT EDIT!


#ifndef TEST_ROSPY_MESSAGE_TRANSITIVESRVREQUEST_H
#define TEST_ROSPY_MESSAGE_TRANSITIVESRVREQUEST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <test_rospy/TransitiveMsg1.h>

namespace test_rospy
{
template <class ContainerAllocator>
struct TransitiveSrvRequest_
{
  typedef TransitiveSrvRequest_<ContainerAllocator> Type;

  TransitiveSrvRequest_()
    : msg()  {
    }
  TransitiveSrvRequest_(const ContainerAllocator& _alloc)
    : msg(_alloc)  {
  (void)_alloc;
    }



   typedef  ::test_rospy::TransitiveMsg1_<ContainerAllocator>  _msg_type;
  _msg_type msg;




  typedef boost::shared_ptr< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> const> ConstPtr;

}; // struct TransitiveSrvRequest_

typedef ::test_rospy::TransitiveSrvRequest_<std::allocator<void> > TransitiveSrvRequest;

typedef boost::shared_ptr< ::test_rospy::TransitiveSrvRequest > TransitiveSrvRequestPtr;
typedef boost::shared_ptr< ::test_rospy::TransitiveSrvRequest const> TransitiveSrvRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace test_rospy

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'test_rospy': ['/home/tim/catkin_ws/src/ros_comm/test/test_rospy/msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'test_rosmaster': ['/home/tim/catkin_ws/src/ros_comm/test/test_rosmaster/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "c9627b8665f2e2514f3d19406d2ed17d";
  }

  static const char* value(const ::test_rospy::TransitiveSrvRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xc9627b8665f2e251ULL;
  static const uint64_t static_value2 = 0x4f3d19406d2ed17dULL;
};

template<class ContainerAllocator>
struct DataType< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "test_rospy/TransitiveSrvRequest";
  }

  static const char* value(const ::test_rospy::TransitiveSrvRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "test_rospy/TransitiveMsg1 msg\n\
\n\
================================================================================\n\
MSG: test_rospy/TransitiveMsg1\n\
TransitiveMsg2 msg2\n\
\n\
\n\
================================================================================\n\
MSG: test_rospy/TransitiveMsg2\n\
test_rosmaster/Composite data\n\
\n\
================================================================================\n\
MSG: test_rosmaster/Composite\n\
# composite message. required for testing import calculation in generators\n\
CompositeA a\n\
CompositeB b\n\
\n\
================================================================================\n\
MSG: test_rosmaster/CompositeA\n\
# This represents an orientation in free space in quaternion form.\n\
\n\
float64 x\n\
float64 y\n\
float64 z\n\
float64 w\n\
\n\
================================================================================\n\
MSG: test_rosmaster/CompositeB\n\
# copy of geometry_msgs/Point for testing\n\
float64 x\n\
float64 y\n\
float64 z\n\
";
  }

  static const char* value(const ::test_rospy::TransitiveSrvRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.msg);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct TransitiveSrvRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::test_rospy::TransitiveSrvRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::test_rospy::TransitiveSrvRequest_<ContainerAllocator>& v)
  {
    s << indent << "msg: ";
    s << std::endl;
    Printer< ::test_rospy::TransitiveMsg1_<ContainerAllocator> >::stream(s, indent + "  ", v.msg);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TEST_ROSPY_MESSAGE_TRANSITIVESRVREQUEST_H
