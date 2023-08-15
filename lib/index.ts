import {
  Courier,
  CourierGeo,
  AddCourierRequest,
  UpdateCourierRequest
} from './proto/_gen/courier_pb'
import type { IAddress, OkResponse } from '@hankgalt/comff-geo-tsclient/lib'
import type { IGeoPoint } from '@hankgalt/comff-shops-tsclient/lib'

export interface ShopsServiceClient {
  registerCourier(cr: AddCourierParams): Promise<CourierResponse>
  getCourier(id: string): Promise<CourierResponse>
  searchCourier(req: CourierSearchParams): Promise<CourierSearchResponse>
  updateCourier(st: UpdateCourierParams): Promise<CourierResponse>
  deleteCourier: (id: string) => Promise<OkResponse>
  closeClient(): void
}

export interface Size {
  height: number
  width: number
  depth: number
}

interface ICourier extends IGeoPoint, Size {
  id: string
  name: string
  org: string
  address?: IAddress
}

interface ICourierGeo {
  courier: ICourier
  distance: number
}

export interface AddCourierParams extends Size {
  requestedBy: string
  org: string
  name: string
  latitude: number
  longitude: number
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface UpdateCourierParams extends Size {
  id: string
  latitude: number
  longitude: number
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  requestedBy: string
}

export interface CourierSearchParams {
  org?: string
  postalCode?: string
  country: string
  distance: number
  latitude?: number
  longitude?: number
}

export type CourierResponse = {
  courier?: ICourier
  error?: Error
}

export type CouriersResponse = {
  couriers?: ICourier[]
  error?: Error
}

export type CourierSearchResponse = {
  couriers?: ICourierGeo[]
  geo?: IGeoPoint
  error?: Error
}

export const mapToAddCourierRequest = (
  st: AddCourierParams
): AddCourierRequest => {
  const asReq = new AddCourierRequest()

  asReq.setRequestedby(st.requestedBy)
  asReq.setOrg(st.org)
  asReq.setName(st.name)
  asReq.setStreet(st.street || '')
  asReq.setCity(st.city || '')
  asReq.setPostalcode(st.postalCode || '')
  asReq.setState(st.state || '')
  asReq.setCountry(st.country || '')
  asReq.setLatitude(st.latitude)
  asReq.setLongitude(st.longitude)
  asReq.setHeight(st.height)
  asReq.setWidth(st.width)
  asReq.setDepth(st.depth)

  return asReq
}

export const mapToUpdateCourierRequest = (
  st: UpdateCourierParams
): UpdateCourierRequest => {
  const req = new UpdateCourierRequest()

  req.setId(st.id)
  req.setRequestedby(st.requestedBy)
  req.setStreet(st.street || '')
  req.setCity(st.city || '')
  req.setPostalcode(st.postalCode || '')
  req.setState(st.state || '')
  req.setCountry(st.country || '')
  req.setLatitude(st.latitude)
  req.setLongitude(st.longitude)
  req.setHeight(st.height)
  req.setWidth(st.width)
  req.setDepth(st.depth)

  return req
}

export const mapCourierToICourier = (courier: Courier): ICourier => {
  const cap = courier.getCapacity()

  return {
    id: courier.getId(),
    org: courier.getOrg(),
    name: courier.getName(),
    latitude: courier.getLatitude(),
    longitude: courier.getLongitude(),
    address: {
      id: courier.getAddressid(),
      postalCode: '',
      country: ''
    },
    height: cap?.getHeight() || 0,
    width: cap?.getWidth() || 0,
    depth: cap?.getDepth() || 0
  }
}

export const mapCourierGeosToICourierGeos = (
  crGeos: CourierGeo[]
): ICourierGeo[] => {
  const icrGeos: ICourierGeo[] = []

  crGeos.forEach((cr) => {
    const isg = mapCourierGeoToICourierGeo(cr)
    if (isg) {
      icrGeos.push(isg)
    }
  })

  return icrGeos.sort((a, b) => a.distance - b.distance)
}

export const mapCourierGeoToICourierGeo = (
  crGeo: CourierGeo
): ICourierGeo | undefined => {
  const cr = crGeo.getCourier()
  if (cr) {
    return {
      courier: mapCourierToICourier(cr),
      distance: crGeo.getDistance()
    }
  }
}

export const mapPointtoIGeoPoint = (lat: number, long: number): IGeoPoint => {
  return {
    latitude: lat,
    longitude: long
  } as IGeoPoint
}
