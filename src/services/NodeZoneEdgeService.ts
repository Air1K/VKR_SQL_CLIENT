import $api from "../http";
import axios, {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {Graph} from "../models/Graph";
import {SizeZon} from "../models/SizeZon";
import {Edge} from "../models/Edge";
export  default class NodeZoneEdgeService {
    static async addNodeZoneEdge(nodes: Graph[], zone: SizeZon[], matrix, edge: Edge[]): Promise<AxiosResponse> {
        console.log(nodes);
        return $api.post<AuthResponse>('/node-zone-edge/add', {nodes, zone, matrix, edge})
    }
    static async getNodeZoneEdge(stockId: number): Promise<AxiosResponse> {
        return $api.post<AuthResponse>('/node-zone-edge/get', {stockId})
    }

    static async postImg(img, stock){
        console.log(stock)
        const formData = new FormData();

        formData.append('stokID', stock);
        formData.append('file', img)
        console.log(formData)
        return  $api.post('/node-zone-edge/addImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }
}