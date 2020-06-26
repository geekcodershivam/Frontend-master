const productOperations = {
    products :[],
    add(product){
        this.products.push(product);
        console.log("Added ",this.products);
    },
    countMark(){
        return  this.products.filter(product=>product.markForDelete).length;
     },

     toggleMark(id){
        var productObject = this.search(id);    
        productObject.markForDelete= !productObject.markForDelete;
    },

    remove(){
    this.products = this.products.filter(product=>!product.markForDelete);
    },
    search(id){
        return this.products.find(product=>product.id==id); 
    },
    update(){
    
    },
    searchs(key,order){
        if(!order){
            return this.products;
        }
        return this.products.filter(product=>product[key]==order);
    
    },
    sort(key,order){
        if(key=='id' || key=='price'){
            if(order=='a' || order=='A'){
                return this.products.sort((first, second)=>first[key]-second[key])
            }
            else{
                return this.products.sort((first, second)=>second[key]-first[key]) 
            }
            }
            else{
                if(order=='a' || order=='A'){
                    return this.products.sort((first, second)=>first[key].localeCompare(second[key]));
                }
                else{
                    return this.products.sort((first, second)=>second[key].localeCompare(first[key])); 
                } 
            }
    
    }
}