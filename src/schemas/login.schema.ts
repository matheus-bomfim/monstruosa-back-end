import * as yup from "yup"
import { ILogin } from "../interfaces/user.interface"

const loginSchema: yup.ObjectSchema<ILogin> = Object(yup.object().shape({
    email: yup.string().email("Email Invalido").required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório")
}));

export default loginSchema