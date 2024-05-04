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
  let sizeMessage = "";

  if (size == noSize) {
    alert("Please select a size");
    orderSummary = "";
    subtotal = null;
    tax = null;
    total = null;
  }

  // 
  if (size == "small") {
    sizePrice = 0.1;
    sizeMessage = "Crayfish left back leg";
  } else if (size == "medium") {
    sizePrice = 0.15;
    sizeMessage = "Crayfish left 2nd back leg";
  } else if (size == "large") {
    sizePrice = 0.45;
    sizeMessage = "Crayfish left claw";
  } else if (size == "xl") {
    sizePrice = 1;
    sizeMessage = "Crayfish abdomen";
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
  let toppingOneMessage = "";
  let toppingTwoMessage = "";
  let toppingThreeMessage = "";
  let toppingFourMessage = "";
  let toppingFiveMessage = "";
  let toppingSixMessage = "";

  // 
  if (toppingOne.checked == true && size != noSize) {
    toppingOnePrice = 1;
    toppingOneMessage = "stale sun dried feta cheese, ";
  }
  if (toppingTwo.checked == true && size != noSize) {
    toppingTwoPrice = 3;
    toppingTwoMessage = "incandescent glass shards, ";
  } 
  if (toppingThree.checked == true) {
    toppingThreePrice = 20;
    toppingThreeMessage = "19th century apple flavored radioactive plate chips (uranium 235), ";
  }
  if (toppingFour.checked == true) {
    toppingFourPrice = 30000;
    toppingFourMessage = "small Paleo-Balkanic elves named mahmood, ";
  }
  if (toppingFive.checked == true) {
    toppingFivePrice = 45;
    toppingFiveMessage = "Lama’s spit from a camel that has traveled through florida for a total of 7 hours and 31 minutes (rare), ";
  }
  if (toppingSix.checked == true) {
    toppingSixPrice = 25;
    toppingSixMessage = "Powdered pollution^2, ";
  }

  let dirtWater = document.getElementById("option-1");
  let dogWater = document.getElementById("option-2");
  let noSide = document.getElementById("option-3").value
  let dirtWaterPrice = 0;
  let dogWaterPrice = 0;
  let dirtWaterMessage = "";
  let dogWaterMessage = "";

  if (dirtWater.checked == true) {
    dirtWaterPrice = 13;
    dirtWaterMessage = ", and a Dirt Water beverage from a watering hole named Ernesto, who had it in bad with a yiddish garbage man and got beat up while doing the tour de france on a unicycle made from stale baguettes.";
  }
  else if (dogWater.checked == true) {
    dogWaterPrice = 8;
    dogWaterMessage = ", and a Dog Water beverage.";
  } 
  else if (noSide.checked == true) {
    dirtWaterPrice = 0;
    dogWaterPrice = 0;
  } else {dirtWaterMessage = ".";}

  let subtotal = sizePrice + toppingOnePrice + toppingTwoPrice + toppingThreePrice + toppingFourPrice + toppingFivePrice + toppingSixPrice + dirtWaterPrice + dogWaterPrice;
  let tax = subtotal * 0.13;
  let total = subtotal - tax;

  let orderSummary = "Your ordered: One " + sizeMessage + ", with " + toppingOneMessage + toppingTwoMessage + toppingThreeMessage + toppingFourMessage + toppingFiveMessage + toppingSixMessage + "on top" + dogWaterMessage + dirtWaterMessage;

  document.getElementById("user-info").innerHTML = orderSummary + "<br>Subtotal: $" + subtotal.toFixed(2) + "<br>Tax: $" + tax.toFixed(2) + "<br>Total: $" + total.toFixed(2);
 
}
