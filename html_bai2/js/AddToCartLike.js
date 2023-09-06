import { ProductAdd } from "./ProductAdd.js";
 let ProductAddLike = [];
 const add_like = document.querySelectorAll(".addlike");

 const  cart_lie = document.getElementById("cart_lie");
     
 add_like.forEach((buttons) =>{
        buttons.addEventListener("click", () =>{
            const productAdd_id = parseInt(buttons.getAttribute("productAdd_id")); // convert string to Interger...
            if (ProductAddLike.some((productAdd) => productAdd.id === productAdd_id)) {
                // kiem tra san pham vua them co trong gio hang chua
                ProductAddLike.forEach((data, index) => {
                  if (data.id === productAdd_id) {
                    ProductAddLike[index].quantity = ProductAddLike[index].quantity + 1; // neu co thi update quantiy len 1
                  }
                });
              } else {
                // neu khong co trong gio hang thi them moi san pham vao
                ProductAdd.forEach((data) => {
                  if (data.id === productAdd_id) {
                    ProductAddLike.push({ ...data, quantity: 1 });
                  }
                });
              }
            //   box_cart.style.display = "flex";
              showlike();
        });

 });
// function showlike(){
//     // cart_lie.innerHTML = "";
//     ProductAdd.forEach((productAdd) =>{
//            cart_lie.innerHTML +=`
//             <div class="item-product-detail-cart  ">
//             <div class="img-product-cart">
//             <img src="${productAdd.image}" />
//             </div>
//             <div class="text-item-cart">
//                <h1>${productAdd.name}</h1>
//                <div class="item-size-color">
//                    <span>${productAdd.size[0]}, </span>
//                    <span>${productAdd.color[0]}</span>
//                </div>
//                <span class="item-price-sell">$${productAdd.price_sell}</span>
//                  <div class="chung">
//                  <div class="tang-giam"  productAdd_id="${productAdd.id}">
//                  <span class="prev_btn">-</span>
//                    <span class="item-quantity">${productAdd.quantity < 10 ? 0 : ""}${ productAdd.quantity }</span>
//                  <span class="next_btn">+</span>
//                  </div>
//                  <div class ="product_add_also_like" >
//                       <button class = "addlike" productAdd_id=${productAdd.id}>
//                       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <g clip-path="url(#clip0_1674_1280)">
//                       <path d="M6.00004 14.6666C6.36823 14.6666 6.66671 14.3682 6.66671 14C6.66671 13.6318 6.36823 13.3333 6.00004 13.3333C5.63185 13.3333 5.33337 13.6318 5.33337 14C5.33337 14.3682 5.63185 14.6666 6.00004 14.6666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                       <path d="M13.3333 14.6666C13.7015 14.6666 14 14.3682 14 14C14 13.6318 13.7015 13.3333 13.3333 13.3333C12.9651 13.3333 12.6666 13.6318 12.6666 14C12.6666 14.3682 12.9651 14.6666 13.3333 14.6666Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                       <path d="M0.666626 0.666687H3.33329L5.11996 9.59335C5.18092 9.90029 5.3479 10.176 5.59166 10.3722C5.83541 10.5684 6.14042 10.6727 6.45329 10.6667H12.9333C13.2462 10.6727 13.5512 10.5684 13.7949 10.3722C14.0387 10.176 14.2057 9.90029 14.2666 9.59335L15.3333 4.00002H3.99996" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
//                       </g>
//                       <defs>
//                       <clipPath id="clip0_1674_1280">
//                       <rect width="16" height="16" fill="white"></rect>
//                       </clipPath>
//                       </defs>
//                       </svg>
//                       </button>
//                  </div>
//                  </div>
   
//             </div>
//             </div>

//             `
//     });
// }


const slider_product = document.querySelector(".also-add");
const prev = document.getElementById("prev-slider");
const next = document.getElementById("next-slider");
let currentIndex = 0;



next.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >  slider_product.children.length - 2) {
        currentIndex = slider_product.children.length - 2;
      }
    // currentIndex = (currentIndex + 1) % slider_product.children.length;
    updateSlider(currentIndex);
  });
  
  prev.addEventListener('click', () => {
    currentIndex-- ;
    if (currentIndex < 0 ) {
      currentIndex = 0;
        // currentIndex = slider_product.children.length - 2;
      }
    // currentIndex = (currentIndex - 1 + slider_product.children.length) % slider_product.children.length;
    updateSlider(currentIndex);
  });
  function updateSlider() {
    let sliders = document.querySelectorAll(".sliders");
    const translateX = -currentIndex * sliders[0].offsetWidth;
    slider_product.style.transform = `translateX(${translateX}px)`;
  }
 
 
  
  
  
  