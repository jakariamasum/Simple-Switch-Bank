function updateBalance(amount, isDeposit) {
  const totalBalance = document.getElementById("total-balance");
  const prevBalance = parseFloat(totalBalance.innerText);

  let newBalance;
  if (isDeposit) {
    newBalance = prevBalance + amount;
  } else {
    newBalance = prevBalance - amount;
    if (newBalance < 500) {
      alert(
        "You don't have enough money for withdrawal or balance cannot go below $500!"
      );
      return null;
    }
  }
  totalBalance.innerText = newBalance.toFixed(2);
  return newBalance;
}

function handleTransaction(amountFieldId, totalFieldId, isDeposit) {
  const amountField = document.getElementById(amountFieldId);
  const amount = parseFloat(amountField.value);

  if (isNaN(amount) || amount <= 0) {
    alert(`Please add a valid ${isDeposit ? "deposit" : "withdrawal"} amount!`);
    amountField.value = "";
    return;
  }

  const totalField = document.getElementById(totalFieldId);
  const prevAmount = parseFloat(totalField.innerText);
  totalField.innerText = (prevAmount + amount).toFixed(2);

  if (updateBalance(amount, isDeposit) !== null) {
    amountField.value = "";
  }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  handleTransaction("user-deposit", "total-deposit", true);
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  handleTransaction("user-withdraw", "total-withdraw", false);
});
