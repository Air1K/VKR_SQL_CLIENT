import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";


export  default class RouteService {
    // static async fetchStock(): Promise<AxiosResponse> {
    //     return $api.get<AuthResponse>('/stock/get')
    // }

    static async fetchRoutePost(route, routeVariants,graph, matrix, id_stock: number): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/stock/add/route', {route, routeVariants,graph,matrix, id_stock})
    }

}