
const searchRouteDb = (graph, matrix: [][], a, b, rout)=> {

    // console.log(rout, graph, matrix)
    const stack = [];
    const mass_rout = [];
    const graphFlag = [];
    for (let i = 0; i < graph.length; i++) {
        graphFlag[i] = []
    }

    stack.push(a)
    while (stack[0]) {
        for (let i = 0; i < matrix.length; i++) {

            if ((matrix[stack[stack.length - 1]][i] < 999) && ((stack[stack.length - 1] !== i))) {

                let bool = true
                for (let j = 0; j < stack.length; j++) {
                    if (stack[j] === i) {
                        bool = false
                    }
                }
                if (!bool) {
                    if (i < matrix.length) {
                        continue;
                    } else {
                        graphFlag[stack[stack.length - 1]] = []
                        // console.log("delete - ", this.stack[this.stack.length - 1]);
                        stack.pop();
                        i = -1
                        continue;
                    }
                }


                // if( bool){
                let bool1 = true
                for (let j = 0; j < graphFlag[stack[stack.length - 1]].length; j++) {

                    if (graphFlag[stack[stack.length - 1]][j] === i) {
                        bool1 = false
                    }
                }
                if (!bool1) {
                    if (i < matrix.length) {
                        continue;
                    } else {
                        graphFlag[stack[stack.length - 1]] = []
                        stack.pop();
                        i = -1
                        continue;
                    }
                }

                stack.push(i)
                graphFlag[stack[stack.length - 2]].push(i)
                if (stack[stack.length - 1] === b) {
                    mass_rout.push(stack.slice());
                    graphFlag[stack[stack.length - 1]] = []
                    stack.pop();
                }
                i = -1
                // }

            }
        }
        graphFlag[stack[stack.length - 1]] = []
        // console.log("delete - ", this.stack[this.stack.length - 1]);
        stack.pop();
    }
    for(let i =0; i < mass_rout.length; i++){
        if(mass_rout[i].length !== rout.length) continue
        let search_ = 0
        for(let j =0; j < mass_rout[i].length; j++){

            for(let a =0; a < rout.length; a++){
                if(graph[mass_rout[i][j]].num === rout[a]){
                    search_++;
                }
            }
        }
        if(search_ === rout.length){
            console.log(mass_rout[i])
            return mass_rout[i]
        }
    }



}


export default searchRouteDb