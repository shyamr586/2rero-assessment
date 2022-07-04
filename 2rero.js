const { number } = require("prop-types");

function roadsAndLibraries(input){
    const splitString = input.split("\n");
    const numberOfQueries = splitString[0]
    
    var queryIndex = 1;
    let queriesFound = 1;
    var answer = []

    for (var i =0;i<numberOfQueries;i++){
        console.log("query index is: "+queryIndex)
        let query = splitString[queryIndex].split(" ");
    
        let n = parseInt(query[0]);
        let m = parseInt(query[1]);
        let cLib = parseInt(query[2]);
        let cRoad = parseInt(query[3]);
    
        if (cLib<cRoad){
            answer+=cLib*n+"\n";
            queryIndex+=m+1;
            continue;
        }
    
        let endIndex = m+parseInt(queryIndex);
        let cityMatrix = splitString.slice(queryIndex+1,endIndex+1);
            
        let found = [];
        let connections = {};
        for (var j = 0;j<cityMatrix.length;j++){
            let cities = cityMatrix[j].split(" ");
            let city1 = parseInt(cities[0]);
            let city2 = parseInt(cities[1]);
            
            if (found.includes(city1)){
                continue;
            }
            if (!connections[city1]){
                connections[city1] = [city2]
            }
            else{
                connections[city1].push(city2)
            }
    
            if (!connections[city2]){
                connections[city2] = [city1]
            }
            else{
                connections[city2].push(city1)
            }
            found.push(city1);
        }
        var maxConnectedCity = Object.keys(connections).reduce((a, b) => connections[a].length > connections[b].length ? a : b);
        var count = connections[maxConnectedCity].length+1
        
        answer+=cLib + (cRoad*(count-1))+"\n"
        queryIndex+=m+1;
    }
    
        return answer
    // }
}

let input1 = "2\n3 3 2 1\n1 2\n3 1\n2 3\n6 6 2 5\n1 3\n3 4\n2 4\n1 2\n2 3\n5 6";
const solution1 = roadsAndLibraries(input1);
// console.log(`The solution for ${input1} is: \n\n`+solution1);
console.log("The solution is: \n")
console.log(solution1)