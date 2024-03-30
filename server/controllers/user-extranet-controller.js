import UserExtranetService from "../service/user-extranet-service.js";
import ApiError from "../exceptions/api-error.js";

class UserExtranetController {
    async getAllUsersExtranet(req, res, next) {
        try {
            const data = await UserExtranetService.getAllUsersExtranet()
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async getUserExtranet(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await UserExtranetService.getUserExtranet(userId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async updateUserExtranet(req, res, next) {
        try {
            const userId = req.params.userId
            const {dataUserExtranet} = req.body
            if (!userId && !dataUserExtranet) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            await UserExtranetService.updateUserExtranet(userId, dataUserExtranet)
        } catch (error) {
            next(error);
        }
    }

    async deleteUserExtranet(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            await UserExtranetService.deleteUserExtranet(userId)
        } catch (error) {
            next(error);
        }
    }
}

export default new UserExtranetController()