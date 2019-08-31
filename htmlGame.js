
// Varibles
let scorePoints = 0;

// Item base cost
let baseCostClick = 25;
let baseCostmultiplier = 100;
let baseCostCrit = 50;
let baseCostDamage = 75;

// Damage
let clicks = 1;
let multiplier = 1;
let critChance = 0.05;
let addedDamage = 0;
let damage = 1;
let critdamage = 1;


// functions ()
update();
buy();

//Start
itemCost();
bought();

//Events
 document.getElementById("enemy").addEventListener("click", () => {
   let hit = document.getElementById('score');
   let secondscore = document.getElementById('shopscore');
   scorePoints += damage;
   hit.innerText = scorePoints + damage;
   secondscore.innerText = scorePoints + damage;

// console.log("scorepoints1: " + scorePoints);

//Changes critchance and color of bigone
   let random = Math.random();
   //console.log(random);
   if (critChance > random) {
       critdamage = 2;
       document.getElementById('enemy').className = "enemy";
   } else {
       critdamage = 1;
       document.getElementById('enemy').className = "bigone";
   }


   update();
 });

 document.getElementById("clickCost").addEventListener("click", addclicks);
 document.getElementById("multiplierCost").addEventListener("click", addDamageMultiplier);
 document.getElementById("critCost").addEventListener("click", addCritChance);
 document.getElementById("damageCost").addEventListener("click", addDamage);



function update() {
  let hit = document.getElementById('score');
  let secondscore = document.getElementById('shopscore');
  let dpc = document.getElementById('damagePoints');
  //Score
  hit.innerText = scorePoints;
  secondscore.innerText = scorePoints;
  //Damage per click
  dpc.innerText = damage;
  // console.log("DPC: " + damage);
  damage = (clicks * multiplier + addedDamage) * critdamage;
  //console.log("critChance: "+ critChance);
}



function itemCost() {
  var shopItems = document.getElementById('clickCost');
  shopItems.innerText = baseCostClick ;

  var shopItems = document.getElementById('multiplierCost');
  shopItems.innerText = baseCostmultiplier ;

  var shopItems = document.getElementById('critCost');
  shopItems.innerText = baseCostCrit ;

  var shopItems = document.getElementById('damageCost');
  shopItems.innerText = baseCostDamage ;

}


function buy(basecost) {
      if(scorePoints >= basecost ) {
          scorePoints = scorePoints - basecost;
          bought();
      }

      else if (scorePoints < basecost) {
          alert("You can not buy this item");
      }
          update();

}



function bought() {
  var clickCount = document.getElementById('clickCount');
  clickCount.innerText = "x" + clicks ;

  var multiplierCount = document.getElementById('multiplierCount');
  multiplierCount.innerText = "x" + multiplier ;

  var critCount = document.getElementById('critCount');
  critCount.innerText = "x" + critChance.toFixed(2);

  var damageCount = document.getElementById('damageCount');
  damageCount.innerText = "+" + addedDamage  ;
}

function addclicks() {
  clicks += 1;
  buy(baseCostClick);
  baseCostClick += (baseCostClick * Math.pow(2));
  console.log("cost: " + clicks);
  //console.log("clicks: " + clicks);
}

function addDamageMultiplier() {
  multiplier += 1;
  buy(baseCostmultiplier);
  //console.log("multiplier: " + multiplier);
}

function addCritChance() {
    critChance += ((critChance/100)*5) ;
    buy(baseCostCrit);
}

function addDamage() {
  addedDamage += 10;
  buy(baseCostDamage);
  //console.log("addedDamage: " + addedDamage);
}
