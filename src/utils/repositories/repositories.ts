import AppDataSource from "../../data-source";
import { Publis } from "../../entities/publis.entity";
import { User } from "../../entities/user.entity";

export const userRepository = AppDataSource.getRepository(User);
export const publisRepository = AppDataSource.getRepository(Publis);