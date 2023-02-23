import { AppError } from "../../errors/appError"
import { IUserUpdateRequest } from "../../interfaces/user.interface"
import { userRepository } from "../../utils/repositories/repositories"
import { hash } from "bcryptjs"

const updateUserService = async (userId: string , data: IUserUpdateRequest) => {
    const findUser = await userRepository.findOneBy({
        id:userId
    });

    if(!findUser){
        throw new AppError(404,"Usuário não encontrado");
    }
    
    let cryptPassword = null;
    
    if(data.password){cryptPassword = await hash(data.password!,10)};

    const updateObject: IUserUpdateRequest = {
        name: data.name || findUser.name,
        password: cryptPassword || findUser.password,
        email: data.email || findUser.email,
        img: data.img || findUser.img,
        tel: data.tel || findUser.tel,
        city: data.city || findUser.city,
        isAthlete: data.isAthlete || findUser.isAthlete,
        athlete: data.athlete || findUser.athlete
    };

    await userRepository.update({id:userId},updateObject);

    return updateObject;
}

export default updateUserService