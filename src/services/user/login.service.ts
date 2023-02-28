import { AppError } from "../../errors/appError";
import { ILogin } from "../../interfaces/user.interface";
import { userRepository } from "../../utils/repositories/repositories";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const loginService = async (login:ILogin) => {
    const findUser = await userRepository.findOneBy({
        email: login.email
    });

    if(!findUser){
        throw new AppError(404,"Usúario ou Senha Incorretos")
    };

    const verifypassword = await bcrypt.compare(login.password,findUser.password);

    if(!verifypassword){
        throw new AppError(404,"Usúario ou Senha Incorretos")
    };

    const token = jwt.sign({id:findUser.id},process.env.SECRET_KEY!);

    return token;
}

export default loginService