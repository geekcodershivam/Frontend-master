window.addEventListener('load',init);
function init(){

    function showToUsers() {
        productOperations.products=[];
        var products=firebase.database().ref('/products');
        products.on('value',(snapshot)=>{
          let prods=snapshot.val();
          for(let key in prods){
            let fireBaseProductObject =  prods[key];
            clone(fireBaseProductObject);
          }
          showProducts(productOperations.products);
        })
        
      }
function showProducts(products){
    products.forEach(showProduct);
  }
  function showProduct(product){
    console.log(product);
    var div=document.querySelector('#producttousers');
      var div1=document.createElement('div');
      var img=document.createElement('img');
      img.src=product.url;
      img.classList='size';
      div1.appendChild(img);
       var name=document.createElement('span');
       name.innerHTML= product.name;
      var desc=document.createElement('span');
      desc.innerText=product.desc;
       var price=document.createElement('span');
       price.innerText=product.price;
       var color=document.createElement('div');
       color.classList='sizecolor1';
       color.style.backgroundColor=product.color;
       //color.style.display='inline';
       var but=document.createElement('button');
       but.innerText="Add To Cart";
       but.setAttribute("class","addtocart");
       but.setAttribute('id',product.id);
       div1.appendChild(name);
      div1.appendChild(desc);
       div1.appendChild(price);
       div1.appendChild(color);
       div1.appendChild(but);
      div.appendChild(div1);
      var cartbuttons=document.querySelectorAll('.addtocart');
      cartbuttons.forEach(function(item){
        item.addEventListener('click',addCart);
      });
    
    }