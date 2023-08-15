// package: couriers.v1
// file: courier.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf'

export class Capacity extends jspb.Message {
  getHeight(): number
  setHeight(value: number): Capacity
  getWidth(): number
  setWidth(value: number): Capacity
  getDepth(): number
  setDepth(value: number): Capacity

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Capacity.AsObject
  static toObject(includeInstance: boolean, msg: Capacity): Capacity.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Capacity,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Capacity
  static deserializeBinaryFromReader(
    message: Capacity,
    reader: jspb.BinaryReader
  ): Capacity
}

export namespace Capacity {
  export type AsObject = {
    height: number
    width: number
    depth: number
  }
}

export class Courier extends jspb.Message {
  getId(): string
  setId(value: string): Courier
  getName(): string
  setName(value: string): Courier
  getOrg(): string
  setOrg(value: string): Courier
  getLongitude(): number
  setLongitude(value: number): Courier
  getLatitude(): number
  setLatitude(value: number): Courier
  getAddressid(): string
  setAddressid(value: string): Courier

  hasCapacity(): boolean
  clearCapacity(): void
  getCapacity(): Capacity | undefined
  setCapacity(value?: Capacity): Courier

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Courier.AsObject
  static toObject(includeInstance: boolean, msg: Courier): Courier.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: Courier,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): Courier
  static deserializeBinaryFromReader(
    message: Courier,
    reader: jspb.BinaryReader
  ): Courier
}

export namespace Courier {
  export type AsObject = {
    id: string
    name: string
    org: string
    longitude: number
    latitude: number
    addressid: string
    capacity?: Capacity.AsObject
  }
}

export class CourierGeo extends jspb.Message {
  hasCourier(): boolean
  clearCourier(): void
  getCourier(): Courier | undefined
  setCourier(value?: Courier): CourierGeo
  getDistance(): number
  setDistance(value: number): CourierGeo

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CourierGeo.AsObject
  static toObject(
    includeInstance: boolean,
    msg: CourierGeo
  ): CourierGeo.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: CourierGeo,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): CourierGeo
  static deserializeBinaryFromReader(
    message: CourierGeo,
    reader: jspb.BinaryReader
  ): CourierGeo
}

export namespace CourierGeo {
  export type AsObject = {
    courier?: Courier.AsObject
    distance: number
  }
}

export class AddCourierRequest extends jspb.Message {
  getRequestedby(): string
  setRequestedby(value: string): AddCourierRequest
  getOrg(): string
  setOrg(value: string): AddCourierRequest
  getName(): string
  setName(value: string): AddCourierRequest
  getPostalcode(): string
  setPostalcode(value: string): AddCourierRequest
  getCountry(): string
  setCountry(value: string): AddCourierRequest
  getLongitude(): number
  setLongitude(value: number): AddCourierRequest
  getLatitude(): number
  setLatitude(value: number): AddCourierRequest
  getStreet(): string
  setStreet(value: string): AddCourierRequest
  getCity(): string
  setCity(value: string): AddCourierRequest
  getState(): string
  setState(value: string): AddCourierRequest
  getHeight(): number
  setHeight(value: number): AddCourierRequest
  getWidth(): number
  setWidth(value: number): AddCourierRequest
  getDepth(): number
  setDepth(value: number): AddCourierRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddCourierRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddCourierRequest
  ): AddCourierRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddCourierRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddCourierRequest
  static deserializeBinaryFromReader(
    message: AddCourierRequest,
    reader: jspb.BinaryReader
  ): AddCourierRequest
}

export namespace AddCourierRequest {
  export type AsObject = {
    requestedby: string
    org: string
    name: string
    postalcode: string
    country: string
    longitude: number
    latitude: number
    street: string
    city: string
    state: string
    height: number
    width: number
    depth: number
  }
}

export class AddCourierResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): AddCourierResponse

  hasCourier(): boolean
  clearCourier(): void
  getCourier(): Courier | undefined
  setCourier(value?: Courier): AddCourierResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AddCourierResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: AddCourierResponse
  ): AddCourierResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: AddCourierResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): AddCourierResponse
  static deserializeBinaryFromReader(
    message: AddCourierResponse,
    reader: jspb.BinaryReader
  ): AddCourierResponse
}

export namespace AddCourierResponse {
  export type AsObject = {
    ok: boolean
    courier?: Courier.AsObject
  }
}

export class UpdateCourierRequest extends jspb.Message {
  getId(): string
  setId(value: string): UpdateCourierRequest
  getRequestedby(): string
  setRequestedby(value: string): UpdateCourierRequest
  getPostalcode(): string
  setPostalcode(value: string): UpdateCourierRequest
  getCountry(): string
  setCountry(value: string): UpdateCourierRequest
  getLongitude(): number
  setLongitude(value: number): UpdateCourierRequest
  getLatitude(): number
  setLatitude(value: number): UpdateCourierRequest
  getStreet(): string
  setStreet(value: string): UpdateCourierRequest
  getCity(): string
  setCity(value: string): UpdateCourierRequest
  getState(): string
  setState(value: string): UpdateCourierRequest
  getHeight(): number
  setHeight(value: number): UpdateCourierRequest
  getWidth(): number
  setWidth(value: number): UpdateCourierRequest
  getDepth(): number
  setDepth(value: number): UpdateCourierRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): UpdateCourierRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: UpdateCourierRequest
  ): UpdateCourierRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: UpdateCourierRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): UpdateCourierRequest
  static deserializeBinaryFromReader(
    message: UpdateCourierRequest,
    reader: jspb.BinaryReader
  ): UpdateCourierRequest
}

export namespace UpdateCourierRequest {
  export type AsObject = {
    id: string
    requestedby: string
    postalcode: string
    country: string
    longitude: number
    latitude: number
    street: string
    city: string
    state: string
    height: number
    width: number
    depth: number
  }
}

export class UpdateCourierResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): UpdateCourierResponse

  hasCourier(): boolean
  clearCourier(): void
  getCourier(): Courier | undefined
  setCourier(value?: Courier): UpdateCourierResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): UpdateCourierResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: UpdateCourierResponse
  ): UpdateCourierResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: UpdateCourierResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): UpdateCourierResponse
  static deserializeBinaryFromReader(
    message: UpdateCourierResponse,
    reader: jspb.BinaryReader
  ): UpdateCourierResponse
}

export namespace UpdateCourierResponse {
  export type AsObject = {
    ok: boolean
    courier?: Courier.AsObject
  }
}

export class GetCourierRequest extends jspb.Message {
  getId(): string
  setId(value: string): GetCourierRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetCourierRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetCourierRequest
  ): GetCourierRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GetCourierRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetCourierRequest
  static deserializeBinaryFromReader(
    message: GetCourierRequest,
    reader: jspb.BinaryReader
  ): GetCourierRequest
}

export namespace GetCourierRequest {
  export type AsObject = {
    id: string
  }
}

export class GetCourierResponse extends jspb.Message {
  hasCourier(): boolean
  clearCourier(): void
  getCourier(): Courier | undefined
  setCourier(value?: Courier): GetCourierResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): GetCourierResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: GetCourierResponse
  ): GetCourierResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: GetCourierResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): GetCourierResponse
  static deserializeBinaryFromReader(
    message: GetCourierResponse,
    reader: jspb.BinaryReader
  ): GetCourierResponse
}

export namespace GetCourierResponse {
  export type AsObject = {
    courier?: Courier.AsObject
  }
}

export class SearchCouriersRequest extends jspb.Message {
  getOrg(): string
  setOrg(value: string): SearchCouriersRequest
  getPostalcode(): string
  setPostalcode(value: string): SearchCouriersRequest
  getCountry(): string
  setCountry(value: string): SearchCouriersRequest
  getLongitude(): number
  setLongitude(value: number): SearchCouriersRequest
  getLatitude(): number
  setLatitude(value: number): SearchCouriersRequest
  getDistance(): number
  setDistance(value: number): SearchCouriersRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SearchCouriersRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SearchCouriersRequest
  ): SearchCouriersRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: SearchCouriersRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): SearchCouriersRequest
  static deserializeBinaryFromReader(
    message: SearchCouriersRequest,
    reader: jspb.BinaryReader
  ): SearchCouriersRequest
}

export namespace SearchCouriersRequest {
  export type AsObject = {
    org: string
    postalcode: string
    country: string
    longitude: number
    latitude: number
    distance: number
  }
}

export class SearchCouriersResponse extends jspb.Message {
  clearCouriersList(): void
  getCouriersList(): Array<CourierGeo>
  setCouriersList(value: Array<CourierGeo>): SearchCouriersResponse
  addCouriers(value?: CourierGeo, index?: number): CourierGeo
  getLongitude(): number
  setLongitude(value: number): SearchCouriersResponse
  getLatitude(): number
  setLatitude(value: number): SearchCouriersResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): SearchCouriersResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: SearchCouriersResponse
  ): SearchCouriersResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: SearchCouriersResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): SearchCouriersResponse
  static deserializeBinaryFromReader(
    message: SearchCouriersResponse,
    reader: jspb.BinaryReader
  ): SearchCouriersResponse
}

export namespace SearchCouriersResponse {
  export type AsObject = {
    couriersList: Array<CourierGeo.AsObject>
    longitude: number
    latitude: number
  }
}

export class DeleteCourierRequest extends jspb.Message {
  getId(): string
  setId(value: string): DeleteCourierRequest

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteCourierRequest.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DeleteCourierRequest
  ): DeleteCourierRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: DeleteCourierRequest,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): DeleteCourierRequest
  static deserializeBinaryFromReader(
    message: DeleteCourierRequest,
    reader: jspb.BinaryReader
  ): DeleteCourierRequest
}

export namespace DeleteCourierRequest {
  export type AsObject = {
    id: string
  }
}

export class DeleteResponse extends jspb.Message {
  getOk(): boolean
  setOk(value: boolean): DeleteResponse

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): DeleteResponse.AsObject
  static toObject(
    includeInstance: boolean,
    msg: DeleteResponse
  ): DeleteResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
  }
  static serializeBinaryToWriter(
    message: DeleteResponse,
    writer: jspb.BinaryWriter
  ): void
  static deserializeBinary(bytes: Uint8Array): DeleteResponse
  static deserializeBinaryFromReader(
    message: DeleteResponse,
    reader: jspb.BinaryReader
  ): DeleteResponse
}

export namespace DeleteResponse {
  export type AsObject = {
    ok: boolean
  }
}
