import * as grpc from '@grpc/grpc-js';
import { CouriersClient } from './proto/_gen/courier_grpc_pb';
export declare function getChannelCredentials(): grpc.ChannelCredentials;
declare const courierClient: CouriersClient;
export default courierClient;
