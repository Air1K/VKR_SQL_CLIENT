import solution from "./hooks-route";
import {Route} from "../../models/Route";

const searchRouteDb = (value, graph, matrix, route: Route[])=> {

    const massBoundary = []
    for(let i = 0; i < graph.length; i++){
        if(graph[i].num === route[value].A || graph[i].num === route[value].B){
            massBoundary.push(i)
        }
        if(massBoundary.length ===2) break
    }
    if(massBoundary.length<2) return;


    let massNodesRouteIndex = []
    for(let i = 0; i < route[value].variants_route.length; i++){
        massNodesRouteIndex[i] = [];
        for(let j = 0; j < route[value].variants_route[i].interval_node.length; j++){
            for(let o = 0; o < graph.length; o++){
                console.log(graph[o].num, "----", route[value].variants_route[i].interval_node[j])
                if(graph[o].num === route[value].variants_route[i].interval_node[j]){
                    console.log(i, j, o)
                    massNodesRouteIndex[i].push(o)
                    break;
                }
            }
        }
    }


    const routeVariants = solution(graph, matrix, massBoundary[0], massBoundary[1], null);

    for(let i = 0; i < massNodesRouteIndex.length; i++){

        for(let j = 0; j < routeVariants.length; j++){
            if(massNodesRouteIndex[i].length !==routeVariants[j].length) continue;

            let kit = 0;
            for(let o = 0; o < massNodesRouteIndex[i].length; o++){
                for(let l = 0; l < routeVariants[j].length; l++){
                    if(massNodesRouteIndex[i][o] === routeVariants[j][l]){
                        kit++;
                        break;
                    }
                }
            }
            if(kit === routeVariants[j].length){
                massNodesRouteIndex[i] = routeVariants[j];
                break;
            }
        }
    }

    return massNodesRouteIndex;

}



export default searchRouteDb