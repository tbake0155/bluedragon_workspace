// Generated by gencpp from file bluedragon_propulsion/object_detection.msg
// DO NOT EDIT!


#ifndef BLUEDRAGON_PROPULSION_MESSAGE_OBJECT_DETECTION_H
#define BLUEDRAGON_PROPULSION_MESSAGE_OBJECT_DETECTION_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace bluedragon_propulsion
{
template <class ContainerAllocator>
struct object_detection_
{
  typedef object_detection_<ContainerAllocator> Type;

  object_detection_()
    : object_detection()  {
      object_detection.assign(false);
  }
  object_detection_(const ContainerAllocator& _alloc)
    : object_detection()  {
  (void)_alloc;
      object_detection.assign(false);
  }



   typedef boost::array<uint8_t, 6>  _object_detection_type;
  _object_detection_type object_detection;




  typedef boost::shared_ptr< ::bluedragon_propulsion::object_detection_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::bluedragon_propulsion::object_detection_<ContainerAllocator> const> ConstPtr;

}; // struct object_detection_

typedef ::bluedragon_propulsion::object_detection_<std::allocator<void> > object_detection;

typedef boost::shared_ptr< ::bluedragon_propulsion::object_detection > object_detectionPtr;
typedef boost::shared_ptr< ::bluedragon_propulsion::object_detection const> object_detectionConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::bluedragon_propulsion::object_detection_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace bluedragon_propulsion

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'roscpp': ['/opt/ros/kinetic/share/roscpp/cmake/../msg'], 'bluedragon_propulsion': ['/home/tim/catkin_ws/src/bluedragon_propulsion/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::bluedragon_propulsion::object_detection_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::bluedragon_propulsion::object_detection_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::bluedragon_propulsion::object_detection_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
{
  static const char* value()
  {
    return "f9da5b0bcdc242559cfa3d1d953b4db2";
  }

  static const char* value(const ::bluedragon_propulsion::object_detection_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xf9da5b0bcdc24255ULL;
  static const uint64_t static_value2 = 0x9cfa3d1d953b4db2ULL;
};

template<class ContainerAllocator>
struct DataType< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bluedragon_propulsion/object_detection";
  }

  static const char* value(const ::bluedragon_propulsion::object_detection_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bool[6] object_detection\n\
";
  }

  static const char* value(const ::bluedragon_propulsion::object_detection_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.object_detection);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct object_detection_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::bluedragon_propulsion::object_detection_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::bluedragon_propulsion::object_detection_<ContainerAllocator>& v)
  {
    s << indent << "object_detection[]" << std::endl;
    for (size_t i = 0; i < v.object_detection.size(); ++i)
    {
      s << indent << "  object_detection[" << i << "]: ";
      Printer<uint8_t>::stream(s, indent + "  ", v.object_detection[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // BLUEDRAGON_PROPULSION_MESSAGE_OBJECT_DETECTION_H