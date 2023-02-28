import { AppError } from "../../errors/appError"
import { publisRepository } from "../../utils/repositories/repositories"

const deletePublisService = async (publiId:string) => {
    const findPubli = await publisRepository.findOneBy({
        id:publiId
    })

    if(!findPubli){
        throw new AppError(404,"Publi Não Encontrada")
    }

    await publisRepository.delete({id:findPubli.id})
}

export default deletePublisService