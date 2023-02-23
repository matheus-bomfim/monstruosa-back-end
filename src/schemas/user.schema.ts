import * as yup from "yup"
import { ObjectSchema } from "yup"
import {IUserRequest} from "../interfaces/user.interface"

const userSchema: ObjectSchema<IUserRequest> = Object(yup.object().shape({
    name: yup.string().min(3,"Mínimo de 3 Caracteres").required("Campo Obrigatório"),
    password: yup.string().matches(/^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/,"Senha deve conter no mínimo 8 caracteres e uma letra maíuscula").required("Campo Obrigatório"),
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    img: yup.string(),
    tel: yup.string(),
    city: yup.string(),
    isAdm: yup.boolean()
})
);

export default userSchema