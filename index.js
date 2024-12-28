
var user = [
    {fullName:null,carName:null,carModel:null,duration:null,telebirr:null,date:null,email:null,password:null,phone:null}
];

var fullNameEl = document.getElementById("fullname");
var ownerNameEl = document.getElementById("ownername");
var carNameEl = document.getElementById("carname");
var carModelEl = document.getElementById("carmodel");
var durationEl = document.getElementById("duration");
var paymentNoEl = document.getElementById("paymentNo");
var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");
var phoneEl = document.getElementById("phone");

var submitEl = document.getElementById("submit");

var displayNameEl = document.getElementById("display-fullname");
var displayOwnerNameEl = document.getElementById("display-ownername");
var displayCarNameEl = document.getElementById("display-carname");
var displayCarModelEl = document.getElementById("display-carmodel");
var displayDurationEl = document.getElementById("display-duration");
var displayPaymentEl = document.getElementById("display-payment");
var displayDateEl = document.getElementById("display-date");


function submitter(){
    user[0].fullName = fullNameEl.value;
    user[0].carName = carNameEl.value;
    user[0].carModel = carModelEl.value;
    user[0].duration = durationEl.value;
    user[0].telebirr = paymentNoEl.value;
    user[0].email = emailEl.value;
    user[0].password = passwordEl.value;
    user[0].phone = phoneEl.value;
}

function display(){
    displayNameEl.textContent = user[0].fullName;
    displayOwnerNameEl.textContent = user[0].fullName;
    displayCarNameEl.textContent = user[0].carName;
    displayCarModelEl.textContent = user[0].carModel;
    displayDurationEl.textContent = user[0].duration;
    displayPaymentEl.textContent = user[0].telebirr;


}


submitEl.addEventListener('click',function(){
    submitter();
    display();
});


