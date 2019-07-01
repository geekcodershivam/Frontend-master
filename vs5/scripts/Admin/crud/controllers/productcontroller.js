window.addEventListener("load",init);
var autoNumber ;
function init(){
    registerEvents();
    var div = document.querySelector("#Divsort");
    div.className = "hide";
    var divs = document.querySelector("#Divsearch");
    divs.className = "hide";
    autoNumber = autoGenerator();
    AutoNumber();
    printcounts();
    
    

}
function registerEvents(){
document.getElementById('add').addEventListener('click',addProduct);
document.getElementById('delete').addEventListener('click',deleteProduct);
document.getElementById('update').addEventListener('click',updateProduct);
document.getElementById('sortby').addEventListener('change', doneSort);
document.getElementById('sort').addEventListener('click',Hide);
document.getElementById('searchby').addEventListener('change', doneSearch);
document.getElementById('search').addEventListener('click',Hides);
}

function printcounts(){
    document.getElementById("total").innerHTML =  productOperations.products.length;
    document.querySelector('#mark').innerText = productOperations.countMark();
    document.querySelector('#unmark').innerText = productOperations.products.length - productOperations.countMark();

 }
 function printProducts(products){
    document.querySelector('#products').innerHTML = '';
    products.forEach(printProduct);
}

function toggleMark(){
    console.log("toggle mark ",this);
    var icon = this;
    var id = icon.getAttribute("pid");
    var tr = icon.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    productOperations.toggleMark(id);
    printcounts();
   
}
function deleteProduct(){
    productOperations.remove();
    printProducts(productOperations.products);
    printcounts();
    }
    
    function updateProduct(){
        for(let key in productEditObject){
            if(key=='markForDelete' || key=='id'){
                continue;
            }
            
            productEditObject[key] = document.querySelector('#'+key).value;
        }
        printProducts(productOperations.products);
    }
    var productEditObject ;

    function edit(){
        console.log("edit call ",this);
        var id = this.getAttribute('pid');
        productEditObject = productOperations.search(id);
        for(let key in productEditObject){
            if(key=='markForDelete'){
                continue;
            }
            if(key=='id'){
                document.querySelector('#'+key).innerText =  productEditObject[key];
                continue;
            }
            document.querySelector('#'+key).value = productEditObject[key];
        }
    }


    function Hides() {
        var divs = document.querySelector("#Divsearch");
        divs.classList.toggle('hide');
    }

    function doneSearch(){
        var order=document.querySelector('#searchValue').value;
        var searchBy=document.querySelector('#searchby').value;
        if( searchBy!=-1){
        printProduct(productOperations.searchs(searchBy,order));
        }
    }
    

    function Hide() {
        var div = document.querySelector("#Divsort");
        div.classList.toggle('hide');
    }

    function doneSort() {
        var sortBy = this.value;
        printProducts(productOperations.sort(sortBy, 'A'));
    }

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
 function AutoNumber(){
    document.querySelector('#id').innerText =autoNumber.next().value;
}



 function printProduct(product){
    printcounts();
     var tbody = document.getElementById('products');
     var tr = tbody.insertRow();
     var index = 0;
     for(let key in product){
        if(key=='markForDelete'){
            continue;
        }

         if(key=='url'  ){
             tr.insertCell(index).appendChild(createImage(product[key]));
             index++;
             continue;
         }
         if(key=='color')
         {
            tr.insertCell(index).appendChild(colour(product[key]));
             index++;
             continue; 
         }
         
         tr.insertCell(index).innerText = product[key];

         index++;
     }
     var td = tr.insertCell(index);
     td.appendChild(createIcon('fas fa-trash',toggleMark,product.id));
     td.appendChild(createIcon('fas fa-edit',edit,product.id));
 }
 function createIcon(className,fn,id){
    var icon = document.createElement('i');
   icon.className = className;
   icon.setAttribute("pid",id);
   icon.classList.add('mr-2');
   icon.classList.add('hand');
   icon.addEventListener('click',fn);
    return icon;
}

function addProduct(){
    var product= new Product();
    for(let key in product){
        if(key=='markForDelete'){
            continue;
        }

        if(key=='id'){
            product[key] = document.getElementById(key).innerText;
            continue;  
           }
        product[key]=document.getElementById(key).value;

        
    }
    productOperations.add(product);
    printProduct(product);
    AutoNumber();
}