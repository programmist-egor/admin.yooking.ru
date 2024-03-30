import ContractExtranet from "../models/contract-model.js";


class ContractService {
    async getDataContract() {
        const result = await ContractExtranet.findAll();
        if (result) {
            return result
        }
    }

    async updateContract(hotelId, contractData) {
        const result = await ContractExtranet.update(contractData, {where: {hotelId: hotelId}});
        return result
    }

    async deleteContract(hotelId) {
        const result = await ContractExtranet.destroy({where: {hotelId: hotelId}});
        return result
    }
}

export default new ContractService()