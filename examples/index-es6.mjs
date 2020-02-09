import Flunt from  '../dist/flunt.js';

class Customer extends Flunt.Notifiable{

  constructor(name, lastname, age){
    super()
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    super.AddNotifications(
      new Flunt.Contract()
        .isRequired(name, "Name", "Name is required")
        .isRequired(lastname, "Lastname", "Lastname is required")
        .isGreaterThan(age, 18, "Age", "You need more than 18 years")
    )
  }
}

var customer = new Customer(null, "Goncalves", 10);

customer.notifications.forEach(element => {
  console.log(element.message)
});

console.log(customer.notifications)
