class Account {
    constructor(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() {
        return this.Balance;
    }
    creditAmount() {
        return this.Balance;
    }
    getBalance() {
        return this.Balance;
    }
}
class currentAccount extends Account {
    constructor(Date_of_openning, An, b, interest_rate) {
        super(An, b);
        this.Date_of_openning = Date_of_openning;
        this.interest_rate = interest_rate;
        this.Acc_no = An;
        this.Balance = b;
    }
    addCustomer() {
        console.log("dd");
    }
    ;
    removeCustomer() {
        console.log("ss");
    }
    ;
}
class saving_Account extends Account {
    constructor(Min_Balance, Date_of_openning, An, b) {
        super(An, b);
        this.Min_Balance = Min_Balance;
        this.Date_of_openning = Date_of_openning;
        this.Acc_no = An;
        this.Balance = b;
    }
    addCustomer() {
        console.log("dd");
    }
    ;
    removeCustomer() {
        console.log("ss");
    }
    ;
}
