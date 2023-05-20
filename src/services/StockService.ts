import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";


export  default class StockService {
    static async fetchStock(): Promise<AxiosResponse> {
        return $api.get<AuthResponse>('/stock/get')
    }

    static async fetchStockPost(name: string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/stock/add', {name})
    }

    static async fetchZonePost(name: string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/directory/type-zone', {name})
    }

    static async fetchUnitsPost(name: string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/directory/units', {name})
    }
    static async fetchApprovalPost(name: string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/directory/approval', {name})
    }

    static async fetchEditApprovalPost(name: string, name_new: string): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/directory/approval/edit', {name, name_new})
    }
}