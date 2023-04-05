import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
export  default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        console.log(email, password);
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(name: string, email: string, username: string, password: string, code: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {name, email, username, password, code})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}