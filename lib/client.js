import * as fs from 'fs';
import * as path from 'path';
import { CouriersClient } from './proto/_gen/courier_grpc_pb';
import { getCredentials, commonInterceptor } from './utils';
export function getChannelCredentials() {
    var rootCert = fs.readFileSync(path.resolve("".concat(process.env.CERTS_PATH, "/ca.pem")));
    var clientCert = fs.readFileSync(path.resolve("".concat(process.env.CERTS_PATH, "/courier-client.pem")));
    var clientKey = fs.readFileSync(path.resolve("".concat(process.env.CERTS_PATH, "/courier-client-key.pem")));
    return getCredentials(rootCert, clientKey, clientCert);
}
console.log('Courier service host: ', process.env.GRPC_COURIER);
var courierClient = new CouriersClient(process.env.GRPC_COURIER || '', getChannelCredentials(), { interceptors: [commonInterceptor] });
export default courierClient;
