let form=document.getElementById("myform");
let msg=document.getElementById("message");
form.addEventListener("submit",
    function(event)
{
    event.preventDefault();
    const name=document.getElementById("name").value;
    console.log(name);
    const email=document.getElementById("email").value;
    console.log(email);
    if(name==="" || email==="")
    
    {
        msg.textContent="Please fill in all fields";
     msg.style.color="red";
    }
    else{
        msg.textContent="Form.submitted succesfully";
        msg.style.color="green";
    }
});
