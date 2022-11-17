class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const nathuAccount = new BankAccount("Nathu K", 1000);

const rahulAccount = new BankAccount("Rahul", 2000);

nathuAccount.deposit(2000);
nathuAccount.withdraw(100);

rahulAccount.deposit(5000);
console.log(nathuAccount , rahulAccount);




