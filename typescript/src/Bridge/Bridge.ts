interface Account{
  openAccount():Account;
  showAccountType():void;
}

class DepositAccount implements Account{
    openAccount(): Account {
      console.log("");
      return new DepositAccount();
    }
    showAccountType(): void {
        throw new Error("Method not implemented.");
    }

}

class SavingAccount implements Account{
    openAccount(): Account {
        throw new Error("Method not implemented.");
    }
    showAccountType(): void {
        throw new Error("Method not implemented.");
    }

}

abstract class Bank{

}
