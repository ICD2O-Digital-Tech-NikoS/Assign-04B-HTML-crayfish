// Created by: Niko
// Created on: may 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function orderPrice() {

  // gets selected size from dropdown menu 
  let size = document.getElementById("size").value;
  // declares variable for the option which is selected to indicated the user has chosen no size
  let noSize = document.getElementById("size-option1").value
  // variable of price of current selected size
  let sizePrice = 0;
  // message displayed in the order summary for the selected size
  let sizeMessage = "";

  // sets sizePrice to price of a small size, and changes message for the order summary to match description of the item
  if (size == "small") {
    sizePrice = 0.1;
    sizeMessage = "Crayfish left back leg";
  } 
    // sets sizePrice to price of a medium size, and changes message for the order summary to match description of the item
  else if (size == "medium") {
    sizePrice = 0.15;
    sizeMessage = "Crayfish left 2nd back leg";
  }
  // sets sizePrice to price of a large size, and changes message for the order summary to match description of the item
  else if (size == "large") {
    sizePrice = 0.45;
    sizeMessage = "Crayfish left claw";
  } 
  // sets sizePrice to price of a XL size, and changes message for the order summary to match description of the item
  else if (size == "xl") {
    sizePrice = 1;
    sizeMessage = "Crayfish abdomen";
  }
  // declares variables for each topping option
  let toppingOne = document.getElementById("topping1");
  let toppingTwo = document.getElementById("topping2");
  let toppingThree = document.getElementById("topping3");
  let toppingFour = document.getElementById("topping4");
  let toppingFive = document.getElementById("topping5");
  let toppingSix = document.getElementById("topping6");
  // declares variable for the price of each topping and sets it to zero
  let toppingOnePrice = 0;
  let toppingTwoPrice = 0;
  let toppingThreePrice = 0;
  let toppingFourPrice = 0;
  let toppingFivePrice = 0;
  let toppingSixPrice = 0;
  // declares variables for the message to be displayed in the order summary should the user select one or more of these toppings
  let toppingOneMessage = "";
  let toppingTwoMessage = "";
  let toppingThreeMessage = "";
  let toppingFourMessage = "";
  let toppingFiveMessage = "";
  let toppingSixMessage = "";

  // if the user selects the first topping and a size (a size because otherwise nothing is displayed since the user needs to select a size first), then it changes the price of the topping to what the price of the topping is on the menu, and changes the message to match the description of the topping
  if (toppingOne.checked == true && size != noSize) {
    toppingOnePrice = 1;
    toppingOneMessage = "stale sun dried feta cheese, ";
  }
  // if the user selects the second topping and a size , then it changes the price of the topping to what the price of the topping is on the menu, and changes the message to match the description of the topping
  if (toppingTwo.checked == true && size != noSize) {
    toppingTwoPrice = 3;
    toppingTwoMessage = "incandescent glass shards, ";
  } 
  // if the user selects the third topping and a size , then it changes the price of the topping to what the price of the topping is on the menu, and changes the message to match the description of the topping
  if (toppingThree.checked == true) {
    toppingThreePrice = 20;
    toppingThreeMessage = "19th century apple flavored radioactive plate chips (uranium 235), ";
  }
  // if the user selects the fourth topping and a size , then it changes the price of the topping to what the price of the topping is on the menu, and changes the message to match the description of the topping
  if (toppingFour.checked == true) {
    toppingFourPrice = 30000;
    toppingFourMessage = "small Paleo-Balkanic elves named mahmood, ";
  }
  // if the user selects the fifth topping and a size , then it changes the price of the topping to what the price of the topping is on the menu, and changes the message to match the description of the topping
  if (toppingFive.checked == true) {
    toppingFivePrice = 45;
    toppingFiveMessage = "Lama’s spit from a camel that has traveled through florida for a total of 7 hours and 31 minutes (rare), ";
  }
  // if the user selects the second topping and a size , then it changes the price of the topping to what the price of the topping is on the menu, and changes the message to match the description of the topping
  if (toppingSix.checked == true) {
    toppingSixPrice = 25;
    toppingSixMessage = "Powdered pollution^2, ";
  }

  // declares variables for the radio buttons
  let dirtWater = document.getElementById("option-1");
  let dogWater = document.getElementById("option-2");
  let noSide = document.getElementById("option-3").value
  // declares variable for the price of the sides and sets it to zero
  let dirtWaterPrice = 0;
  let dogWaterPrice = 0;
  // declares variables for the message to be displayed in the order summary should the user select one of these sides
  let dirtWaterMessage = "";
  let dogWaterMessage = "";

  // if the user selects a this side, then it changes the price of the side to what the price of the side is on the menu, and changes the message to match the description of the side
  if (dirtWater.checked == true) {
    dirtWaterPrice = 13;
    dirtWaterMessage = ", and a Dirt Water beverage from a watering hole named Ernesto, who had it in bad with a yiddish garbage man and got beat up while doing the tour de france on a unicycle made from stale baguettes.";
  }
  // if the user selects a this side instead, then it changes the price of the side to what the price of the side is on the menu, and changes the message to match the description of the side
  else if (dogWater.checked == true) {
    dogWaterPrice = 8;
    dogWaterMessage = ", and a Dog Water beverage.";
  } 
  // if the user selects this option, then it sets the prices of both sides to zero, since the option is for no side. This is only necessary if the user selects something and then decides they want to unselect it. 
  else if (noSide.checked == true) {
    dirtWaterPrice = 0;
    dogWaterPrice = 0;
  } else {dirtWaterMessage = ".";}

  // calculates subtotal for order
  let subtotal = sizePrice + toppingOnePrice + toppingTwoPrice + toppingThreePrice + toppingFourPrice + toppingFivePrice + toppingSixPrice + dirtWaterPrice + dogWaterPrice;
  // calculates tax for subtotal
  let tax = subtotal * 0.13;
  // calculates total for order
  let total = subtotal + tax;
  
  // displays the order summary
  let orderSummary = "Your ordered: One " + sizeMessage + ", with " + toppingOneMessage + toppingTwoMessage + toppingThreeMessage + toppingFourMessage + toppingFiveMessage + toppingSixMessage + "totally non harmful nitrous oxide, and hydrochloric acid on top";
  

  // stops unnecessary things from being displayed if the user does not select a size.
  if (size == noSize) {
    alert("Please select a size");
    orderSummary = "";
    subtotal = 0;
    tax = 0;
    total = 0;
  } else {
    document.getElementById("user-info").innerHTML = orderSummary + dogWaterMessage + dirtWaterMessage + "<br>Subtotal: $" + subtotal.toFixed(2) + "<br>Tax: $" + tax.toFixed(2) + "<br>Total: $" + total.toFixed(2);
  }
}
