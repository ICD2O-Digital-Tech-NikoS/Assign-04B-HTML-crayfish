// Created by: Niko
// Created on: may 2024
// This file contains the JS functions for index.html


"use strict"
//function to see what rating of movies user can watch
function museumAdmission() {

  // get user input and declare it as a variable for their age
  let size = document.getElementById("size").value;
  let topping = document.getElementById("toppings").value;
  let subtotal = size + topping;
  let tax = subtotal * 0.13;

  // Check if size is 'small' and set it to 0.1
  if (size === "small") {
    size = 0.1;
  } else if (size === "medium") {
    size = 0.15;
  } else if (size === "large") {
    size = 0.45;
  } else if (size === "xl") {
    size = 1;
  } else {
    document.getElementById("user-info").innerHTML = "please select a size";
  }

  // Check if size is 'small' and set it to 0.1
  if (topping === "topping1") {
    topping = 1;
  } else if (topping === "topping2") {
    topping = 3;
  } else if (topping === "topping3") {
    topping = 20;
  } else if (topping === "topping4") {
    topping = 30000;
  } else if (topping === "topping5") {
    topping = 45;
  } else if (topping === "topping6") {
    topping = 25;
  } else {
    document.getElementById("user-info").innerHTML = "please select a topping";
  }

  document.getElementById("user-info").innerHTML = "Subtotal: $" + subtotal;
  document.getElementById("user-info").innerHTML = "Tax: $" + tax;
  document.getElementById("user-info").innerHTML = "Total: $" + subtotal - tax;
}
