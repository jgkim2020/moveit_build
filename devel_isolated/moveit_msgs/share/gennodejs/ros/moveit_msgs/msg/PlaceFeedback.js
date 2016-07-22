// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PlaceFeedback {
  constructor() {
    this.state = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlaceFeedback
    // Serialize message field [state]
    bufferInfo = _serializer.string(obj.state, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PlaceFeedback
    let tmp;
    let len;
    let data = new PlaceFeedback();
    // Deserialize message field [state]
    tmp = _deserializer.string(buffer);
    data.state = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/PlaceFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'af6d3a99f0fbeb66d3248fa4b3e675fb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    
    # The internal state that the place action currently is in
    string state
    
    
    `;
  }

};

module.exports = PlaceFeedback;