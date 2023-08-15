// GENERATED CODE -- DO NOT EDIT!

'use strict'
var grpc = require('@grpc/grpc-js')
var courier_pb = require('./courier_pb.js')

function serialize_couriers_v1_AddCourierRequest(arg) {
  if (!(arg instanceof courier_pb.AddCourierRequest)) {
    throw new Error('Expected argument of type couriers.v1.AddCourierRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_AddCourierRequest(buffer_arg) {
  return courier_pb.AddCourierRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_AddCourierResponse(arg) {
  if (!(arg instanceof courier_pb.AddCourierResponse)) {
    throw new Error('Expected argument of type couriers.v1.AddCourierResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_AddCourierResponse(buffer_arg) {
  return courier_pb.AddCourierResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_DeleteCourierRequest(arg) {
  if (!(arg instanceof courier_pb.DeleteCourierRequest)) {
    throw new Error(
      'Expected argument of type couriers.v1.DeleteCourierRequest'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_DeleteCourierRequest(buffer_arg) {
  return courier_pb.DeleteCourierRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_DeleteResponse(arg) {
  if (!(arg instanceof courier_pb.DeleteResponse)) {
    throw new Error('Expected argument of type couriers.v1.DeleteResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_DeleteResponse(buffer_arg) {
  return courier_pb.DeleteResponse.deserializeBinary(new Uint8Array(buffer_arg))
}

function serialize_couriers_v1_GetCourierRequest(arg) {
  if (!(arg instanceof courier_pb.GetCourierRequest)) {
    throw new Error('Expected argument of type couriers.v1.GetCourierRequest')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_GetCourierRequest(buffer_arg) {
  return courier_pb.GetCourierRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_GetCourierResponse(arg) {
  if (!(arg instanceof courier_pb.GetCourierResponse)) {
    throw new Error('Expected argument of type couriers.v1.GetCourierResponse')
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_GetCourierResponse(buffer_arg) {
  return courier_pb.GetCourierResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_SearchCouriersRequest(arg) {
  if (!(arg instanceof courier_pb.SearchCouriersRequest)) {
    throw new Error(
      'Expected argument of type couriers.v1.SearchCouriersRequest'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_SearchCouriersRequest(buffer_arg) {
  return courier_pb.SearchCouriersRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_SearchCouriersResponse(arg) {
  if (!(arg instanceof courier_pb.SearchCouriersResponse)) {
    throw new Error(
      'Expected argument of type couriers.v1.SearchCouriersResponse'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_SearchCouriersResponse(buffer_arg) {
  return courier_pb.SearchCouriersResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_UpdateCourierRequest(arg) {
  if (!(arg instanceof courier_pb.UpdateCourierRequest)) {
    throw new Error(
      'Expected argument of type couriers.v1.UpdateCourierRequest'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_UpdateCourierRequest(buffer_arg) {
  return courier_pb.UpdateCourierRequest.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

function serialize_couriers_v1_UpdateCourierResponse(arg) {
  if (!(arg instanceof courier_pb.UpdateCourierResponse)) {
    throw new Error(
      'Expected argument of type couriers.v1.UpdateCourierResponse'
    )
  }
  return Buffer.from(arg.serializeBinary())
}

function deserialize_couriers_v1_UpdateCourierResponse(buffer_arg) {
  return courier_pb.UpdateCourierResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  )
}

var CouriersService = (exports.CouriersService = {
  registerCourier: {
    path: '/couriers.v1.Couriers/RegisterCourier',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.AddCourierRequest,
    responseType: courier_pb.AddCourierResponse,
    requestSerialize: serialize_couriers_v1_AddCourierRequest,
    requestDeserialize: deserialize_couriers_v1_AddCourierRequest,
    responseSerialize: serialize_couriers_v1_AddCourierResponse,
    responseDeserialize: deserialize_couriers_v1_AddCourierResponse
  },
  getCourier: {
    path: '/couriers.v1.Couriers/GetCourier',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.GetCourierRequest,
    responseType: courier_pb.GetCourierResponse,
    requestSerialize: serialize_couriers_v1_GetCourierRequest,
    requestDeserialize: deserialize_couriers_v1_GetCourierRequest,
    responseSerialize: serialize_couriers_v1_GetCourierResponse,
    responseDeserialize: deserialize_couriers_v1_GetCourierResponse
  },
  updateCourier: {
    path: '/couriers.v1.Couriers/UpdateCourier',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.UpdateCourierRequest,
    responseType: courier_pb.UpdateCourierResponse,
    requestSerialize: serialize_couriers_v1_UpdateCourierRequest,
    requestDeserialize: deserialize_couriers_v1_UpdateCourierRequest,
    responseSerialize: serialize_couriers_v1_UpdateCourierResponse,
    responseDeserialize: deserialize_couriers_v1_UpdateCourierResponse
  },
  searchCouriers: {
    path: '/couriers.v1.Couriers/SearchCouriers',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.SearchCouriersRequest,
    responseType: courier_pb.SearchCouriersResponse,
    requestSerialize: serialize_couriers_v1_SearchCouriersRequest,
    requestDeserialize: deserialize_couriers_v1_SearchCouriersRequest,
    responseSerialize: serialize_couriers_v1_SearchCouriersResponse,
    responseDeserialize: deserialize_couriers_v1_SearchCouriersResponse
  },
  deleteCourier: {
    path: '/couriers.v1.Couriers/DeleteCourier',
    requestStream: false,
    responseStream: false,
    requestType: courier_pb.DeleteCourierRequest,
    responseType: courier_pb.DeleteResponse,
    requestSerialize: serialize_couriers_v1_DeleteCourierRequest,
    requestDeserialize: deserialize_couriers_v1_DeleteCourierRequest,
    responseSerialize: serialize_couriers_v1_DeleteResponse,
    responseDeserialize: deserialize_couriers_v1_DeleteResponse
  }
})

exports.CouriersClient = grpc.makeGenericClientConstructor(CouriersService)
