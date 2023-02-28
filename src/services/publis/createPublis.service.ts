import { AppError } from "../../errors/appError";
import { IPublisRequest } from "../../interfaces/publis.interface";
import { publisRepository, userRepository } from "../../utils/repositories/repositories";

const createPublisService = async (publi:IPublisRequest,userId:string) => {
    const findUser = await userRepository.findOneBy({
        id:userId
    });
    
    if(!findUser){
        throw new AppError(404,"Usuário não encontrado")
    };
    
    const createPubli = publisRepository.create({...publi,user:findUser!});
    
    await publisRepository.save(createPubli);
    
    return createPubli;
}
export default createPublisService