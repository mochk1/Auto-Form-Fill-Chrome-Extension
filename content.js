
var json_object = [{"role":"מיחמוד","name":"בלה","email":"מנהל","phone":"32321321"},{"role":"צוביצו","name":"זבו","email":"מנהל","phone":"12315"},{"role":"בובבו","name":"מימימ","email":"מנהל","phone":"555"},{"role":"פוקקו","name":"חימוד","email":"מנהל","phone":"666"},{"role":"סגן","name":"צובי","email":"מנהל","phone":"7777"},{"role":"מנהל","name":"החמוד","email":"מנהל","phone":"8888"}];

json_object.map((item)=>{


const nameinput = document.getElementsByClassName('namefield');
const phoneinput = document.getElementsByClassName('phonefield');
const roleinput = document.getElementsByClassName('rolefield');
const emailinput = document.getElementsByClassName('emailinput');
const addbtn = document.getElementsByClassName('addbtn')[0];


document.getElementsByTagName('input')[document.getElementsByTagName('input').length-1].value=item.role
document.getElementsByTagName('input')[document.getElementsByTagName('input').length-2].value=item.name
document.getElementsByTagName('input')[document.getElementsByTagName('input').length-3].value=item.email
document.getElementsByTagName('input')[document.getElementsByTagName('input').length-4].value=item.phone

/* roleinput[roleinput.length-1].value=item.role
nameinput[nameinput.length-1].value=item.name
emailinput[emailinput.length-1].value=item.email
phoneinput[phoneinput.length-1].value=item.phone */
addbtn.click()


})


 //send btn
/* document.getElementsByClassName('sendbtn')[0].click(); */

