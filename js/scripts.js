//Business Logic
function BankAccount(name, initial, deposit, withdrawl) {
  this.name = name;
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawl = withdrawl;
}
BankAccount.prototype.display = function() {
  return this.name + ": $" + (this.initial + this.deposit - this.withdrawl);
}

//User Interface
$(document).ready(function() {
  $("#bank-info").submit(function(event) {
    event.preventDefault();
    var defaultDeposit = 0;
    var depositAmount = 0;
    var withdrawlAmount = 0;
    console.log(depositAmount);

    var inputName = $("#name").val();
    if (parseInt($("#initial-deposit").val()) > 0) {
      defaultDeposit = parseInt($("#initial-deposit").val());
    }
    if (parseInt($("#deposit").val()) > 0) {
      depositAmount = parseInt($("#deposit").val());
    }
    if (parseInt($("#withdrawl").val()) > 0) {
      withdrawlAmount = parseInt($("#withdrawl").val());
    }
    console.log(depositAmount);


    var customerInfo = new BankAccount(inputName, defaultDeposit, depositAmount, withdrawlAmount);

    $(".show-balance").empty().append(customerInfo.display());
  });

});
