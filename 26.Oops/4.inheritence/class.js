// DRY == Don't Repeat Yourself

// Paren Class
class BankAccount {
  customerName;
  accountNumber;
  balance;
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance += amount;
  }
}

class savingAccount  extends BankAccount{
  transactionLimit = 1000;

  constructor(customerName, balance) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
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

const nathuAccount = new savingAccount("nathu" , 200);
nathuAccount.takePersonalLoan(200);

console.log(nathuAccount)
