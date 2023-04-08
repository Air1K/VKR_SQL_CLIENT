import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {Graph} from "../models/Graph";
import {SizeZon} from "../models/SizeZon";
import {Edge} from "../models/Edge";
export  default class NodeZoneEdgeService {
    static async addNodeZoneEdge(nodes: Graph[], zone: SizeZon[], matrix, edge: Edge[]): Promise<AxiosResponse> {
        console.log(nodes);
        return $api.post<AuthResponse>('/node-zone-edge/add', {nodes, zone, matrix, edge})
    }
}