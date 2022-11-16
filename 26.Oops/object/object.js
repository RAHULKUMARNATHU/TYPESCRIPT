
function BankAccount(CustomerName , balance = 0){
    this.CustomerName = CustomerName ;
    this.AccountNumber = Date.now();
    this.balance = balance;
    this.deposite = (amount) =>{
        this.balance += amount;
    }
    this.credit = (amount) => {
        this.balance -= amount;
    }
}
// const nathuAccount = new BankAccount("nathu" , 2000)
// const rahulAccount = new BankAccount("rahul" )
// rahulAccount.balance = 200
// nathuAccount.deposite(1000)
// nathuAccount.credit(100)
// console.log(nathuAccount , rahulAccount)
// console.log(rahulAccount.balance)

// ====================================//

const accounts =[];
const accountForm  = document.querySelector('#accountForm');
const CustomerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');


const depositeForm  = document.querySelector('#depositeForm');
const AccountNumber = document.querySelector('#AccountNumber');
const amount= document.querySelector('#amount');


accountForm.addEventListener('submit' , (e) => {

    e.preventDefault();
    // console.log(CustomerName.value  , balance.value)
    // console.log("hello")


    const account = new BankAccount ( CustomerName.value , +balance.value);
    accounts.push(account)
    console.log(accounts)
})



depositeForm.addEventListener('submit' , (e) => {

    e.preventDefault();
    const account = accounts.find((account)=> (account.AccountNumber === +AccountNumber.value))
    account.deposite(+amount.value);
    
    
    console.log(account)
})


