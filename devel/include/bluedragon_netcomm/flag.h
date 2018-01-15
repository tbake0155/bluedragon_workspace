// Generated by gencpp from file bluedragon_netcomm/flag.msg
// DO NOT EDIT!


#ifndef BLUEDRAGON_NETCOMM_MESSAGE_FLAG_H
#define BLUEDRAGON_NETCOMM_MESSAGE_FLAG_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace bluedragon_netcomm
{
template <class ContainerAllocator>
struct flag_
{
  typedef flag_<ContainerAllocator> Type;

  flag_()
    : user_flag(0)  {
    }
  flag_(const ContainerAllocator& _alloc)
    : user_flag(0)  {
  (void)_alloc;
    }



   typedef uint8_t _user_flag_type;
  _user_flag_type user_flag;




  typedef boost::shared_ptr< ::bluedragon_netcomm::flag_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::bluedragon_netcomm::flag_<ContainerAllocator> const> ConstPtr;

}; // struct flag_

typedef ::bluedragon_netcomm::flag_<std::allocator<void> > flag;

typedef boost::shared_ptr< ::bluedragon_netcomm::flag > flagPtr;
typedef boost::shared_ptr< ::bluedragon_netcomm::flag const> flagConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::bluedragon_netcomm::flag_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::bluedragon_netcomm::flag_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace bluedragon_netcomm

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'nav_msgs': ['/opt/ros/kinetic/share/nav_msgs/cmake/../msg'], 'roscpp': ['/home/tim/catkin_ws/src/ros_comm/clients/roscpp/msg'], 'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'actionlib_msgs': ['/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'bluedragon_netcomm': ['/home/tim/catkin_ws/src/bluedragon_netcomm/msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'tf': ['/opt/ros/kinetic/share/tf/cmake/../msg'], 'bluedragon_propulsion': ['/home/tim/catkin_ws/src/bluedragon_propulsion/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::bluedragon_netcomm::flag_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::bluedragon_netcomm::flag_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::bluedragon_netcomm::flag_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::bluedragon_netcomm::flag_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::bluedragon_netcomm::flag_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::bluedragon_netcomm::flag_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::bluedragon_netcomm::flag_<ContainerAllocator> >
{
  static const char* value()
  {
    return "d78f593981d746c0e518fd7d6c60416a";
  }

  static const char* value(const ::bluedragon_netcomm::flag_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xd78f593981d746c0ULL;
  static const uint64_t static_value2 = 0xe518fd7d6c60416aULL;
};

template<class ContainerAllocator>
struct DataType< ::bluedragon_netcomm::flag_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bluedragon_netcomm/flag";
  }

  static const char* value(const ::bluedragon_netcomm::flag_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::bluedragon_netcomm::flag_<ContainerAllocator> >
{
  static const char* value()
  {
    return "uint8 user_flag\n\
\n\
\n\
";
  }

  static const char* value(const ::bluedragon_netcomm::flag_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::bluedragon_netcomm::flag_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.user_flag);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct flag_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::bluedragon_netcomm::flag_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::bluedragon_netcomm::flag_<ContainerAllocator>& v)
  {
    s << indent << "user_flag: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.user_flag);
  }
};

} // namespace message_operations
} // namespace ros

#endif // BLUEDRAGON_NETCOMM_MESSAGE_FLAG_H
