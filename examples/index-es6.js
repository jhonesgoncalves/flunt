import  Flunt   from  '../dist/flunt.js';

let Notifiable = Flunt.Notifiable();  
class Customer extends Notifiable {

}

var customer = new Customer();

console.log(customer)