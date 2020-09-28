class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true

    }

    hunt() {
        return this.food = this.food + 2

    }
    eat() {
        if (this.food >= 1) {
            this.food = this.food - 1
        } else { this.isHealthy = false }


    }

}

class Wagon {
    constructor(capacity) {
        this.passengers = []
        this.capacity = capacity
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length


    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        return this.passengers.some(function (passenger) {
            return passenger.isHealthy === false
        })

    }

    totalFood() {
        return this.passengers.reduce(function (total, passenger) {
            return total += passenger.food
        }, 0)
    }


}

class Doctor extends Traveler {
    constructor(name, food, isHealthy,) {
        super(name, food, isHealthy)
    }

    
    heal(traveler) {
       return traveler.isHealthy = true
    }
    
    
}

class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2
        this.isHealthy = true
    }

    hunt() {
        return this.food = this.food + 5
    }

    eat() {
        if (this.food >= 2) {
            this.food = this.food - 2
        } else { this.food = 0, this.isHealthy = false }
    }

    giveFood(traveler, numOfFoodUnits) {
        if(this.food > numOfFoodUnits) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits
        }   
    }
   



}