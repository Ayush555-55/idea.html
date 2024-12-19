// script.js
// Function to validate the sign-up form
function validateSignUpForm(event) {
    const fullName = document.getElementById('fullName') ? document.getElementById('fullName').value : '';
    const email = document.getElementById('email') ? document.getElementById('email').value : '';
    const password = document.getElementById('password') ? document.getElementById('password').value : '';
    const cardNumber = document.getElementById('cardNumber') ? document.getElementById('cardNumber').value : '';
    const aadharNumber = document.getElementById('aadharNumber') ? document.getElementById('aadharNumber').value : '';
    if (!fullName || !email || !password || !cardNumber || !aadharNumber) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    }
}
// Function to handle button clicks for main menu
function handleButtonClick(operation) {
    switch (operation) {
        case 'deposit':
            window.location.href = 'deposit.html';
            break;
        case 'withdrawal':
            window.location.href = 'withdrawal.html';
            break;
        case 'fastCash':
            window.location.href = 'fast-cash.html';
            break;
        case 'miniStatement':
            window.location.href = 'mini-statement.html';
            break;
        case 'pinChange':
            window.location.href = 'pin-change.html';
            break;
        case 'balanceEnquiry':
            window.location.href = 'balance-enquiry.html';
            break;
        case 'exit':
            window.location.href = 'exit.html';
            break;
        default:
            console.error('Unknown operation:', operation);
    }
}
// Function to handle deposit submission
function handleDeposit(event) {
    const amount = document.getElementById('depositAmount').value;
    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount.");
        event.preventDefault(); // Prevent form submission
    }
}
// Function to handle withdrawal submission
function handleWithdrawal(event) {
    const amount = document.getElementById('withdrawalAmount').value;
    if (!amount || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        event.preventDefault(); // Prevent form submission
    }
}
// Function to handle PIN change submission
function handlePinChange(event) {
    const newPin = document.getElementById('newPin').value;
    const confirmNewPin = document.getElementById('confirmNewPin').value;
    if (newPin !== confirmNewPin) {
        alert("New PIN and Confirm New PIN do not match.");
        event.preventDefault(); // Prevent form submission
    }
}
// Attach event listeners to forms when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sign-Up Form Validation
    const signUpForm = document.querySelector('form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', validateSignUpForm);
    }
    // Deposit Form Validation
    const depositForm = document.querySelector('form[action="/submit-deposit"]');
    if (depositForm) {
        depositForm.addEventListener('submit', handleDeposit);
    }
    // Withdrawal Form Validation
    const withdrawalForm = document.querySelector('form[action="/submit-withdrawal"]');
    if (withdrawalForm) {
        withdrawalForm.addEventListener('submit', handleWithdrawal);
    }
    // PIN Change Form Validation
    const pinChangeForm = document.querySelector('form[action="/submit-pin-change"]');
    if (pinChangeForm) {
        pinChangeForm.addEventListener('submit', handlePinChange);
    }
});
