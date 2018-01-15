// Generated by gencpp from file test_rospy/Floats.msg
// DO NOT EDIT!


#ifndef TEST_ROSPY_MESSAGE_FLOATS_H
#define TEST_ROSPY_MESSAGE_FLOATS_H


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
struct Floats_
{
  typedef Floats_<ContainerAllocator> Type;

  Floats_()
    : data()  {
    }
  Floats_(const ContainerAllocator& _alloc)
    : data(_alloc)  {
  (void)_alloc;
    }



   typedef std::vector<float, typename ContainerAllocator::template rebind<float>::other >  _data_type;
  _data_type data;




  typedef boost::shared_ptr< ::test_rospy::Floats_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::test_rospy::Floats_<ContainerAllocator> const> ConstPtr;

}; // struct Floats_

typedef ::test_rospy::Floats_<std::allocator<void> > Floats;

typedef boost::shared_ptr< ::test_rospy::Floats > FloatsPtr;
typedef boost::shared_ptr< ::test_rospy::Floats const> FloatsConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::test_rospy::Floats_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::test_rospy::Floats_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace test_rospy

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'test_rospy': ['/home/tim/catkin_ws/src/ros_comm/test/test_rospy/msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'test_rosmaster': ['/home/tim/catkin_ws/src/ros_comm/test/test_rosmaster/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::test_rospy::Floats_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::test_rospy::Floats_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rospy::Floats_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::test_rospy::Floats_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rospy::Floats_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::test_rospy::Floats_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::test_rospy::Floats_<ContainerAllocator> >
{
  static const char* value()
  {
    return "420cd38b6b071cd49f2970c3e2cee511";
  }

  static const char* value(const ::test_rospy::Floats_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x420cd38b6b071cd4ULL;
  static const uint64_t static_value2 = 0x9f2970c3e2cee511ULL;
};

template<class ContainerAllocator>
struct DataType< ::test_rospy::Floats_<ContainerAllocator> >
{
  static const char* value()
  {
    return "test_rospy/Floats";
  }

  static const char* value(const ::test_rospy::Floats_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::test_rospy::Floats_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# exact copy of rospy_tutorials/Floats, used for testing\n\
float32[] data\n\
";
  }

  static const char* value(const ::test_rospy::Floats_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::test_rospy::Floats_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.data);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct Floats_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::test_rospy::Floats_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::test_rospy::Floats_<ContainerAllocator>& v)
  {
    s << indent << "data[]" << std::endl;
    for (size_t i = 0; i < v.data.size(); ++i)
    {
      s << indent << "  data[" << i << "]: ";
      Printer<float>::stream(s, indent + "  ", v.data[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // TEST_ROSPY_MESSAGE_FLOATS_H