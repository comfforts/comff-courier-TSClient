import { Courier, CourierGeo, AddCourierRequest, UpdateCourierRequest } from './proto/_gen/courier_pb';
import type { IAddress, OkResponse } from '@hankgalt/comff-geo-tsclient/lib';
import type { IGeoPoint } from '@hankgalt/comff-shops-tsclient/lib';
export interface ShopsServiceClient {
    registerCourier(cr: AddCourierParams): Promise<CourierResponse>;
    getCourier(id: string): Promise<CourierResponse>;
    searchCourier(req: CourierSearchParams): Promise<CourierSearchResponse>;
    updateCourier(st: UpdateCourierParams): Promise<CourierResponse>;
    deleteCourier: (id: string) => Promise<OkResponse>;
    closeClient(): void;
}
export interface Size {
    height: number;
    width: number;
    depth: number;
}
interface ICourier extends IGeoPoint, Size {
    id: string;
    name: string;
    org: string;
    address?: IAddress;
}
interface ICourierGeo {
    courier: ICourier;
    distance: number;
}
export interface AddCourierParams extends Size {
    requestedBy: string;
    org: string;
    name: string;
    latitude: number;
    longitude: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}
export interface UpdateCourierParams extends Size {
    id: string;
    latitude: number;
    longitude: number;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    requestedBy: string;
}
export interface CourierSearchParams {
    org?: string;
    postalCode?: string;
    country: string;
    distance: number;
    latitude?: number;
    longitude?: number;
}
export type CourierResponse = {
    courier?: ICourier;
    error?: Error;
};
export type CouriersResponse = {
    couriers?: ICourier[];
    error?: Error;
};
export type CourierSearchResponse = {
    couriers?: ICourierGeo[];
    geo?: IGeoPoint;
    error?: Error;
};
export declare const mapToAddCourierRequest: (st: AddCourierParams) => AddCourierRequest;
export declare const mapToUpdateCourierRequest: (st: UpdateCourierParams) => UpdateCourierRequest;
export declare const mapCourierToICourier: (courier: Courier) => ICourier;
export declare const mapCourierGeosToICourierGeos: (crGeos: CourierGeo[]) => ICourierGeo[];
export declare const mapCourierGeoToICourierGeo: (crGeo: CourierGeo) => ICourierGeo | undefined;
export declare const mapPointtoIGeoPoint: (lat: number, long: number) => IGeoPoint;
export {};
