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
  var array = [];

  $("#bank-info").submit(function(event) {
    event.preventDefault();
    var defaultDeposit = 0;

    var inputName = $("#name").val();
    if (parseInt($("#initial-deposit").val()) > 0) {
      defaultDeposit = parseInt($("#initial-deposit").val());
    }

    var customerInfo = new BankAccount(inputName, defaultDeposit);

    array.push(customerInfo);

    $(".show-balance").empty().append(customerInfo.display());
    $("#withdrawl-deposit").show();
  });

  $("#withdrawl-deposit").submit(function(event) {
    event.preventDefault();

    var depositAmount = 0;
    var withdrawlAmount = 0;

    if (parseInt($("#deposit").val()) > 0) {
      depositAmount = parseInt($("#deposit").val());
    }
    if (parseInt($("#withdrawl").val()) > 0) {
      withdrawlAmount = parseInt($("#withdrawl").val());
    }

    var x = function(number) {
      return array[0].name + ": $" + number;
    }

    var newAmount = (array[0].initial + depositAmount - withdrawlAmount);
    $(".show-balance").empty().append(x(newAmount));
  });
});
