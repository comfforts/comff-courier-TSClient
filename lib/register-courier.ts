import { AddCourierResponse } from './proto/_gen/courier_pb'
import courierClient from './client'
import {
  AddCourierParams,
  CourierResponse,
  mapToAddCourierRequest,
  mapCourierToICourier
} from './index'

export async function registerCourier(
  cr: AddCourierParams
): Promise<CourierResponse> {
  return await new Promise<CourierResponse>((resolve, reject) => {
    const asReq = mapToAddCourierRequest(cr)
    try {
      courierClient.registerCourier(asReq, (err, res: AddCourierResponse) => {
        if (err) {
          console.error('registerCourier() - request error: ', { err })
          resolve({ error: err })
        } else {
          const courier = res.getCourier()
          if (courier) {
            resolve({ courier: mapCourierToICourier(courier) })
          } else {
            const err = new Error(`error registering new courier`)
            console.error(
              'registerCourier() - error registering new courier: ',
              { err }
            )
            resolve({ error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('registerCourier() - system error: ', { err })
      resolve({ error: err as Error })
    }
  })
}
