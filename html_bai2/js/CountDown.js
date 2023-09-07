
export function count_down() {
  let minute = 1;
  let seconds = 0;
  let count = document.querySelector(".count");
 let box_cart = document.querySelector(".box-cart");

 setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minute--;
    }

    if (minute == 0 && seconds == 0) {
      box_cart.style.display = "none";
    }
    count.innerText = `${minute > 10 ? "" : 0}${minute}:${
      seconds < 10 ? 0 : ""
    }${seconds}`;
  }, 1000);
  
}

 