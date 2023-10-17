import Customer from "./customer";

class Branch {
    private name: string
    private customers: Customer[]
    constructor(name: string) {
        this.name = name
        this.customers = []
    }
    get getName() {
        return this.name;
    }
    get getCustomers() {
        return this.customers;
    }
    addCustomer(customer: Customer): boolean {
        if (this.customers.includes(customer)) {
            return true;
          } else {
            return false;
          }
    }
    addCustomerTransaction(id: string, account: number) {
        let customer = this.findCustomer(id);
        if (customer) {
        let transactionindex = customer.getTransactions.findIndex(element => element.amount === account)
    
        if(transactionindex != -1) {
            return true;
        }
        else {
            return false;
        } }
    }
    findCustomer(id: string) {
        let customerindex = this.customers.findIndex(element => element.getId === id);
        if(customerindex != -1) {
            return this.customers[customerindex];
        }
        else {
            return null;
        }
    }
}

export default Branch;