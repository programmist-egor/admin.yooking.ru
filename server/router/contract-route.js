import RouterExp from "express";
import {authMiddleware} from "../middlewares/auth-middleware.js";
import ContractController from "../controllers/contract-controller.js";
const Router = RouterExp.Router
const contractRouter = new Router()

contractRouter.get('/', authMiddleware, ContractController.getDataContract);
contractRouter.put('/:hotelId', authMiddleware, ContractController.updateContract);
contractRouter.delete('/:hotelId', authMiddleware, ContractController.deleteContract);


export default contractRouter;


