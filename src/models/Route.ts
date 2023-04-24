import {VariantsRoute} from "./VariantsRoute";

export class Route{
    id: number;
    name: string;
    A: string;
    B: string;
    variants_route: Array<VariantsRoute> = [];
    date: Date;
}