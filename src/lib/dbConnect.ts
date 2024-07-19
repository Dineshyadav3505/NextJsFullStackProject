import mongoose from "mongoose"

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to MongoDB")
        return
    }

    try {
        const Connection = await mongoose.connect(process.env.MONGODB_URI || "", {})
        connection.isConnected = Connection.connections[0].readyState
        console.log("Connected to MongoDB")

    } catch (error) {
        console.error("Failed to connect to MongoDB", error)
        process.exit(1)
    }
}

export default dbConnect;