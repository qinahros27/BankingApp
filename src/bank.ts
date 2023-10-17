import Branch from "./branch";
import Customer from "./customer";

class Bank {
    private name: string;
    private branches: Branch[];
  
    constructor(name: string) {
      this.name = name;
      this.branches = [];
    }
  
    addBranch(branch: Branch): boolean {
      if (!this.branches.includes(branch)) {
        this.branches.push(branch);
        return true;
      } else {
        return false;
      }
    }
  
    addCustomer(branch: Branch, customer: Customer): boolean {
      if (this.branches.includes(branch) && !branch.getCustomers.includes(customer)) {
        branch.getCustomers.push(customer);
        return true;
      } else {
        return false;
      }
    }
  
    addCustomerTransaction(branch: Branch, customerID: string, amount: number): boolean {
      const customer = branch.getCustomers.find(c => c.getId === customerID);
      if (customer) {
        customer.getTransactions.push({ date: new Date(), amount });
        return true;
      } else {
        return false;
      }
    }
  
    findBranchByName(name: string): Branch[] | null {
      const matchedBranches = this.branches.filter(b => b.getName === name);
      if (matchedBranches.length > 0) {
        return matchedBranches;
      } else {
        return null;
      }
    }
  
    checkBranch(branch: Branch): boolean {
      return this.branches.includes(branch);
    }
  
    listCustomers(branch: Branch, showTransactions = false): boolean {
      if (this.branches.includes(branch)) {
        console.log(`Customers of branch ${branch.getName}:`);
        for (const customer of branch.getCustomers) {
          if (showTransactions) {
            console.log(customer.getName)
            for (const transaction of customer.getTransactions) {
              console.log(`date: ${transaction.date}, amount: ${transaction.amount} `);
            }
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }

export default Bank;