import { Server } from "http";
import mongoose from "mongoose"
import app from "./app";
import dotenv from "dotenv";
dotenv.config();


let server: Server;

const PORT = 5000;

async function main() {
    try {
        // await mongoose.connect(`mongodb+srv://library_admin:vLcQZi3mluuI962F@cluster0.xd1znby.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0`);
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xd1znby.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("Mongoose is connected successfully");

        server = app.listen(PORT, () => {
            console.log(`Library management is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}


main();