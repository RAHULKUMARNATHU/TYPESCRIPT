
function BankAccount(CustomerName , balance = 0){
    this.CustomerName = CustomerName ;
    this.AccountNumber = Date.now();
    this.balance = balance;
   
   
   
    // this.deposite = (amount) =>{
    //     this.balance += amount;
    // }
    
    
    // this.credit = (amount) => {
    //     this.balance -= amount;
    // }
}


const nathuAccount = new BankAccount("nathu");


BankAccount.prototype.deposite = function(amount){
this.balance += amount;
}


BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
    }

nathuAccount.deposite(3000)
nathuAccount.withdraw(300)

console.log(nathuAccount)


