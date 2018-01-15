// Generated by gencpp from file test_rospy/MultipleAddTwoIntsRequest.msg
// DO NOT EDIT!


#ifndef TEST_ROSPY_MESSAGE_MULTIPLEADDTWOINTSREQUEST_H
#define TEST_ROSPY_MESSAGE_MULTIPLEADDTWOINTSREQUEST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace test_rospy
{
template <class ContainerAllocator>
struct MultipleAddTwoIntsRequest_
{
  typedef MultipleAddTwoIntsRequest_<ContainerAllocator> Type;

  MultipleAddTwoIntsRequest_()
    : a(0)
    , b(0)
    , c(0)
    , d(0)  {
    }
  MultipleAddTwoIntsRequest_(const ContainerAllocator& _alloc)
    : a(0)
    , b(0)
    , c(0)
    , d(0)  {
  (void)_alloc;
    }



   typedef int32_t _a_type;
  _a_type a;

   typedef int32_t _b_type;
  _b_type b;

   typedef int32_t _c_type;
  _c_type c;

   typedef int32_t _d_type;
  _d_type d;




  typedef boost::shared_ptr< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> const> ConstPtr;

}; // struct MultipleAddTwoIntsRequest_

typedef ::test_rospy::MultipleAddTwoIntsRequest_<std::allocator<void> > MultipleAddTwoIntsRequest;

typedef boost::shared_ptr< ::test_rospy::MultipleAddTwoIntsRequest > MultipleAddTwoIntsRequestPtr;
typedef boost::shared_ptr< ::test_rospy::MultipleAddTwoIntsRequest const> MultipleAddTwoIntsRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >::stream(s, "", v);
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
struct IsFixedSize< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "55328e64986cccd71be7fe834e693c76";
  }

  static const char* value(const ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x55328e64986cccd7ULL;
  static const uint64_t static_value2 = 0x1be7fe834e693c76ULL;
};

template<class ContainerAllocator>
struct DataType< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "test_rospy/MultipleAddTwoIntsRequest";
  }

  static const char* value(const ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n\
int32 a\n\
int32 b\n\
int32 c\n\
int32 d\n\
";
  }

  static const char* value(const ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.a);
      stream.next(m.b);
      stream.next(m.c);
      stream.next(m.d);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct MultipleAddTwoIntsRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::test_rospy::MultipleAddTwoIntsRequest_<ContainerAllocator>& v)
  {
    s << indent << "a: ";
    Printer<int32_t>::stream(s, indent + "  ", v.a);
    s << indent << "b: ";
    Printer<int32_t>::stream(s, indent + "  ", v.b);
    s << indent << "c: ";
    Printer<int32_t>::stream(s, indent + "  ", v.c);
    s << indent << "d: ";
    Printer<int32_t>::stream(s, indent + "  ", v.d);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TEST_ROSPY_MESSAGE_MULTIPLEADDTWOINTSREQUEST_H
