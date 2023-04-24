
   const solution = (graph, matrix: [][], edge, a, b, optimalRoute)=> {
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
                            // console.log("delete - ", this.stack[this.stack.length - 1]);
                            stack.pop();
                            i = -1
                            continue;
                        }
                    }

                    stack.push(i)
                    graphFlag[stack[stack.length - 2]].push(i)
                    if (stack[stack.length - 1] === b) {

                        if(JSON.stringify(stack) !== JSON.stringify(optimalRoute)) mass_rout.push(stack.slice());
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
        console.log("Конец всех ввычислений")
        console.log(mass_rout)
       return mass_rout
    }


export default solution