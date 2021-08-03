////Mocha and Chai tets modules////


/// Test for SavingAccount
let saving = new SavingAccount(1,5);
saving._balance = 200; 

describe("getInterest(), SavingAccount",()=>{
    it("Returns interest ",()=>{
        assert.deepEqual(saving.getInterest(),5);
    });
});

describe("setInterest(value), SavingAccount",()=>{
    it("Throws RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            saving.setInterest(-10) 
        }, RangeError);
    });
    it("Sets the value to interest if the value is > zero.",()=>{
        assert.deepEqual(saving.setInterest(5),undefined); 
    });
});

describe("addInterest(), SavingAccount",()=>{
    it("Returns the balance adding the interest",()=>{
        assert.deepEqual(saving.addInterest(),210);
    });
});

describe("toString(), SavingAccount",()=>{
    it("Returns toString of Saving Account",()=>{
        assert.deepEqual(saving.toString(),"Account " + "1" + ": balance " + 210);
    });
});
describe("endOfMonth(), SavingAccount",()=>{
    it("Returns endOfMonth of Saving account",()=>{
        assert.deepEqual(saving.endOfMonth(),"Interest added SavingsAccount "+   "1" + ": balance: " + "220.5" + "  interest: " + "5");
        
    });
});


////// Test for checkingAccount 
let checking= new CheckingAccount(2,500);

describe("getOverDraft(), CheckingAccount",()=>{
    it("Returns overdraft limit of checking account",()=>{
        assert.deepEqual(checking.getOverDraft(),500);
    });
});

describe("setOverDraft(value), CheckingAccount",()=>{
    it("Throws RangeError if the value passed is < zero",()=>{
        assert.throw(() => {
            checking.setOverDraft(-500) 
        }, RangeError);
    });
    it("Sets new value to 'overDraftLimit' if the value is > zero.",()=>{
        assert.deepEqual(checking.setOverDraft(500),undefined); 
    });
});

describe("withdraw(value), CheckingAccount",()=>{
    it("Throws RangeError if the value passed is > zero",()=>{
        assert.throw(() => {
            checking.withdraw(-400) 
        }, RangeError);
    });    
    it("Throws RangeError if withdrawal amount is greater than overdraft limit",()=>{
        assert.throw(() => {
            checking.withdraw(-200) 
        }, RangeError);
    });
    it("Sets new value to 'overDraftLimit' if the value is > zero.",()=>{
        assert.deepEqual(checking.withdraw(500),undefined); 
    });
});

describe("toString(), CheckingAccount",()=>{
    it("Returns toString of CheckingAccount",()=>{
        assert.deepEqual(checking.toString(),"Account " + "2" + ": balance " + "-500");
    });
    
});
describe("endOfMonth(), CheckingAccount",()=>{
    it("Returns endOfMonth of CheckingAccount",()=>{
        assert.deepEqual(checking.endOfMonth(),"Warning, low balance CheckingAccount " + "2" + " : balance: " + "-500" + " overdraft limit: " + "500");
    });
   
});


// Test for Bank
let bank = new Bank();

describe("addAccount(), Bank",()=>{
    it("Creates instance of Account, adds it to Bank array, and returns nextNumber",()=>{
        assert.deepEqual(bank.addAccount(),2); 
    });
});

describe("addSavingAccount(), Bank",()=>{
    it("Creates instance of Saving Account, adds it to Bank array, and returns nextNumber",()=>{
        assert.deepEqual(bank.addSavingsAccount(14.5),3); 
    });
});

describe("addCheckingAccount(), Bank",()=>{
    it("Creates instance of Checking Account, adds it to Bank array, and returns nextNumber",()=>{
        assert.deepEqual(bank.addCheckingAccount(500),4); 
    });
});

describe("closeAccount(), Bank",()=>{
    it("Closes account of the given number",()=>{
        assert.deepEqual(bank.closeAccount(2),3); 
    });
});

describe("accountReport(), Bank",()=>{
    it("Returns report of each account",()=>{
        assert.deepEqual(bank.accountReport(3),undefined); 
    });
});

describe("endOfMonth(), Bank",()=>{
    it("displays report of each account at the end of a month",()=>{
        assert.deepEqual(bank.endOfMonth(),undefined);
    });
});