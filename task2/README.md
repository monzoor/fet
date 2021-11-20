Explain the design pattern used in following:

```
interface Vehicle {
int set_num_of_wheels()
int set_num_of_passengers()
boolean has_gas()
}
a) Explain how can you use the pattern to create car and plane class?
```

There are certain common characteristics for all types of vehicles, such as the number of wheels, passenger capacity, and whether or not the vehicle is gas-powered and it follows the factory pattern. As a result, we may design an interface vehicle class in which that vehicle's common characteristic can be implemented as a method. Then, anytime we construct any form of vehicle class, we only need to implement the vehicle class in order to obtain all of the vehicle's common attributes. The vehicle interface class must be implemented in both the Car and Plane classes, and the three methods must be overridden.

```
interface Vehicle {
interface Vehicle {
  set_sum_of_wheels: () => number;
  set_num_of_passenger: () => number;
  has_gas: () => boolean;
}

class Car implements Vehicle {
  set_sum_of_wheels() {
    return 4;
  }
  set_num_of_passenger() {
    return 4;
  }
  has_gas() {
    return true;
  }
}

class Plane implements Vehicle {
  set_sum_of_wheels() {
    return 9;
  }
  set_num_of_passenger() {
    return 250;
  }
  has_gas() {
    return false;
  }
}

const cars = new Car();
const plane = new Plane();
```

b) Use a different design pattern for this solution.

```
class VehicleBuilder {
    private wheels: number;
    private passenger: number;
    private gas: boolean;

    set_sum_of_wheels(value: number): VehicleBuilder {
        this.wheels = value;
        return this;
    }
    get Wheels() {
        return this.wheels;
    }
    set_num_of_passenger(value: number): VehicleBuilder {
        this.passenger = value;
        return this;
    }
    get Passenger() {
        return this.passenger;
    }

    has_gas(value: boolean): VehicleBuilder {
        this.gas = value;
        return this;
    }
    get Gas() {
        return this.gas;
    }


    build(): Vehicle {
        return new Vehicle(this);
    }
}

class Vehicle {
    private wheels: number;
    private passenger: number;
    private gas: boolean;

    constructor(builder: VehicleBuilder) {
        this.wheels = builder.Wheels;
        this.passenger = builder.Passenger;
        this.gas = builder.Gas;
    }

    get Wheels() {
        return this.wheels;
    }
    get Passenger() {
        return this.passenger;
    }
    get Gas() {
        return this.gas;
    }
}



const car: Vehicle = new VehicleBuilder()
    .set_sum_of_wheels(26)
    .set_num_of_passenger(4)
    .has_gas(true)
    .build();


const plane: Vehicle = new VehicleBuilder()
    .set_sum_of_wheels(9)
    .set_num_of_passenger(250)
    .has_gas(true)
    .build();

console.log(car, plane);
```
