import {
  GetCourierRequest,
  type GetCourierResponse
} from './proto/_gen/courier_pb'
import courierClient from './client'
import { type CourierResponse, mapCourierToICourier } from './index'

export async function getCourier(id: string): Promise<CourierResponse> {
  return await new Promise<CourierResponse>((resolve, reject) => {
    const gsReq = new GetCourierRequest()
    gsReq.setId(id)

    try {
      courierClient.getCourier(gsReq, (err, res: GetCourierResponse) => {
        if (err) {
          console.error('getCourier() - request error: ', { err, id })
          resolve({ error: err })
        } else {
          const courier = res.getCourier()
          if (courier) {
            resolve({ courier: mapCourierToICourier(courier) })
          } else {
            const err = new Error(`error getting courier`)
            console.error('getCourier() - error getting courier: ', { err, id })
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('getCourier() - system error: ', { err, id })
      resolve({ error: err as Error })
    }
  })
}
