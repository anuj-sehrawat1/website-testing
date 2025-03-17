// Add any interactive functionality here
document.querySelector('.pay-button').addEventListener('click', () => {
  const amount = document.getElementById('amount').value;
  const recipient = document.getElementById('recipient').value;

  if (amount && recipient) {
    alert(`Payment of $${amount} to ${recipient} successful!`);
  } else {
    alert('Please fill in all fields.');
  }
});
