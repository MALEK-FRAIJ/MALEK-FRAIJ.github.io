
/* profile page 
 * to convert status input from disabled to enabled
 * for all inputs
 *    */
const inputs = document.querySelectorAll('input[disabled]');
const btnEdit = document.getElementById('btnEdit');

const crud = document.querySelectorAll('#crud');

if (btnEdit) {
    btnEdit.addEventListener('click', function () {
        for (const input of inputs) {
            input.disabled = false;
        }
        uploadBtn.style.display = "block";

        for (const c of crud) {
            c.style.display = "block";
        }

    });
}

/*
 * matchPassword function
 * @return true if match 
 * @return false if not match
 */
function matchPassword() {
    const password = document.getElementById('inputDisabled3').value;
    const confirmPassword = document.getElementById('inputDisabled4').value;
    if (password === confirmPassword) {
        return true;
    } else {
        return false;
    }
}

const btnUpdate = document.getElementById('btnUpdate');
if (btnUpdate) {
    btnUpdate.addEventListener('click', function () {
        if (matchPassword()) {
            btnUpdate.type = 'submit';
        } else {
            btnUpdate.type = 'button';
            alert('Passwords do not match. Please try again.');
        }
    });

}

/* *************change state from button to input [file] ************* */
/* - change to input[file]
   - display upload photo on click edit
   - can change photo profile
*/
const uploadBtn = document.getElementById("uploadBtn");

if (uploadBtn) {
    uploadBtn.addEventListener("click", function () {

        const fileInput = document.createElement("input");

        fileInput.type = "file";
        fileInput.style.display = "none";
        document.body.appendChild(fileInput);
        fileInput.click();

    });
}
/* ************************* PreLoder *********************** */
/* 
   - section loader pages Begin 
   - loader function and showPage function 
   - display and none (Time) = > 700
*/

function loader() {
    loadVar = setTimeout(showPage, 700);
}

function showPage() {
    document.getElementById("preloder").style.display = "none";

}

/* ***************  switcher mood dark and light***************** */

/* const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

if (toggle) {
    toggle.addEventListener('click', function () {
        this.classList.toggle('fa-a');

        if (this.classList.toggle('fa-solid')) {
            body.style.background = 'white';
            body.style.color = 'black';
            body.style.transition = '2s';
        } else {
            body.style.background = '#081b29';
            body.style.color = 'white';
            body.style.transition = '2s';
        }
    });
}
 */


/* ******* modal section login and registration **************/
/*
  - modal section login and registration 
  - switch login or registration
    and change background button
  - display or none value
*/
const login = document.getElementById("Login");
const Register = document.getElementById("Register");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");


if (Register) {
    Register.style.background = '#407e8062';
    Register.onclick = () => {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';

        Register.style.background = '#216566';
        login.style.background = '#407e8062';
    };
}
if (login) {
    login.onclick = () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';

        Register.style.background = '#407e8062';
        login.style.background = '#216566';
    };
}


/* ********************** switchServiceType *******************/
/*
   - sales-procedures page 
   - switchServiceType function ()
   - paymentOption or frequencyRent
   - display or none value
*/
function switchServiceType() {
    var serviceType = document.getElementById("serviceTypeId");
    var frequencyRentDiv = document.getElementById("frequencyRent");
    var forSaleDiv = document.getElementById("paymentOptionsForSale");

    if (serviceType.value == "rent") {
        frequencyRentDiv.style.display = "block";
        forSaleDiv.style.display = "none";
    } else {
        forSaleDiv.style.display = "block";
        frequencyRentDiv.style.display = "none";
    }
}

/*  */

const card = document.querySelectorAll('#myCard');

if (card) {
    for (const a of card) {
        a.addEventListener('click', function () {
            window.location.href = 'home-details.html';
        });
    }
}




