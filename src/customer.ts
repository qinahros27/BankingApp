interface Transaction {
    date: Date;
    amount: number
} 
class Customer {
    private static IDinit = 1;
    private name: string;
    private id: string;
    private transactions: Transaction[];
    constructor(name: string) {
      this.name = name;
      this.transactions = [];
      Customer.IDinit++ ;
      this.id = Customer.IDinit.toString();
    }

    get getName() {
        return this.name;
    }

    get getId(){
        return this.id;
    }

    get getTransactions() {
        return this.transactions;
    }

    get getBalance() {
        let balance = 0;
        for (const transaction of this.transactions) {
          balance += transaction.amount;
        }
        return balance;
    }

    addTransactions(amount: number): boolean {
        const balance = this.getBalance + amount;
        if (balance < 0) {
            return false;
        }
        const transaction = { date: new Date(), amount } ;
        this.transactions.push(transaction);
        return true;
  }
   
}

export default Customer;