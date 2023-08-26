document.getElementById("btn-deposite").addEventListener("click", function () {
  var depositInputText = document.getElementById("deposite-field");
  var depositInputTextString = depositInputText.value;
  var depositInputValue = parseFloat(depositInputTextString);

  var depositpreviousAmount = document.getElementById("deposite-total");
  var depositpreviousAmountString = depositpreviousAmount.innerText;
  var depositpreviousAmountValue = parseFloat(depositpreviousAmountString);

  var depositeTotal = depositpreviousAmountValue + depositInputValue;
  depositpreviousAmount.innerText = depositeTotal;

  var BallancePreviousAmount = document.getElementById("balance-total");
  var BallancePreviousAmountString = BallancePreviousAmount.innerText;
  var BallancePreviousAmountValue = parseFloat(BallancePreviousAmountString);
  var BallanceTotal = BallancePreviousAmountValue + depositInputValue;
  BallancePreviousAmount.innerText = BallanceTotal;

  depositInputText.value = "";
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  var WithdrawInputText = document.getElementById("Withdraw-field");
  var WithdrawInputTextString = WithdrawInputText.value;
  var WithInputValue = parseFloat(WithdrawInputTextString);

  var WithdrawpreviousAmount = document.getElementById("withdraw-total");
  var WithdrawpreviousAmountString = WithdrawpreviousAmount.innerText;
  var WithdrawpreviousAmountValue = parseFloat(WithdrawpreviousAmountString);

  var WithdrawTotal = WithdrawpreviousAmountValue + WithInputValue;
  WithdrawpreviousAmount.innerText = WithdrawTotal;

  var BallancePreviousAmount = document.getElementById("balance-total");
  var BallancePreviousAmountString = BallancePreviousAmount.innerText;
  var BallancePreviousAmountValue = parseFloat(BallancePreviousAmountString);
  var BallanceTotal = BallancePreviousAmountValue - WithInputValue;
  BallancePreviousAmount.innerText = BallanceTotal;

  WithdrawInputText.value = "";
});
