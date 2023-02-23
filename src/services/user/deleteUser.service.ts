import { AppError } from "../../errors/appError";
import { userRepository } from "../../utils/repositories/repositories"

const deleteUserService = async (userId: string) => {
    const findUser = userRepository.findOneBy({id:userId});
    
    if(!findUser){
        throw new AppError(404,"Usuário não encontrado")
    };
    
    await userRepository.delete({id:userId});
}

export default deleteUserService