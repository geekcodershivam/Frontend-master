function dologin(){
    var username= document.getElementById('username').value;
    var password= document.getElementById('password').value;
    console.log("DO login run")
    if(username==password)
    {
     location.href='dashboard.html';
    }
    else
    {
    let message="Invail username or password";
    document.getElementById('error').innerText=message;
    }
}