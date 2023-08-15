import {
  SearchCouriersRequest,
  SearchCouriersResponse
} from './proto/_gen/courier_pb'
import client from './client'
import {
  CourierSearchParams,
  CourierSearchResponse,
  mapCourierGeosToICourierGeos,
  mapPointtoIGeoPoint
} from './index'

export async function searchCourier(
  req: CourierSearchParams
): Promise<CourierSearchResponse> {
  return await new Promise<CourierSearchResponse>((resolve, reject) => {
    const ssReq = new SearchCouriersRequest()
    ssReq.setOrg(req.org || '')
    ssReq.setPostalcode(req.postalCode || '')
    ssReq.setLatitude(req.latitude || 0)
    ssReq.setLongitude(req.longitude || 0)
    ssReq.setDistance(req.distance)

    try {
      client.searchCouriers(ssReq, (err, res: SearchCouriersResponse) => {
        if (err) {
          console.error('searchCourier() - request error, %o', { err })
          resolve({ error: err })
        } else {
          const couriers = res.getCouriersList()
          if (couriers && couriers.length > 0) {
            resolve({
              couriers: mapCourierGeosToICourierGeos(couriers),
              geo: mapPointtoIGeoPoint(res.getLatitude(), res.getLongitude())
            })
          } else {
            const err = new Error(`no courier found`)
            console.error('searchCourier() - no courier found, %o', { err })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('searchCourier() - system error, %o', { err })
      resolve({ error: err as Error })
    }
  })
}
