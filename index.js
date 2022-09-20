console.log("js")

let userName=document.getElementById("userName");
let email=document.getElementById("email");
let number=document.getElementById("phoneNumber");
let Password=document.getElementById("password");
let CnfrmPassword=document.getElementById("passwordConfirm");
let date=document.getElementById("dateOfBirth");
let Gender=document.getElementById("Gender");
let form=document.getElementById("form")
let success=document.getElementById("alert");
success.style.display="none";
let validName=false;
let validEmail=false;
let validNumber=false;
let validPassword=false;
let validCnPassword=false;
let validDate=false;
let validGender=false;


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let nameRegex=/(^[A-Za-z]{3,16})([ ]{1,1})([A-Za-z]{3,16})/;
     if(nameRegex.test(userName.value)){
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        validName = true;
    }
    else {
        userName.classList.add("is-invalid")
        userName.classList.remove("is-valid")
        validName = false;
    }
    let emailRegex=/([a-zA-Z0-9\.\_]){1,20}\@([a-zA-Z]){1,10}\.([a-zA-Z]){1,5}/;
     if(emailRegex.test(email.value)){
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
        validEmail = true;
    }  
    else {
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        validEmail = false;
    }
    let numberRegex=/^([0-9]){10}$/;
     if(numberRegex.test(number.value)){
        number.classList.remove("is-invalid")
        number.classList.add("is-valid")
        validNumber = true;
    }  
    else {
        number.classList.add("is-invalid")
        number.classList.remove("is-valid")
        validNumber = false;
    }
    let PasswordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     if(PasswordRegex.test(Password.value)){
        Password.classList.remove("is-invalid")
        Password.classList.add("is-valid")
        validPassword = true;
    }  
    else {
        Password.classList.add("is-invalid")
        Password.classList.remove("is-valid")
        validPassword = false;
    }
    if(CnfrmPassword.value===Password.value&&CnfrmPassword.value!=""){
        CnfrmPassword.classList.remove("is-invalid")
        CnfrmPassword.classList.add("is-valid")
        validCnPassword = true;
    }  
    else {
        CnfrmPassword.classList.add("is-invalid")
        CnfrmPassword.classList.remove("is-valid")
        validCnPassword = false;
    }
    let today=new Date();
    let tyear=today.getFullYear()
    let bday=date.value
    let year=Number(bday.substr(0, 4))
    let age=tyear-year
    if(age>18 && bday!=""){
        date.classList.remove("is-invalid")
        date.classList.add("is-valid")
        validDate = true;
    }
    else{
        date.classList.add("is-invalid")
        date.classList.remove("is-valid")
        validDate = false;
    }
    if(Gender.value==="Male"){
        console.log(Gender.value)
        Gender.classList.add("is-invalid")
        Gender.classList.remove("is-valid")
        validGender = false;
    }
    else{
        Gender.classList.remove("is-invalid")
        Gender.classList.add("is-valid")
        validGender = true;
    }
    if (validName && validEmail && validNumber && validPassword && validCnPassword && validDate && validGender) {
        success.style.display = "block"
    }
    else {
        success.style.display = "none"
    }
    setTimeout(() => {
        success.style.display = "none"
    }, 4000);

})


