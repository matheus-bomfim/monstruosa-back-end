import { publisRepository } from "../../utils/repositories/repositories"

const listPublisService = async () => {
    return await publisRepository.find()
}

export default listPublisService