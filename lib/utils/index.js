import * as grpc from '@grpc/grpc-js';
export var getCredentials = function (rootCert, clientKey, clientCert) {
    return grpc.credentials.combineChannelCredentials(grpc.ChannelCredentials.createSsl(rootCert, clientKey, clientCert), grpc.credentials.createFromMetadataGenerator(function (args, callback) {
        var metadata = new grpc.Metadata();
        metadata.add('service-client', 'web-client');
        callback(null, metadata);
    }));
};
export var commonInterceptor = function (options, nextCall) {
    return new grpc.InterceptingCall(nextCall(options), {
        start: function (metadata, listener, next) {
            var newListener = {
                onReceiveMetadata: function (metadata, next) {
                    next(metadata);
                },
                onReceiveMessage: function (message, next) {
                    next(message);
                },
                onReceiveStatus: function (status, next) {
                    next(status);
                }
            };
            next(metadata, newListener);
        },
        sendMessage: function (message, next) {
            next(message);
        },
        halfClose: function (next) {
            next();
        },
        cancel: function (next) {
            next();
        }
    });
};
