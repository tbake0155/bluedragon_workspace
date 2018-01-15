# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from test_rosbag/SubUnmigrated.msg. Do not edit."""
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import test_rosbag.msg

class SubUnmigrated(genpy.Message):
  _md5sum = "f5b2916c606d6720ed1e99762dae845f"
  _type = "test_rosbag/SubUnmigrated"
  _has_header = False #flag to mark the presence of a Header object
  _full_text = """int32      field1 # 92
Unmigrated field2 # (12, "uuiasjs", 61.7)

================================================================================
MSG: test_rosbag/Unmigrated
int32   field1 #12
string  field2 #"uuiasjs"
float32 field3 #61.7"""
  __slots__ = ['field1','field2']
  _slot_types = ['int32','test_rosbag/Unmigrated']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       field1,field2

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(SubUnmigrated, self).__init__(*args, **kwds)
      #message fields cannot be None, assign default values for those that are
      if self.field1 is None:
        self.field1 = 0
      if self.field2 is None:
        self.field2 = test_rosbag.msg.Unmigrated()
    else:
      self.field1 = 0
      self.field2 = test_rosbag.msg.Unmigrated()

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_2i().pack(_x.field1, _x.field2.field1))
      _x = self.field2.field2
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.pack('<I%ss'%length, length, _x))
      buff.write(_get_struct_f().pack(self.field2.field3))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    try:
      if self.field2 is None:
        self.field2 = test_rosbag.msg.Unmigrated()
      end = 0
      _x = self
      start = end
      end += 8
      (_x.field1, _x.field2.field1,) = _get_struct_2i().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.field2.field2 = str[start:end].decode('utf-8')
      else:
        self.field2.field2 = str[start:end]
      start = end
      end += 4
      (self.field2.field3,) = _get_struct_f().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_2i().pack(_x.field1, _x.field2.field1))
      _x = self.field2.field2
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.pack('<I%ss'%length, length, _x))
      buff.write(_get_struct_f().pack(self.field2.field3))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    try:
      if self.field2 is None:
        self.field2 = test_rosbag.msg.Unmigrated()
      end = 0
      _x = self
      start = end
      end += 8
      (_x.field1, _x.field2.field1,) = _get_struct_2i().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.field2.field2 = str[start:end].decode('utf-8')
      else:
        self.field2.field2 = str[start:end]
      start = end
      end += 4
      (self.field2.field3,) = _get_struct_f().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_2i = None
def _get_struct_2i():
    global _struct_2i
    if _struct_2i is None:
        _struct_2i = struct.Struct("<2i")
    return _struct_2i
_struct_f = None
def _get_struct_f():
    global _struct_f
    if _struct_f is None:
        _struct_f = struct.Struct("<f")
    return _struct_f
