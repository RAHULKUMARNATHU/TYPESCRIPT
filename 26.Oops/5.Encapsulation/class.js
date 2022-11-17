// DRY == Don't Repeat Yourself

// Parent Class
class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance += amount;
  }
  /*Setter method */

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not valid Input");
    }
    this.#balance = amount;
  }

  /*Getter method */

  get balance() {
    return this.#balance;
  }
}

class savingAccount extends BankAccount {
  transactionLimit = 1000;

  constructor(customerName, balance) {
    super(customerName, balance);
  }

  #calculateInterest(amount) {
    console.log("calculating interest", amount);
  }

  takePersonalLoan(amount) {
    this.#calculateInterest(amount);
    console.log("Taking Personal Loan", amount);
  }
}

class currentAccount extends BankAccount {
  transactionLimit = 1000;

  constructor(customerName, balance) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Taking Business Loan", amount);
  }
}

const nathuAccount = new savingAccount("nathu", 200);
// nathuAccount.#balance(200)
nathuAccount.balance = 3000;
nathuAccount.takePersonalLoan(500);
console.log(nathuAccount.balance);
console.log(nathuAccount);
