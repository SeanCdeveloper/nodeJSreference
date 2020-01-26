function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function() {
    return this.balance;
  },
  this.setBalance = function(value) {
    this.balance = value;
  },
  this.updateStatement = function(value) {
    this.statement.push(value);
  },
  this.getStatement = function () {
    return this.statement.slice(0);
  },
  this.printStatement = function() {
    var statement = this.getStatement();
    for (var i = 0; i < statement.length; i++) {
      console.log(`${i + 1}. ${statement[i]}`);
    }
  },
  this.deposit = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number!");
    }
    var newBalance = this.getBalance() + value;
    this.setBalance(newBalance);
    this.updateStatement(newBalance);
    console.log(`Deposited ${value}!`);
  },
  this.withdraw = function(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("'value' must be a positive number");
    }
    var newBalance = this.getBalance() - value;
    if (newBalance < 0) {
      throw new Error("Insufficient funds for this transaction");
    }
    this.setBalance(newBalance);
    this.updateStatement(-value);
    console.log(`Withdrew ${value}!`);
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


var bank = new MiniBank(0);
bank.printBalance();

bank.deposit(85);
bank.printBalance();

bank.withdraw(20);
bank.printBalance();

bank.printStatement();



/*
# MiniBank

In this activity you will use objects to create a mini banking application.

## Instructions

Update the `MiniBank` function to achieve the following:

1. Add another value of `statement` that should be set to an array with the inital balance as its first item. This array will contain all transactions made with the MiniBank objects.

2. Add a `setBalance` function that takes a value and updates the value `balance` value to it.

3. Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.

4. Write a `getStatement` function that returns the `statement` array.

5. Write a `printStatement` function that prints each element in the in the `statement` array on its own line.

6. Write a `deposit` function that takes a value and updates the `balance` value using the `setBalance` function.

7. Write a `withdraw` function that takes a value and subtracts it from the `balance`.

8. Return the `printBalance`, `printStatement`, `deposit`, `withdraw` functions from the `MiniBank` function.

* Then, create a new `minibank` object using the `MiniBank` function.

1. Print the `minibank` balance.

2. Deposit some money into the `minibank` object.

3. Print the `minibank` balance.

4. Withdraw some money from the `minibank` object.

5. Print the `minibank` balance.


* Add code to throw an error if the user tries to withdraw more money than they have, or try to deposit or withdraw values that aren't positive numbers.

* Add code to return a copy of the `statement` when `getStatement` is called, rather than returning the original array.

*/