function dosignup(){
    var user=new Users();
    for(let key in user){
        user[key]=document.getElementById(key).value;
    }
    var promise=  firebase.database().ref('/users/'+user.email).set(user);
     promise.then(data=>{
        alert("Successful Create");
    }).catch(err=>{
        alert("Error Occur!!");
        console.log(err);
    })
   }

