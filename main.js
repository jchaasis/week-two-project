// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum=0;
  let prices=[];

  for (let i=0; i<data.length; i++){
      prices.push(data[i].price);
  }

  for (let i=0; i<prices.length; i++){
    sum += prices[i];
  }

  let avg = Math.round(sum)/prices.length;

  console.log("The average price is " +"$" + avg);
}





// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
let items=[];

  for(let i=0; i<data.length; i++){
      if (data[i].price >= 14.00 && data[i].price <= 18.00){
      items.push(data[i].title);}
  }
  console.log(items);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:

  for(let i=0; i<data.length; i++){
    if (data[i].currency_code === "GBP"){
      console.log(data[i].title + " costs " + data[i].price + " " + "pounds.")
    }
  }
}

// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  for (let i=0; i< data.length; i++){

      for ( let m=0; m < data[i].materials.length; m++){
        if (data[i].materials[m] === "wood"){
        console.log(data[i].title + " " + "is made of wood");
        }
      }
    }

}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:

  for (let i=0; i<data.length; i++){
    if ( data[i].materials.length>= 8){
      console.log( data[i].title + " " + "has " + data[i].materials.length + " materials.");

    for (let m = 0; m < data[i].materials.length; m++){
      console.log("-"+ data[i].materials[m]);
      }
    }
  }
}



// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
  let homeMade = [];
  for (let i=0; i< data.length; i++){
    if (data[i].who_made === "i_did"){
      homeMade.push(data[i].who_made)
    }
  }
    console.log(homeMade.length + " " + "items were made by the sellers.");
}

// Supplemental:

//List all materials in the dataset in a single array (no duplicates).

function question7 () {

let materialsTotal = [];

for (let i=0; i<data.length; i++){
  for (let m=0; m<data[i].materials.length; m++){
    if ( data[i].materials !== data[i].materials[m]){
      materialsTotal.push( data[i].materials[m]);

      materialsTotal.sort();

      for (let s=0; s<materialsTotal.length; s++){
        if(materialsTotal[s] == materialsTotal[s+1]){
          materialsTotal.splice(s,1);
        }
      }
    }
  }
}
console.log(materialsTotal);

}
