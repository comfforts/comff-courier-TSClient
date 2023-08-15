import { UpdateCourierResponse } from './proto/_gen/courier_pb'
import client from './client'
import {
  UpdateCourierParams,
  CourierResponse,
  mapToUpdateCourierRequest,
  mapCourierToICourier
} from './index'

export async function updateCourier(
  st: UpdateCourierParams
): Promise<CourierResponse> {
  return await new Promise<CourierResponse>((resolve, reject) => {
    const usReq = mapToUpdateCourierRequest(st)
    try {
      client.updateCourier(usReq, (err, res: UpdateCourierResponse) => {
        if (err) {
          console.error('updateCourier() - request error: ', { err })
          resolve({ error: err })
        } else {
          const courier = res.getCourier()
          if (courier) {
            resolve({ courier: mapCourierToICourier(courier) })
          } else {
            const err = new Error(`error updating courier`)
            console.error('updateCourier() - error updating courier: ', { err })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('updateCourier() - system error: ', { err })
      resolve({ error: err as Error })
    }
  })
}
