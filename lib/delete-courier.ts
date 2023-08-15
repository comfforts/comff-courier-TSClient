import { DeleteResponse, DeleteCourierRequest } from './proto/_gen/courier_pb'
import courierClient from './client'
import { type OkResponse } from '@hankgalt/comff-geo-tsclient/lib'

export async function deleteCourier(id: string): Promise<OkResponse> {
  return await new Promise<OkResponse>((resolve, reject) => {
    const gsReq = new DeleteCourierRequest()
    gsReq.setId(id)

    try {
      courierClient.deleteCourier(gsReq, (err, res: DeleteResponse) => {
        if (err) {
          console.error('deleteCourier() - request error: ', { err, id })
          resolve({ ok: false, error: err })
        } else {
          const ok = res.getOk()
          if (ok) {
            resolve({ ok })
          } else {
            const err = new Error(`error deleting courier`)
            console.error('deleteCourier() - error deleting courier: ', {
              err,
              id
            })
            resolve({ ok: false, error: err })
          }
        }
      })
    } catch (err: any) {
      console.error('deleteCourier() - system error: ', { err, id })
      resolve({ ok: false, error: err as Error })
    }
  })
}
