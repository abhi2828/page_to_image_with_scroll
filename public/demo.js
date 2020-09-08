function validateText(id)
{
if($("#"+id).val()==null || $("#"+id).val()=="")
{
var div = $("#"+id).closest("div");
div.removeClass("has-success");
$("#"+id).remove();
div.addClass("has-error has-feedback");
div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback"></span>');
return false;
}
else{
    var div = $("#"+id).closest("div");
    div.removeClass("has-error");
$("#"+id).remove();
div.addClass("has-success has-feedback");
div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
}

}

function validateEmail(id)
{
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
if(!email_regex.test($("#"+id).val()))
{
var div = $("#"+id).closest("div");
div.removeClass("has-success");
$("#"+id).remove();
div.addClass("has-error has-feedback");
div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback"></span>');
return false;
}
else{
    var div = $("#"+id).closest("div");
    div.removeClass("has-error");
$("#"+id).remove();
div.addClass("has-success has-feedback");
div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
    return true;
}

}

$(document).ready(
function()
{
$("#contactButton").click(function()
{
 if(!validateText("contactName"))
 {
    return false;
 }
 if(!validateEmail("contactEmail"))
 {
    return false;
 }
 if(!validateText("contactMobile"))
 {
    return false;
 }
 if(!validateText("contactAddress1"))
 {
    return false;
 }
 if(!validateText("contactCity"))
 {
    return false;
 }
 $("form#contactForm").submit();
}

    );
}


    );


    // ************************** my code for validation *****************
    
const form = document.getElementById('form');
const email = document.getElementById('email');
const re_password = document.getElementById('re_password');
const password = document.getElementById('password');

// add Event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})

// define validate function
    const validate = ()=>{
        const formVal = form.value.trim();
        const emailVal = email.value.trim();
        const re_passwordVal = re_password.value.trim();
        const passwordVal = password.value.trim();
    }

// validating userName
            // if( userName === ""){
            //     setErrorMsg(userName,'User Name cant not blank');
            // }
            // else if(userName.length <= 2){
            //     setErrorMsg(userName,'User Name must be 3 character long');
            // }
            // else{
            //     setSuccessMsg(userName);
            // }

// validating email

const isEmail = (email) =>{
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email); 
};

if( emailVal === ""){
    setErrorMsg(email,'User Name cant not blank');
}
else if(  !isEmail(emailVal)){
    setErrorMsg(emailVal,'not a valid email');
}
else{
    setSuccessMsg(email);
}

const setSuccessMsg =(input,errormsgs)=>{
    const formControl = input.parentElement;
    const small = formControl.querySeletor('small');
    formControl.class = "form-group.error";
    small.innerText = errormsgs;
}
