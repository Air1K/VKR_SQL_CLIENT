import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {Route} from "../models/Route";


export  default class RouteService {
    // static async fetchStock(): Promise<AxiosResponse> {
    //     return $api.get<AuthResponse>('/stock/get')
    // }

    static async fetchRoutePost(route: Route, routeVariants,graph, matrix, id_stock: number): Promise<AxiosResponse> {
        console.log(route);
        return $api.post<AuthResponse>('/stock/add/route', {route, routeVariants,graph,matrix, id_stock})
    }

}