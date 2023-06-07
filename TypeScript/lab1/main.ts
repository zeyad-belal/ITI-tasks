class Account {
  constructor(public Acc_no:number, public Balance:number ){}
  debitAmount(){
    return this.Balance 
  }
  creditAmount(){
    return this.Balance
  }
  getBalance(){
    return this.Balance
  }
}

interface IAccount{
  Date_of_openning:number;
  addCustomer();
  removeCustomer();
}

class currentAccount extends Account implements IAccount{
  constructor(public Date_of_openning, An,b, public interest_rate){
    super(An, b);
    this.Acc_no = An;
    this.Balance = b;
  }
  
  addCustomer(){
    console.log("dd")
  };
  removeCustomer(){
    console.log("ss")
  };

}

class saving_Account extends Account implements IAccount{
  constructor(public Min_Balance,public Date_of_openning, An,b){
    super(An, b);
    this.Acc_no = An;
    this.Balance = b;
  }
  
  addCustomer(){
    console.log("dd")
  };

  removeCustomer(){
    console.log("ss")
  };

}