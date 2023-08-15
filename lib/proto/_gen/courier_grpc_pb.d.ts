// package: couriers.v1
// file: courier.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from '@grpc/grpc-js'
import * as courier_pb from './courier_pb'

interface ICouriersService
  extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerCourier: ICouriersService_IRegisterCourier
  getCourier: ICouriersService_IGetCourier
  updateCourier: ICouriersService_IUpdateCourier
  searchCouriers: ICouriersService_ISearchCouriers
  deleteCourier: ICouriersService_IDeleteCourier
}

interface ICouriersService_IRegisterCourier
  extends grpc.MethodDefinition<
    courier_pb.AddCourierRequest,
    courier_pb.AddCourierResponse
  > {
  path: '/couriers.v1.Couriers/RegisterCourier'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<courier_pb.AddCourierRequest>
  requestDeserialize: grpc.deserialize<courier_pb.AddCourierRequest>
  responseSerialize: grpc.serialize<courier_pb.AddCourierResponse>
  responseDeserialize: grpc.deserialize<courier_pb.AddCourierResponse>
}
interface ICouriersService_IGetCourier
  extends grpc.MethodDefinition<
    courier_pb.GetCourierRequest,
    courier_pb.GetCourierResponse
  > {
  path: '/couriers.v1.Couriers/GetCourier'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<courier_pb.GetCourierRequest>
  requestDeserialize: grpc.deserialize<courier_pb.GetCourierRequest>
  responseSerialize: grpc.serialize<courier_pb.GetCourierResponse>
  responseDeserialize: grpc.deserialize<courier_pb.GetCourierResponse>
}
interface ICouriersService_IUpdateCourier
  extends grpc.MethodDefinition<
    courier_pb.UpdateCourierRequest,
    courier_pb.UpdateCourierResponse
  > {
  path: '/couriers.v1.Couriers/UpdateCourier'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<courier_pb.UpdateCourierRequest>
  requestDeserialize: grpc.deserialize<courier_pb.UpdateCourierRequest>
  responseSerialize: grpc.serialize<courier_pb.UpdateCourierResponse>
  responseDeserialize: grpc.deserialize<courier_pb.UpdateCourierResponse>
}
interface ICouriersService_ISearchCouriers
  extends grpc.MethodDefinition<
    courier_pb.SearchCouriersRequest,
    courier_pb.SearchCouriersResponse
  > {
  path: '/couriers.v1.Couriers/SearchCouriers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<courier_pb.SearchCouriersRequest>
  requestDeserialize: grpc.deserialize<courier_pb.SearchCouriersRequest>
  responseSerialize: grpc.serialize<courier_pb.SearchCouriersResponse>
  responseDeserialize: grpc.deserialize<courier_pb.SearchCouriersResponse>
}
interface ICouriersService_IDeleteCourier
  extends grpc.MethodDefinition<
    courier_pb.DeleteCourierRequest,
    courier_pb.DeleteResponse
  > {
  path: '/couriers.v1.Couriers/DeleteCourier'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<courier_pb.DeleteCourierRequest>
  requestDeserialize: grpc.deserialize<courier_pb.DeleteCourierRequest>
  responseSerialize: grpc.serialize<courier_pb.DeleteResponse>
  responseDeserialize: grpc.deserialize<courier_pb.DeleteResponse>
}

export const CouriersService: ICouriersService

export interface ICouriersServer extends grpc.UntypedServiceImplementation {
  registerCourier: grpc.handleUnaryCall<
    courier_pb.AddCourierRequest,
    courier_pb.AddCourierResponse
  >
  getCourier: grpc.handleUnaryCall<
    courier_pb.GetCourierRequest,
    courier_pb.GetCourierResponse
  >
  updateCourier: grpc.handleUnaryCall<
    courier_pb.UpdateCourierRequest,
    courier_pb.UpdateCourierResponse
  >
  searchCouriers: grpc.handleUnaryCall<
    courier_pb.SearchCouriersRequest,
    courier_pb.SearchCouriersResponse
  >
  deleteCourier: grpc.handleUnaryCall<
    courier_pb.DeleteCourierRequest,
    courier_pb.DeleteResponse
  >
}

export interface ICouriersClient {
  registerCourier(
    request: courier_pb.AddCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.AddCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  registerCourier(
    request: courier_pb.AddCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.AddCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  registerCourier(
    request: courier_pb.AddCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.AddCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  getCourier(
    request: courier_pb.GetCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.GetCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  getCourier(
    request: courier_pb.GetCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.GetCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  getCourier(
    request: courier_pb.GetCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.GetCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateCourier(
    request: courier_pb.UpdateCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.UpdateCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateCourier(
    request: courier_pb.UpdateCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.UpdateCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  updateCourier(
    request: courier_pb.UpdateCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.UpdateCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  searchCouriers(
    request: courier_pb.SearchCouriersRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.SearchCouriersResponse
    ) => void
  ): grpc.ClientUnaryCall
  searchCouriers(
    request: courier_pb.SearchCouriersRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.SearchCouriersResponse
    ) => void
  ): grpc.ClientUnaryCall
  searchCouriers(
    request: courier_pb.SearchCouriersRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.SearchCouriersResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteCourier(
    request: courier_pb.DeleteCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteCourier(
    request: courier_pb.DeleteCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  deleteCourier(
    request: courier_pb.DeleteCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
}

export class CouriersClient extends grpc.Client implements ICouriersClient {
  constructor(
    address: string,
    credentials: grpc.ChannelCredentials,
    options?: Partial<grpc.ClientOptions>
  )
  public registerCourier(
    request: courier_pb.AddCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.AddCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public registerCourier(
    request: courier_pb.AddCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.AddCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public registerCourier(
    request: courier_pb.AddCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.AddCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getCourier(
    request: courier_pb.GetCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.GetCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getCourier(
    request: courier_pb.GetCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.GetCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public getCourier(
    request: courier_pb.GetCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.GetCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateCourier(
    request: courier_pb.UpdateCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.UpdateCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateCourier(
    request: courier_pb.UpdateCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.UpdateCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public updateCourier(
    request: courier_pb.UpdateCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.UpdateCourierResponse
    ) => void
  ): grpc.ClientUnaryCall
  public searchCouriers(
    request: courier_pb.SearchCouriersRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.SearchCouriersResponse
    ) => void
  ): grpc.ClientUnaryCall
  public searchCouriers(
    request: courier_pb.SearchCouriersRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.SearchCouriersResponse
    ) => void
  ): grpc.ClientUnaryCall
  public searchCouriers(
    request: courier_pb.SearchCouriersRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.SearchCouriersResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteCourier(
    request: courier_pb.DeleteCourierRequest,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteCourier(
    request: courier_pb.DeleteCourierRequest,
    metadata: grpc.Metadata,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
  public deleteCourier(
    request: courier_pb.DeleteCourierRequest,
    metadata: grpc.Metadata,
    options: Partial<grpc.CallOptions>,
    callback: (
      error: grpc.ServiceError | null,
      response: courier_pb.DeleteResponse
    ) => void
  ): grpc.ClientUnaryCall
}
