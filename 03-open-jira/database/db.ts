import mongoose from "mongoose";

const mongooConection = {
    isConnected: 0
}


export const connect = async () => {

    if (mongooConection.isConnected) {
        console.log('ya estas conectado');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConection.isConnected = mongoose.connections[0].readyState;

        if (mongooConection.isConnected === 1) {
            console.log('usando conexion anterior');
            return;

        }
        await mongoose.disconnect();
    }

    await mongoose.connect('')
    mongooConection.isConnected = 1;
}

export const disconnect = async () => {

    if (mongooConection.isConnected) return;

    await mongoose.disconnect();
}