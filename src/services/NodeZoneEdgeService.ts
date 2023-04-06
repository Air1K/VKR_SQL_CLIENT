import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {Graph} from "../models/Graph";
import {SizeZon} from "../models/SizeZon";
export  default class NodeZoneEdgeService {
    static async addNodeZoneEdge(nodes: Graph[], zone: SizeZon[], matrix): Promise<AxiosResponse> {
        console.log(nodes);
        return $api.post<AuthResponse>('/node-zone-edge/add', {nodes, zone, matrix})
    }
}