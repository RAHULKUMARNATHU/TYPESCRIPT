// DRY == Don't Repeat Yourself

// Parent Function
function BankAccount(customerName , balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};



// Child Function

function savingAccount(customerName , balance) {
  BankAccount.call(this , customerName , balance)
  this.transactionLimit = 5000;
}

// savingAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// savingAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

savingAccount.prototype = Object.create(BankAccount.prototype)

savingAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Taking PersonalLoan", amount);
};



// Child Function

function currentAccount(customerName , balance) {
  BankAccount.call(this , customerName , balance)

  
  this.transactionLimit = 1000;
}



// currentAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// currentAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

currentAccount.prototype = Object.create(BankAccount.prototype)

currentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking Business Loan", amount);
};




const nathuAccount = new savingAccount("nathu" ,1000);
nathuAccount.deposit(2000)
nathuAccount.withdraw(200)

console.log(nathuAccount);


const rahulAccount = new currentAccount("Rahul" ,1000);
rahulAccount.deposit(1000)
rahulAccount.withdraw(200)
nathuAccount.takePersonalLoan(2000)
rahulAccount.takeBusinessLoan(200)
console.log(rahulAccount);