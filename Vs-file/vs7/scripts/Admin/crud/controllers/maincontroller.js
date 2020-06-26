window.addEventListener('load',init);
function init(){

    const dbRefObject=firebase.database().ref('/products');
     dbRefObject.on('value',snap=>console.log(snap.val()));

}