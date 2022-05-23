//store the products array in localstorage as "products"
var data = JSON.parse(localStorage.getItem("products")) || [];

//creating function to store product detail in form of array of obj in localstorage
function productDetails(t,d,p,i){
    this.type=t;
    this.descr = d;
    this.price = p;
    this.img = i;
}

document.getElementById("add_product").addEventListener("click",addproduct);

function addproduct(){
    event.preventDefault();
    let form = document.getElementById('products');
    
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p = new productDetails(type,desc,price,image)
    data.push(p)
     
    


    localStorage.setItem("products",JSON.stringify(data))

    window.location.reload();  // using to empty all input text 

}