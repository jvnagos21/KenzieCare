import React from "react";

export interface iChildren {
    children: React.ReactNode;
}


export interface iUserLoginResponse {
    accessToken: string;
    user: iUserLogin;
}

export interface iUserLogin {
    email: string;
    id: number;
    is_admin?: boolean;
}

export interface iUserRegisterResponse {
    accessToken: string;
    user: iUserRegister;
}

export interface iUserRegister {
    email: string;
    nome: string;
    foto: string;
    id: number;
}

export interface iUser {
    email: string;
    id: number;
}