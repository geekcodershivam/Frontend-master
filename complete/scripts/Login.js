
         function doLogin(){
        var username= document.getElementById('username').value;
        var password= document.getElementById('password').value;
         if(username=='admin'&& password=='admin'){
            location.href='dashboard.html';
        }

        else {
            var users=firebase.database().ref('/users');
            users.on('value',(snap)=>{
                let prods=snap.val();
                const values=Object.values(prods);
                for(let data of values){
                    if(data.email==username && data.pass==password){
                        location.href='main.html';
                    }
                }
            })
        }
    }