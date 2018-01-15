
"use strict";

let TestArray = require('./TestArray.js');
let TestStringInt = require('./TestStringInt.js');
let TestWithHeader = require('./TestWithHeader.js');
let TestEmpty = require('./TestEmpty.js');
let WithTime = require('./WithTime.js');
let WithDuration = require('./WithDuration.js');
let VariableLengthStringArray = require('./VariableLengthStringArray.js');
let EmbeddedFixedLength = require('./EmbeddedFixedLength.js');
let WithHeader = require('./WithHeader.js');
let FixedLength = require('./FixedLength.js');
let ArrayOfFixedLength = require('./ArrayOfFixedLength.js');
let CustomHeader = require('./CustomHeader.js');
let VariableLengthArrayOfExternal = require('./VariableLengthArrayOfExternal.js');
let FixedLengthArrayOfExternal = require('./FixedLengthArrayOfExternal.js');
let Constants = require('./Constants.js');
let FixedLengthStringArray = require('./FixedLengthStringArray.js');
let WithMemberNamedHeaderThatIsNotAHeader = require('./WithMemberNamedHeaderThatIsNotAHeader.js');
let EmbeddedVariableLength = require('./EmbeddedVariableLength.js');
let ArrayOfVariableLength = require('./ArrayOfVariableLength.js');
let VariableLength = require('./VariableLength.js');
let EmbeddedExternal = require('./EmbeddedExternal.js');
let HeaderNotFirstMember = require('./HeaderNotFirstMember.js');
let ThroughputMessage = require('./ThroughputMessage.js');
let LatencyMessage = require('./LatencyMessage.js');
let ChannelFloat32 = require('./ChannelFloat32.js');
let Point32 = require('./Point32.js');
let PointCloud = require('./PointCloud.js');

module.exports = {
  TestArray: TestArray,
  TestStringInt: TestStringInt,
  TestWithHeader: TestWithHeader,
  TestEmpty: TestEmpty,
  WithTime: WithTime,
  WithDuration: WithDuration,
  VariableLengthStringArray: VariableLengthStringArray,
  EmbeddedFixedLength: EmbeddedFixedLength,
  WithHeader: WithHeader,
  FixedLength: FixedLength,
  ArrayOfFixedLength: ArrayOfFixedLength,
  CustomHeader: CustomHeader,
  VariableLengthArrayOfExternal: VariableLengthArrayOfExternal,
  FixedLengthArrayOfExternal: FixedLengthArrayOfExternal,
  Constants: Constants,
  FixedLengthStringArray: FixedLengthStringArray,
  WithMemberNamedHeaderThatIsNotAHeader: WithMemberNamedHeaderThatIsNotAHeader,
  EmbeddedVariableLength: EmbeddedVariableLength,
  ArrayOfVariableLength: ArrayOfVariableLength,
  VariableLength: VariableLength,
  EmbeddedExternal: EmbeddedExternal,
  HeaderNotFirstMember: HeaderNotFirstMember,
  ThroughputMessage: ThroughputMessage,
  LatencyMessage: LatencyMessage,
  ChannelFloat32: ChannelFloat32,
  Point32: Point32,
  PointCloud: PointCloud,
};
