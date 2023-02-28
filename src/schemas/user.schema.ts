import * as yup from "yup"
import {IUserRequest} from "../interfaces/user.interface"

const userSchema: yup.ObjectSchema<IUserRequest> = Object(yup.object().shape({
    name: yup.string().min(3,"Mínimo de 3 Caracteres").required("Nome Obrigatório"),
    password: yup.string().matches(/^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/,"Senha deve conter no mínimo 8 caracteres e uma letra maíuscula").required("Senha Obrigatória"),
    email: yup.string().email("Email Invalido").required("Email Obrigatório"),
    img: yup.string(),
    tel: yup.string(),
    city: yup.string(),
    isAdm: yup.boolean().required("isAdm Obrigatório"),
    isAthlete: yup.boolean().required("isAthlete Obrigatório"),
    athlete: yup.string()
})
);

export default userSchema