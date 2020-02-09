# FluntJS

[![Build Status](https://travis-ci.com/jhonesgoncal/flunt.svg?branch=master)](https://travis-ci.com/jhonesgoncal/flunt) [![Coverage Status](https://coveralls.io/repos/github/jhonesgoncal/flunt/badge.svg?branch=master)](https://coveralls.io/github/jhonesgoncal/flunt?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## What is Flunt?
Inspired in [Flunt](https://github.com/andrebaltieri/flunt), Every app has business rules and validations, and you probably will need to keep all the errors and notifications that happened and send it to somewhere, maybe to your UI.

Flunt implements the Notification Pattern and helps you to track everything that happend, consolidating your notifications and making it easy to access and manipulate.

## Installation

```sh
$ npm install flunt-js --save
```

## How to use

### ES6

```js

import Flunt from 'flunt-js';

// extends your class to Flunt.Notifiable
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

// instance class
var customer = new Customer(null, "Goncalves", 10);

// take your messages
customer.notifications.forEach(element => {
  console.log(element.message)
});

//take all notifications
console.log(customer.notifications)
```

### ES5

```js

const Flunt = require('flunt-js');

// extends your class to Flunt.Notifiable
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

// To use class
module.exports = Customer

// instance class
var customer = new Customer(null, "Goncalves", 10);

// take your messages
customer.notifications.forEach(element => {
  console.log(element.message)
});

//take all notifications
console.log(customer.notifications)
```

## Methods

> Follow the methods that the library provides.

> ## Contract

 Validations methods.

--

**Example**

```js
isRequired(value, property, message)
hasMinLen(value, min,property, message)
hasMaxLen(value, max, property, message)
isFixedLen(value, len, property, message)
isEmail(value, property, message)
IsGreaterThan(val, comparer, property, message)

//To get messages and notifications
getNotifications()
getMessages()

// To know if is valid
isValid()

```

> ## Notifiable

> Class turn another class notifiable and works with flunt.

--

**Example**

```js
AddNotification(property, message)
AddNotifications(contract)

// To get messages
getMessages()

// To know if is valid
isValid()
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Jhones Gonçalves](https://avatars2.githubusercontent.com/u/23177787?s=400&u=21bdafe4c1b9da7c42b78d7269df068771299f0b&v=4)|
|:---------------------:|
|  [Jhones Gonçalves](https://github.com/jhonesgoncal/)   |

See also the list of [contributors](https://github.com/jhonesgoncal/flunt/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
