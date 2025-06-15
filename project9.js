/*function validateform(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const errormessage = document.getElementById("error-message");

    // Checking if any field is empty
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmpassword.trim() === '') {
        errormessage.innerText = "All fields are required";
        return;
    }

    // Checking if passwords match
    if (password !== confirmpassword) {
        errormessage.innerText = "Passwords do not match";
        return;
    }

    // Checking password length
    if (!isValidLength(password)) {
        errormessage.innerText = "Password length must be between 8 to 12 characters";
        return;
    }

    // Checking if password contains at least one alphabet, one digit, and one special character
    if (!(containsAlpha(password) && containsDigit(password) && containsSpecial(password))) {
        errormessage.innerText = "Password must contain at least one alphabet, one digit, and one special character";
        return;
    }

    // If all validations pass, submit the form
    document.getElementById("registrationform").submit();
}

// Checking if password contains at least one alphabet
function containsAlpha(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if ((pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z') || (pwd.charAt(i) >= 'A' && pwd.charAt(i) <= 'Z')) {
            return true;
        }
    }
    return false;
}

// Checking if password contains at least one digit
function containsDigit(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if (pwd.charAt(i) >= '0' && pwd.charAt(i) <= '9') {
            return true;
        }
    }
    return false;
}

// Checking if password contains at least one special character
function containsSpecial(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if (!(pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z') &&
            !(pwd.charAt(i) >= 'A' && pwd.charAt(i) <= 'Z') &&
            !(pwd.charAt(i) >= '0' && pwd.charAt(i) <= '9')) {
            return true;
        }
    }
    return false;
}

// Checking if password length is valid
function isValidLength(pwd) {
    return pwd.length >= 8 && pwd.length <= 12;
}


function f1(c)
{
    var p=document.getElementsByTagName("p");
     for(let i=0;i<=p.length;i++)
    {
        p[i].style.color=c;
    }  
}

function f2()
{
    var e=document.getElementById("head2");
    e.style.visibility="hidden";
}

function f3()
{
    var e=document.getElementById("head2");
    e.style.visibility="visible";

}
function add()
{
   let a=document.getElementById("fno");
   let b=document.getElementById("sno");
   let para=document.getElementById("result");
   para.innerHTML="sum is"+(parseInt(a.value)+ parseInt(b.value));
}


var f=document.forms;
var e=document.getElementById("head2");
alert(e.innerHTML);
e.style.color="red"
e.style.textAlign="center"
*/


  function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = "";

    // Name check
    if (name === "") {
      error += "Name is required.\n";
    }

    // Email check (simple check)
    if (email === "" || !email.includes("@")) {
      error += "Valid email is required.\n";
    }

    // Password check
    if (password.length < 8 || password.length > 12) {
      error += "Password must be 8 to 12 characters long.\n";
    }

    // Password pattern: at least one letter, one number, one special character
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])/;
    if (!pattern.test(password)) {
      error += "Password must contain at least one letter, one number, and one special character.\n";
    }

    // Confirm password check
    if (password !== confirmPassword) {
      error += "Passwords do not match.\n";
    }

    // Show error if any
    if (error !== "") {
      alert(error);
      return false; // form submit na ho
    }

    return true; // sab sahi hai to form submit ho
  }




