// Generated by gencpp from file test_rosbag/SubUnmigrated.msg
// DO NOT EDIT!


#ifndef TEST_ROSBAG_MESSAGE_SUBUNMIGRATED_H
#define TEST_ROSBAG_MESSAGE_SUBUNMIGRATED_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <test_rosbag/Unmigrated.h>

namespace test_rosbag
{
template <class ContainerAllocator>
struct SubUnmigrated_
{
  typedef SubUnmigrated_<ContainerAllocator> Type;

  SubUnmigrated_()
    : field1(0)
    , field2()  {
    }
  SubUnmigrated_(const ContainerAllocator& _alloc)
    : field1(0)
    , field2(_alloc)  {
  (void)_alloc;
    }



   typedef int32_t _field1_type;
  _field1_type field1;

   typedef  ::test_rosbag::Unmigrated_<ContainerAllocator>  _field2_type;
  _field2_type field2;




  typedef boost::shared_ptr< ::test_rosbag::SubUnmigrated_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::test_rosbag::SubUnmigrated_<ContainerAllocator> const> ConstPtr;

}; // struct SubUnmigrated_

typedef ::test_rosbag::SubUnmigrated_<std::allocator<void> > SubUnmigrated;

typedef boost::shared_ptr< ::test_rosbag::SubUnmigrated > SubUnmigratedPtr;
typedef boost::shared_ptr< ::test_rosbag::SubUnmigrated const> SubUnmigratedConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::test_rosbag::SubUnmigrated_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace test_rosbag

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'rosgraph_msgs': ['/opt/ros/kinetic/share/rosgraph_msgs/cmake/../msg'], 'test_rosbag': ['/home/tim/catkin_ws/src/ros_comm/test/test_rosbag/bag_migration_tests/msg_current'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::test_rosbag::SubUnmigrated_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rosbag::SubUnmigrated_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rosbag::SubUnmigrated_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
{
  static const char* value()
  {
    return "f5b2916c606d6720ed1e99762dae845f";
  }

  static const char* value(const ::test_rosbag::SubUnmigrated_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xf5b2916c606d6720ULL;
  static const uint64_t static_value2 = 0xed1e99762dae845fULL;
};

template<class ContainerAllocator>
struct DataType< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
{
  static const char* value()
  {
    return "test_rosbag/SubUnmigrated";
  }

  static const char* value(const ::test_rosbag::SubUnmigrated_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
{
  static const char* value()
  {
    return "int32      field1 # 92\n\
Unmigrated field2 # (12, \"uuiasjs\", 61.7)\n\
\n\
================================================================================\n\
MSG: test_rosbag/Unmigrated\n\
int32   field1 #12\n\
string  field2 #\"uuiasjs\"\n\
float32 field3 #61.7\n\
";
  }

  static const char* value(const ::test_rosbag::SubUnmigrated_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.field1);
      stream.next(m.field2);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct SubUnmigrated_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::test_rosbag::SubUnmigrated_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::test_rosbag::SubUnmigrated_<ContainerAllocator>& v)
  {
    s << indent << "field1: ";
    Printer<int32_t>::stream(s, indent + "  ", v.field1);
    s << indent << "field2: ";
    s << std::endl;
    Printer< ::test_rosbag::Unmigrated_<ContainerAllocator> >::stream(s, indent + "  ", v.field2);
  }
};

} // namespace message_operations
} // namespace ros

#endif // TEST_ROSBAG_MESSAGE_SUBUNMIGRATED_H
