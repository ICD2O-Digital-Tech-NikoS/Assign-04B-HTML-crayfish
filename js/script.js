// Created by: Niko
// Created on: may 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function orderPrice() {

  // 
  let size = document.getElementById("size").value;
  let noSize = document.getElementById("size-option1").value
  let sizePrice = 0;

  if (size == noSize) {
    alert("Please select a size");
  }

  // 
  if (size == "small") {
    sizePrice = 0.1;
  } else if (size == "medium") {
    sizePrice = 0.15;
  } else if (size == "large") {
    sizePrice = 0.45;
  } else if (size == "xl") {
    sizePrice = 1;
  }

  let toppingOne = document.getElementById("topping1");
  let toppingTwo = document.getElementById("topping2");
  let toppingThree = document.getElementById("topping3");
  let toppingFour = document.getElementById("topping4");
  let toppingFive = document.getElementById("topping5");
  let toppingSix = document.getElementById("topping6");
  let toppingOnePrice = 0;
  let toppingTwoPrice = 0;
  let toppingThreePrice = 0;
  let toppingFourPrice = 0;
  let toppingFivePrice = 0;
  let toppingSixPrice = 0;

  // 
  if (toppingOne.checked == true) {
    toppingOnePrice = 1;
  }
  if (toppingTwo.checked == true) {
    toppingTwoPrice = 3;
  } 
  if (toppingThree.checked == true) {
    toppingThreePrice = 20;
  }
  if (toppingFour.checked == true) {
    toppingFourPrice = 30000;
  }
  if (toppingFive.checked == true) {
    toppingFivePrice = 45;
  }
  if (toppingSix.checked == true) {
    toppingSixPrice = 25;
  }

  let subtotal = sizePrice + toppingOnePrice + toppingTwoPrice + toppingThreePrice + toppingFourPrice + toppingFivePrice + toppingSixPrice;
  let tax = subtotal * 0.13;
  let total = subtotal - tax;

  document.getElementById("user-info").innerHTML = "Subtotal: $" + subtotal.toFixed(2) + "<br>Tax: $" + tax.toFixed(2) + "<br>Total: $" + total.toFixed(2);
 
}
