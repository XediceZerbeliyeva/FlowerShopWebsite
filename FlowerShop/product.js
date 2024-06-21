let openShopping = document.querySelector('#shopCard');
let closeShopping = document.querySelector('.closeShopping i');
let productElement=document.querySelector(".productElement");
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total span');
let quantity = document.querySelector('.quantity');
let productList=document.querySelector(".productList");
let shopCard=document.querySelector("#shopCard");
closeShopping.addEventListener("click",()=>{
       productList.style.display="none"
})
function shopCardClick() {
    productList.style.display="block";
    productList.style.left="70%";  
}
let products=[
    {
        product_id:1,
        product_image:"image1.jpg",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    ,
    {
        product_id:2,
        product_image:"image2.jpg",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:3,
        product_image:"image3.webp",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:4,
        product_image:"image4.webp",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:5,
        product_image:"image5.jpg",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:6,
        product_image:"image6.jpg",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:7,
        product_image:"image7.jpg",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:8,
        product_image:"image8.webp",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:9,
        product_image:"image9.webp",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:10,
        product_image:"image10.webp",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:11,
        product_image:"image11.jpg",
        product_name:"Flower Pot",
        product_price:13.99 
    },
    {
        product_id:12,
        product_image:"image12.webp",
        product_name:"Flower Pot",
        product_price:13.99 
    }
];
let listCards=[];
function initApp() {
    products.forEach((value,key)=>{
        let product_info=document.createElement("div");
        product_info.classList.add("item");
        product_info.innerHTML=`
         <img src="images/${value.product_image}"/>
         <div class="title">${value.product_name}</div>
            <div class="price">${value.product_price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
         `
         productElement.appendChild(product_info);
    })
}
initApp();
function addToCard(key) {
    if(listCards[key]==null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.product_price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div class="listProduct">
                <div ><img src="images/${value.product_image}"/></div>
                <div>${value.product_name}</div>
                <div>${value.product_price.toLocaleString()}</div>
                <div class="listInfo">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].product_price = quantity * products[key].product_price;
    }
    reloadCard();
}