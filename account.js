class BankAccount {
    constructor(account_number, name, account_type, opening_balance, available_funds,deposit_funds,withdrawn_funds) {
        this.account_number = account_number;
        this.name = name;
        this.account_type = account_type;
        this.opening_balance = opening_balance;
        this.available_funds = available_funds;
        this.deposit_funds = deposit_funds;
        this.withdrawn_funds = withdrawn_funds;
    }

    getBalance() {
        console.log('Current balance is UGX:', this.available_funds);
    }

    open() {
        console.log(this.name, '- Your Account has been successfully activated');
        
    }

    deposit() {
        console.log('You have deposited UGX ', this.deposit_funds);
    }

    withdraw() {
        console.log('You have withdrawn UGX', this.withdrawn_funds);
    }

    close(){
        delete this.account_number;
    }
};

let userOne = new BankAccount(1344555, 'fifi', 'Savings', 50000, 200000, 100000, 30000);
console.log(userOne);
userOne.getBalance();
userOne.open();
userOne.deposit();
userOne.withdraw();
userOne.close();
// after closing, am consoling userone again to see if accont_number is deleted
console.log(userOne);

let userTwo = new BankAccount(2345623,'stella','current',20000,300000);
console.log(userTwo);
