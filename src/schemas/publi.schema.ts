import * as yup from "yup"
import { IPublisRequest } from "../interfaces/publis.interface"
const publiSchema: yup.ObjectSchema<IPublisRequest> = Object(yup.object().shape({
    text: yup.string().required("Campo Obrigatório"),
    img: yup.array().of(yup.string()).min(1,"Mínimo de 1 Imagem"),
}));

export default publiSchema