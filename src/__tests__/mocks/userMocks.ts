import { ILogin, IUserRequest, IUserUpdateRequest } from "../../interfaces/user.interface";

export const newUserMocks: IUserRequest = {
    name:"James Bond",
	password:"atleticA1234",
	tel:"12345888",
	email:"diogo12@mail.com",
	city: "Rio de Janeiro",
	isAdm: false,
	img: "www.img.com",
	isAthlete: false
}

export const newUserAdmMocks: IUserRequest = {
    name:"Diogo Defante",
	password:"atleticA1234",
	tel:"12345888",
	email:"diogodefante@mail.com",
	city: "São Paulo",
	isAdm: true,
	img: "www.img12.com",
	isAthlete: false
}

export const newUserAthleteMocks: IUserRequest = {
    name:"Nick Lauda",
	password:"atleticA1234",
	tel:"12345888",
	email:"nicklauda@mail.com",
	city: "New York",
	isAdm: false,
	img: "www.img123.com",
	isAthlete: true,
    athlete: "Vôlei"
}

export const updateUserMocks: IUserUpdateRequest = {
    name:"Ayrton Senna"
}

export const loginUserMocks: ILogin = {
	email:"diogo12@mail.com",
	password:"atleticA1234"
}
export const loginUserAdmMocks: ILogin = {
	email:"diogodefante@mail.com",
	password:"atleticA1234"
}