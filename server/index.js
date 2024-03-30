import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/auth-routes.js";
import managementRoute from "./router/management-route.js";
import { sequelizeExtranet} from "./config/db-connect.js";
import cookieParser from "cookie-parser";
import {errorMiddlewares} from "./middlewares/error-middlewares.js";
import * as http from "http";
import ApiError from "./exceptions/api-error.js";
import statisticRouter from "./router/statistic-route.js";
import technicalSupportRoute from "./router/technical_support-route.js";
import contractRouter from "./router/contract-route.js";
import accountantRouter from "./router/accountant-route.js";
import settingPageRouter from "./router/setting-page-route.js";

dotenv.config();

const corsOptions = {
    credentials: true,
    origin: process.env.API_CLIENT
};


const app = express();
// Обслуживание статических файлов React
app.use('/static', express.static( 'client/public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/', router);
app.use('/management', managementRoute);
app.use('/edit_object', managementRoute);
app.use('/edit_number', managementRoute);
app.use('/statistic', statisticRouter);
app.use('/technical_support', managementRoute);
app.use('/contract', contractRouter);
app.use('/accountant', accountantRouter);
app.use('/setting_page', settingPageRouter);
app.use(ApiError)
app.use(errorMiddlewares)

const server = http.createServer(app);
server.timeout = 12000000;
const PORT = process.env.PORT || 5001;


// Запускаем сервер
const start = async () => {
    try {
        await sequelizeExtranet.sync();
        server.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();