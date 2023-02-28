import { AppError } from "../../errors/appError"
import { IPublisUpdate } from "../../interfaces/publis.interface"
import { publisRepository } from "../../utils/repositories/repositories"

const updatePublisService = async (updatePublis:IPublisUpdate,publisId:string) => {
    const findPublis = await publisRepository.findOneBy({id:publisId});

    if(!findPublis){
        throw new AppError(404,"Publicação Não Encontrada")
    };

    const updatePubli = {
        text: updatePublis.text || findPublis.text,
        img: updatePublis.img || findPublis.img
    };

    await publisRepository.update({id:findPublis.id},updatePubli);

    return updatePubli;
}

export default updatePublisService;