function checkDataName(){
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var emailaddr = document.getElementById('email-addr').value;
var addr = document.getElementById('addr').value;
var city = document.getElementById('city').value;
var phoneno = document.getElementById('phoneno').value;

if(( !fname) || (!lname) || (!emailaddr) || (!addr) || (!city) || (!phoneno) )
{
    alert("All fields are manadatory");
}
else
{
    alert("Registration Completed");
}

}

// function dddisplay(){
//     checkDataName();
//     alert("You clicked Register Button");
// }