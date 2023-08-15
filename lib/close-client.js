import courierClient from './client';
export var closeClient = function () {
    try {
        courierClient.close();
    }
    catch (err) {
        console.error('error closing courier client');
        return err;
    }
};
