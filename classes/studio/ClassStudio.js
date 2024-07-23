//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    
    addScore(score){
        return this.scores.push(score) 
    }

    averageScore(){
        let average = 0;
        for(let i = 0; i < this.scores.length; i++){
            average += this.scores[i]
        }
        return average / this.scores.length
    }

    status(object){
        let status = ""
        if(object.averageScore() >= 90){
            status = "Accepted"
        }
        else if(object.averageScore() < 90 && object.averageScore() >= 80){
            status = "Reserved"
        }
        else if(object.averageScore() < 80 && object.averageScore() >= 70){
            status = "Probationary"
        }
        else if(object.averageScore() < 70){
            status = "Rejected"
        }

        return status;
    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]) 
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97])
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62])

while(gator.averageScore() < 90){
    gator.addScore(95)
}


console.log(`${bear.name} earned an average test score of ${bear.averageScore()} and has a status of ${bear.status(bear)}`)
console.log(`${maltese.name} earned an average test score of ${maltese.averageScore()} and has a status of ${maltese.status(maltese)}`)
console.log(`${gator.name} earned an average test score of ${gator.averageScore()} and has a status of ${gator.status(gator)}`)


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.