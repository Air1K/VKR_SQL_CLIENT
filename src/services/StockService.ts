import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";


export  default class StockService {
    static async fetchStock(): Promise<AxiosResponse> {
        return $api.get<AuthResponse>('/stock/get')
    }

    static async fetchStockPost(name: string): Promise<AxiosResponse> {
        console.log(name);
        return $api.post<AuthResponse>('/stock/add', {name})
    }

    static async fetchZonePost(name: string): Promise<AxiosResponse> {
        console.log(name);
        return $api.post<AuthResponse>('/directory/type-zone', {name})
    }

    static async fetchUnitsPost(name: string): Promise<AxiosResponse> {
        console.log(name);
        return $api.post<AuthResponse>('/directory/units', {name})
    }
}