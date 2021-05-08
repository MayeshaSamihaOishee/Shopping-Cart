class ShoppingCart {

       constructor () {
           this.productList = [];
       }

    addProduct (product,quantity) {
       const existingProduct = this.productList.find(({name}) => name === product.name );
   
        if (existingProduct) {
   
           existingProduct.quantity = existingProduct.quantity + quantity;
       }
        else {
   
           this.productList.push({name: product.name, price: product.price, quantity});
           
        }
 }

       removeProduct (product, quantity) {
        
       const existingProduct = this.productList.find(({name}) => name === product.name ); 
 
           if (!existingProduct) {
   throw new Error ('Product doesnot exist'); 

           }

            if (existingProduct.quantity < quantity) {
   
               throw new Error ('This is not possible'); 
    
           }
           else {
               existingProduct.quantity = existingProduct.quantity - quantity;
           }
       }

  total () {
   
           return this.productList.reduce((a,v) => a+=v.price*v.quantity, 0); 
       }
   
   }

 module.exports = {ShoppingCart}; 

