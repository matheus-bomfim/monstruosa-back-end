import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError"
import { IUserRequest } from "../../interfaces/user.interface"
import { userRepository } from "../../utils/repositories/repositories"

const createUserService = async (user:IUserRequest) => {
    const findUser = await userRepository.findOneBy({email:user.email});
    
    if(findUser){
        throw new AppError(400,"Usuário já existente");
    };

    const cryptPassword = await hash(user.password,10)

    const createUser = userRepository.create({...user,password:cryptPassword});

    await userRepository.save(createUser);

    return createUser
}

export default createUserService