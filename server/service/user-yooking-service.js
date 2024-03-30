import ApiError from "../exceptions/api-error.js";
import UsersYooking from "../models/users-yooking-model.js";


class UserYookingService {
    async getAllUsersYooking() {
       return await UsersYooking.findAll();
    }
    async updateUserYooking(userId, dataUserYooking) {
        const [updatedRows] = await UsersYooking.update(dataUserYooking, { where: { id: userId } });
        if (updatedRows === 0) {
            throw new ApiError.BadRequest("Нет такого пользователя!");
        }
    }
    async deleteUserYooking(userId) {
        await UsersYooking.destroy( { where: { id: userId } });
    }
}
export default new UserYookingService();