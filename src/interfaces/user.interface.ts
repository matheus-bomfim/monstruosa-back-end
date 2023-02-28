export interface IUserRequest{
    name: string;
    password: string;
    email: string;
    img: string;
    tel: string;
    city: string;
    isAdm: boolean;
    isAthlete: boolean;
    athlete: string;
}

export interface IUserUpdateRequest{
    name?: string;
    password?: string;
    email?: string;
    img?: string;
    tel?: string;
    city?: string;
    isAdm?: boolean;
    isAthlete?: boolean;
    athlete?: string;
}

export interface IUser{
    id: string;
    name: string;
    password: string;
    email: string;
    img: string;
    tel: string;
    city: string;
    isAdm: boolean;
    isAthlete: boolean;
    athlete: string;
    created_at: Date;
}

export interface IUserAuth{
    id: string;
};

export interface ILogin{
    email: string;
    password: string;
};