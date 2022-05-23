let data = JSON.parse(localStorage.getItem("products")) || [];  // calling data form localstorage
showproduct()     // here calling showproduct function to display all product in inventory page
function showproduct(){
    data.map(function(el,index){
        let box= document.getElementById('all_products');

        //creating div to append data 
        let div = document.createElement('div');
        

        let img = document.createElement('img');
        img.src= el.img;

        let t = document.createElement('p');
        t.innerText = el.type;

        let d = document.createElement('p');
        d.innerText= el.descr;

        let p = document.createElement('p');
        p.innerText = el.price;
        
        //adding remove button to delete product form inventory page as well as form DOM/localstorage
        let btn = document.createElement('button');
        btn.innerText = "Remove";
        btn.addEventListener("click",function(el){
            removeItem(el,index)
        })
        div.append(img,t,d,p,btn)
        // console.log(div)
        // appending div to data to show all product and details
        box.append(div)
        
    })

}


function removeItem(el,index){
    // console.log(data)
    data.splice(index,1)

    localStorage.setItem("products",JSON.stringify(data))
    // showproduct()
    // to show new data using window.location.reload
    window.location.reload();
}

