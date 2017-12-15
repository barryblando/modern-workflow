import $ from 'jquery';
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(`${this.name} now owes $0 in taxes.`);
  }
}

const john = new Person('John Doe', 'Blue');
john.greet();

const jane = new Adult('Jane Smith', 'Orange');
jane.greet();
jane.payTaxes();
