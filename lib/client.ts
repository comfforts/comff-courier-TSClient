import * as grpc from '@grpc/grpc-js'
import * as fs from 'fs'
import * as path from 'path'
import { CouriersClient } from './proto/_gen/courier_grpc_pb'
import { getCredentials, commonInterceptor } from './utils'

export function getChannelCredentials(): grpc.ChannelCredentials {
  const rootCert = fs.readFileSync(
    path.resolve(`${process.env.CERTS_PATH}/ca.pem`)
  )
  const clientCert = fs.readFileSync(
    path.resolve(`${process.env.CERTS_PATH}/courier-client.pem`)
  )
  const clientKey = fs.readFileSync(
    path.resolve(`${process.env.CERTS_PATH}/courier-client-key.pem`)
  )

  return getCredentials(rootCert, clientKey, clientCert)
}

console.log('Courier service host: ', process.env.GRPC_COURIER)
const courierClient = new CouriersClient(
  process.env.GRPC_COURIER || '',
  getChannelCredentials(),
  { interceptors: [commonInterceptor] }
)

export default courierClient
