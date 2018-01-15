// Generated by gencpp from file ublox_msgs/NavSVINFO.msg
// DO NOT EDIT!


#ifndef UBLOX_MSGS_MESSAGE_NAVSVINFO_H
#define UBLOX_MSGS_MESSAGE_NAVSVINFO_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <ublox_msgs/NavSVINFO_SV.h>

namespace ublox_msgs
{
template <class ContainerAllocator>
struct NavSVINFO_
{
  typedef NavSVINFO_<ContainerAllocator> Type;

  NavSVINFO_()
    : iTOW(0)
    , numCh(0)
    , globalFlags(0)
    , reserved2(0)
    , sv()  {
    }
  NavSVINFO_(const ContainerAllocator& _alloc)
    : iTOW(0)
    , numCh(0)
    , globalFlags(0)
    , reserved2(0)
    , sv(_alloc)  {
  (void)_alloc;
    }



   typedef uint32_t _iTOW_type;
  _iTOW_type iTOW;

   typedef uint8_t _numCh_type;
  _numCh_type numCh;

   typedef uint8_t _globalFlags_type;
  _globalFlags_type globalFlags;

   typedef uint16_t _reserved2_type;
  _reserved2_type reserved2;

   typedef std::vector< ::ublox_msgs::NavSVINFO_SV_<ContainerAllocator> , typename ContainerAllocator::template rebind< ::ublox_msgs::NavSVINFO_SV_<ContainerAllocator> >::other >  _sv_type;
  _sv_type sv;


    enum { CLASS_ID = 1u };
     enum { MESSAGE_ID = 48u };
     enum { CHIPGEN_ANTARIS = 0u };
     enum { CHIPGEN_UBLOX5 = 1u };
     enum { CHIPGEN_UBLOX6 = 2u };
 

  typedef boost::shared_ptr< ::ublox_msgs::NavSVINFO_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::ublox_msgs::NavSVINFO_<ContainerAllocator> const> ConstPtr;

}; // struct NavSVINFO_

typedef ::ublox_msgs::NavSVINFO_<std::allocator<void> > NavSVINFO;

typedef boost::shared_ptr< ::ublox_msgs::NavSVINFO > NavSVINFOPtr;
typedef boost::shared_ptr< ::ublox_msgs::NavSVINFO const> NavSVINFOConstPtr;

// constants requiring out of line definition

   

   

   

   

   



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::ublox_msgs::NavSVINFO_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace ublox_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'ublox_msgs': ['/home/tim/catkin_ws/src/ublox/ublox_msgs/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::ublox_msgs::NavSVINFO_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::ublox_msgs::NavSVINFO_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::ublox_msgs::NavSVINFO_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
{
  static const char* value()
  {
    return "92fe4aa48b81d4da7a58f2d2e63a7ca7";
  }

  static const char* value(const ::ublox_msgs::NavSVINFO_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x92fe4aa48b81d4daULL;
  static const uint64_t static_value2 = 0x7a58f2d2e63a7ca7ULL;
};

template<class ContainerAllocator>
struct DataType< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
{
  static const char* value()
  {
    return "ublox_msgs/NavSVINFO";
  }

  static const char* value(const ::ublox_msgs::NavSVINFO_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# NAV-SVINFO (0x01 0x30)\n\
# Space Vehicle Information\n\
#\n\
\n\
uint8 CLASS_ID = 1\n\
uint8 MESSAGE_ID = 48\n\
\n\
uint32 iTOW             # GPS Millisecond time of week [ms]\n\
\n\
uint8 numCh             # Number of channels\n\
\n\
uint8 globalFlags       # Bitmask\n\
uint8 CHIPGEN_ANTARIS = 0   # Antaris, Antaris 4\n\
uint8 CHIPGEN_UBLOX5 = 1    # u-blox 5\n\
uint8 CHIPGEN_UBLOX6 = 2    # u-blox 6\n\
\n\
uint16 reserved2        # Reserved\n\
\n\
NavSVINFO_SV[] sv\n\
\n\
================================================================================\n\
MSG: ublox_msgs/NavSVINFO_SV\n\
# see message NavSVINFO\n\
#\n\
\n\
uint8 chn             # Channel number, 255 for SVs not assigned to a channel\n\
uint8 svid            # Satellite ID\n\
\n\
uint8 flags           # Bitmask\n\
uint8 FLAGS_SVUSED = 1                      # SV is used for navigation\n\
uint8 FLAGS_DIFFCORR = 2                    # Differential correction data is available for this SV\n\
uint8 FLAGS_ORBITAVAIL = 4                  # Orbit information is available for this SV (Ephemeris or Almanach)\n\
uint8 FLAGS_ORBITEPH = 8                    # Orbit information is Ephemeris\n\
uint8 FLAGS_UNHEALTHY = 16                  # SV is unhealthy / shall not be used\n\
uint8 FLAGS_ORBIT_ALM = 32                  # Orbit information is Almanac Plus\n\
uint8 FLAGS_ORBIT_AOP = 64                  # Orbit information is AssistNow Autonomous\n\
uint8 FLAGS_SMOOTHED = 128                  # Carrier smoothed pseudorange used\n\
\n\
uint8 quality         # Bitfield\n\
# qualityInd: Signal Quality indicator (range 0..7). The following list shows the meaning of the different QI values:\n\
uint8 QUALITY_IDLE = 0                      # This channel is idle\n\
uint8 QUALITY_SEARCHING = 1                 # Channel is searching\n\
uint8 QUALITY_AQUIRED = 2                   # Signal aquired\n\
uint8 QUALITY_DETECTED = 3                  # Signal detected but unusable\n\
uint8 QUALITY_CODE_LOCK = 4                 # Code Lock on Signal\n\
uint8 QUALITY_CODE_AND_CARRIER_LOCKED1 = 5  # Code and Carrier locked\n\
uint8 QUALITY_CODE_AND_CARRIER_LOCKED2 = 6  # Code and Carrier locked\n\
uint8 QUALITY_CODE_AND_CARRIER_LOCKED3 = 7  # Code and Carrier locked\n\
\n\
uint8 cno             # Carrier to Noise Ratio (Signal Strength) [dbHz]\n\
int8 elev             # Elevation in integer degrees [deg]\n\
int16 azim            # Azimuth in integer degrees [deg]\n\
int32 prRes           # Pseudo range residual in centimetres [cm]\n\
";
  }

  static const char* value(const ::ublox_msgs::NavSVINFO_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.iTOW);
      stream.next(m.numCh);
      stream.next(m.globalFlags);
      stream.next(m.reserved2);
      stream.next(m.sv);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct NavSVINFO_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::ublox_msgs::NavSVINFO_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::ublox_msgs::NavSVINFO_<ContainerAllocator>& v)
  {
    s << indent << "iTOW: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.iTOW);
    s << indent << "numCh: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.numCh);
    s << indent << "globalFlags: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.globalFlags);
    s << indent << "reserved2: ";
    Printer<uint16_t>::stream(s, indent + "  ", v.reserved2);
    s << indent << "sv[]" << std::endl;
    for (size_t i = 0; i < v.sv.size(); ++i)
    {
      s << indent << "  sv[" << i << "]: ";
      s << std::endl;
      s << indent;
      Printer< ::ublox_msgs::NavSVINFO_SV_<ContainerAllocator> >::stream(s, indent + "    ", v.sv[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // UBLOX_MSGS_MESSAGE_NAVSVINFO_H
