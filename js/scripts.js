//Business Logic
function BankAccount(name, initial) {
  this.name = name;
  this.initial = initial;
}
BankAccount.prototype.display = function() {
  return this.name + ": $" + this.initial;
}
//User Interface
$(document).ready(function() {
  $("#bank-info").submit(function(event) {
    event.preventDefault();

    var inputName = $("#name").val();
    var defaultDeposit = parseInt($("#initial-deposit").val());
    var customerInfo = new BankAccount(inputName, defaultDeposit);
    $(".show-balance").append(customerInfo.display());

  });
});
