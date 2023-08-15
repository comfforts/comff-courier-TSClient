import { AddCourierRequest, UpdateCourierRequest } from './proto/_gen/courier_pb';
export var mapToAddCourierRequest = function (st) {
    var asReq = new AddCourierRequest();
    asReq.setRequestedby(st.requestedBy);
    asReq.setOrg(st.org);
    asReq.setName(st.name);
    asReq.setStreet(st.street || '');
    asReq.setCity(st.city || '');
    asReq.setPostalcode(st.postalCode || '');
    asReq.setState(st.state || '');
    asReq.setCountry(st.country || '');
    asReq.setLatitude(st.latitude);
    asReq.setLongitude(st.longitude);
    asReq.setHeight(st.height);
    asReq.setWidth(st.width);
    asReq.setDepth(st.depth);
    return asReq;
};
export var mapToUpdateCourierRequest = function (st) {
    var req = new UpdateCourierRequest();
    req.setId(st.id);
    req.setRequestedby(st.requestedBy);
    req.setStreet(st.street || '');
    req.setCity(st.city || '');
    req.setPostalcode(st.postalCode || '');
    req.setState(st.state || '');
    req.setCountry(st.country || '');
    req.setLatitude(st.latitude);
    req.setLongitude(st.longitude);
    req.setHeight(st.height);
    req.setWidth(st.width);
    req.setDepth(st.depth);
    return req;
};
export var mapCourierToICourier = function (courier) {
    var cap = courier.getCapacity();
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
        height: (cap === null || cap === void 0 ? void 0 : cap.getHeight()) || 0,
        width: (cap === null || cap === void 0 ? void 0 : cap.getWidth()) || 0,
        depth: (cap === null || cap === void 0 ? void 0 : cap.getDepth()) || 0
    };
};
export var mapCourierGeosToICourierGeos = function (crGeos) {
    var icrGeos = [];
    crGeos.forEach(function (cr) {
        var isg = mapCourierGeoToICourierGeo(cr);
        if (isg) {
            icrGeos.push(isg);
        }
    });
    return icrGeos.sort(function (a, b) { return a.distance - b.distance; });
};
export var mapCourierGeoToICourierGeo = function (crGeo) {
    var cr = crGeo.getCourier();
    if (cr) {
        return {
            courier: mapCourierToICourier(cr),
            distance: crGeo.getDistance()
        };
    }
};
export var mapPointtoIGeoPoint = function (lat, long) {
    return {
        latitude: lat,
        longitude: long
    };
};
