window.addEventListener("load",registerEvents);
var autoNumberObject ;
function registerEvents(){
document.getElementById('add').addEventListener('click',addProduct);
autoNumberObject = autoNumberGenerator();
document.getElementById("id").innerHTML = loadAutoNumber();
printcounts();
}
    //function printProduct(product){
    //var tbody=document.getElementById('products');
    //var tr=tbody.insertRow();
    //var index=0;
    //for(let key in product){
    //tr.insertCell(index).innerText=product[key];
    //index++;
    //} 
//}
function createImage(url){
    var image =  document.createElement('img');
    image.src = url;
    image.className='size';
    return image;
 }

 function colour(color){
     var draw= document.createElement('div');
     draw.style.backgroundColor=color;
     draw.className='sizes';
     return draw;
 }
 function loadAutoNumber(){
    var id = autoNumberObject.next().value;
    return id;
}
 function printcounts(){
    document.getElementById("counts").innerHTML =  productOperations.products.length;

 }

 function printProduct(product){
    printcounts();
     var tbody = document.getElementById('products');
     var tr = tbody.insertRow();
     var index = 0;
     for(let key in product){
         if(key=='url'  ){
             tr.insertCell(index).appendChild(createImage(product[key]));
             index++;
             continue;
         }
         else 
         if(key=='color')
         {
            tr.insertCell(index).appendChild(colour(product[key]));
             index++;
             continue; 
         }
         
         tr.insertCell(index).innerText = product[key];

         index++;
         
         
     }
 }

function addProduct(){
    var product= new Product();
    for(let key in product){
        product[key]=document.getElementById(key).value;
    }
    productOperations.add(product);
    printProduct(product);
    document.getElementById("id").innerHTML = loadAutoNumber();

}