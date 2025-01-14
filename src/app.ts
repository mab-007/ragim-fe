import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import router from "./routes/index";
import { Utils } from "./utils/utils";
import bodyParser from "body-parser";

const app = express();



// All essential function need before initializing server is included here
async function initServer() {
    try {
        console.log('Database connected');
        await Utils.mountDataBase();
    } catch (e){
        console.log('Error in connecting database' + e);
    }
}

initServer();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(json());
app.use(helmet());
app.use(router);

export default app;
