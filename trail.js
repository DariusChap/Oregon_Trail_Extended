class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true 

    }

    hunt () {
        this.food += 2 

    }
    eat () {
        if(this.food > 0) {
            this.food -= 1;
        } else {this.isHealthy = false}
   
    
    }

}    

class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }

    getAvailableSeatCount () {
         return this.capacity - this.passengers.length
        

    }
    
    join(traveler) {
        if(this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        } 
    }

    shouldQuarantine() {
       return this.passengers.some(function (passenger) {
           return passenger.isHealthy === false
       }) 

    }

    totalFood() {
        return this.passengers.reduce(function (total) {
          return total.food
        })
    }

        
}