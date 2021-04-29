// local meals data
const meals = [
  {
    id: 1,
    name: `Zöld szélesmetélt fetával<br> (spenótos, zöldborsós, cukkinis)`,
    ingridients: "Hozzávalók:",
    img:
      "./mypasta.jpg",
    recipe:
    `<div id="recipe">
    <ul>
    <li> </li>
    <li> 1 csokor újhagyma</li>
    <li> 2 gerezd fokhagyma</li>
    <li> 50 dkg cukkini</li>
    <li> 3 ek olívaolaj</li>
    <li> 30 dkg zöldborsó (fagyasztott)</li>
    <li> só, frissen őrölt bors</li>
    <li> 2,5 dl főzőtejszín</li>
    <li> 10 dkg bébispenót</li>
    <li> 50 dkg szélesmetélt (tagliatelle)</li>
    <li> 20 dkg feta sajt</li>
    <li></li>
    </ul>
    <h3>Könnyen elkészíthető a következőképpen<br> Négy lépésben(~30 perc):</h3>
    <ul>  
  <li>1. Az újhagymát megtisztítjuk, vékonyra karikázzuk. A fokhagymát finomra vágjuk. A cukkini szárvégeit levágjuk, nagy lyukú reszelőn lereszeljük.</li>
  <li>2. A serpenyőt előmelegítjük, beleöntjük az olajat, megpároljuk benne az újhagymát, majd a fokhagymát, hozzáadjuk a reszelt cukkinit és a borsót.</li>
  <li>3. Sózzuk, borsozzuk, 1-2 dl vizet öntünk alá, megpároljuk. Felöntjük a tejszínnel, 2 percig főzzük. A megmosott, lecsepegtetett spenótot a forró raguhoz adjuk, ezzel már nem főzzük, a melegtől úgyis összeesik.</li>
  <li>4. A tésztát lobogó, sós vízben kifőzzük. Leszűrjük, összeforgatjuk a szósszal. Fetát morzsolunk a tetejére, így tálaljuk.</li>
</ul>
    </div>`,
    fullRecipe :
    `<h3>Könnyen elkészíthető a következőképpen<br> Négy lépésben(~30 perc):</h3>
    <ul>  
  <li>1. Az újhagymát megtisztítjuk, vékonyra karikázzuk. A fokhagymát finomra vágjuk. A cukkini szárvégeit levágjuk, nagy lyukú reszelőn lereszeljük.</li>
  <li>2. A serpenyőt előmelegítjük, beleöntjük az olajat, megpároljuk benne az újhagymát, majd a fokhagymát, hozzáadjuk a reszelt cukkinit és a borsót.</li>
  <li>3. Sózzuk, borsozzuk, 1-2 dl vizet öntünk alá, megpároljuk. Felöntjük a tejszínnel, 2 percig főzzük. A megmosott, lecsepegtetett spenótot a forró raguhoz adjuk, ezzel már nem főzzük, a melegtől úgyis összeesik.</li>
  <li>4. A tésztát lobogó, sós vízben kifőzzük. Leszűrjük, összeforgatjuk a szósszal. Fetát morzsolunk a tetejére, így tálaljuk.</li>
</ul>`,
  },
  {
    id: 2,
    name: "cézár saláta",
    ingridients: "Hozzávalók:",
    img:
      "./mysalad.jpg",
    recipe:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    fullRecipe :
    `<h3>Könnyen elkészíthető a következőképpen<br> Négy lépésben(~30 perc):</h3>
    <ul>  
  <li>1. Az újhagymát megtisztítjuk, vékonyra karikázzuk. A fokhagymát finomra vágjuk. A cukkini szárvégeit levágjuk, nagy lyukú reszelőn lereszeljük.</li>
  <li>2. A serpenyőt előmelegítjük, beleöntjük az olajat, megpároljuk benne az újhagymát, majd a fokhagymát, hozzáadjuk a reszelt cukkinit és a borsót.</li>
  <li>3. Sózzuk, borsozzuk, 1-2 dl vizet öntünk alá, megpároljuk. Felöntjük a tejszínnel, 2 percig főzzük. A megmosott, lecsepegtetett spenótot a forró raguhoz adjuk, ezzel már nem főzzük, a melegtől úgyis összeesik.</li>
  <li>4. A tésztát lobogó, sós vízben kifőzzük. Leszűrjük, összeforgatjuk a szósszal. Fetát morzsolunk a tetejére, így tálaljuk.</li>
</ul>`,
  },
  {
    id: 3,
    name: "marhapörkölt",
    ingridients: "Hozzávalók:",
    img:
      "./mystew.jpg",
    recipe:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    fullRecipe :
      `<h3>Könnyen elkészíthető a következőképpen<br> Négy lépésben(~30 perc):</h3>
      <ul>  
    <li>1. Az újhagymát megtisztítjuk, vékonyra karikázzuk. A fokhagymát finomra vágjuk. A cukkini szárvégeit levágjuk, nagy lyukú reszelőn lereszeljük.</li>
    <li>2. A serpenyőt előmelegítjük, beleöntjük az olajat, megpároljuk benne az újhagymát, majd a fokhagymát, hozzáadjuk a reszelt cukkinit és a borsót.</li>
    <li>3. Sózzuk, borsozzuk, 1-2 dl vizet öntünk alá, megpároljuk. Felöntjük a tejszínnel, 2 percig főzzük. A megmosott, lecsepegtetett spenótot a forró raguhoz adjuk, ezzel már nem főzzük, a melegtől úgyis összeesik.</li>
    <li>4. A tésztát lobogó, sós vízben kifőzzük. Leszűrjük, összeforgatjuk a szósszal. Fetát morzsolunk a tetejére, így tálaljuk.</li>
  </ul>`,
  },
  {
    id: 4,
    name: "marha vadasan",
    ingridients: "Hozzávalók:",
    img:
      "./myvadas.jpg",
    recipe:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    fullRecipe :
    `<h3>Könnyen elkészíthető a következőképpen<br> Négy lépésben(~30 perc):</h3>
    <ul>  
  <li>1. Az újhagymát megtisztítjuk, vékonyra karikázzuk. A fokhagymát finomra vágjuk. A cukkini szárvégeit levágjuk, nagy lyukú reszelőn lereszeljük.</li>
  <li>2. A serpenyőt előmelegítjük, beleöntjük az olajat, megpároljuk benne az újhagymát, majd a fokhagymát, hozzáadjuk a reszelt cukkinit és a borsót.</li>
  <li>3. Sózzuk, borsozzuk, 1-2 dl vizet öntünk alá, megpároljuk. Felöntjük a tejszínnel, 2 percig főzzük. A megmosott, lecsepegtetett spenótot a forró raguhoz adjuk, ezzel már nem főzzük, a melegtől úgyis összeesik.</li>
  <li>4. A tésztát lobogó, sós vízben kifőzzük. Leszűrjük, összeforgatjuk a szósszal. Fetát morzsolunk a tetejére, így tálaljuk.</li>
</ul>`,
  },
];

// select items
const img = document.getElementById("person-img");
const mealName = document.getElementById("meal-name");
const ingridients = document.getElementById("ingridients");
const recipe = document.getElementById("recipe");

const moreBtn = document.querySelector(".morebtn");
const lessBtn = document.querySelector(".lessbtn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  console.log("shake and bake")
  showMeal(currentItem)
});

// show a meal based on item

function showMeal() {
  const item = meals[currentItem];
  img.src = item.img;
  mealName.innerHTML = item.name;
  ingridients.textContent = item.ingridients;
  recipe.innerHTML = item.recipe;
}

/* show the recipe - started to develop this function

function showRecipe() {
  const item = meals[currentItem];
  recipe.innerHTML += item.fullRecipe;
  moreBtn.innerHTML = `<h4 class="lessbtn"><button class="more-btn">
  <i class="fas fa-chevron-left"></i>
</button>
  <strong>...elrejtés</strong>
  </h4>`;
}

moreBtn.addEventListener('click', function () {
console.log("moregomb")
showRecipe(currentItem)
})

lessBtn.addEventListener('click', function () {
  console.log("lessgomb")
  showMeal()
  })

  html rész:
            <h4 class="morebtn">
          <strong>...lássuk a receptet</strong>
          <button class="more-btn">
            <i class="fas fa-chevron-right"></i>
          </button></h4>
*/

// show next meal

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > meals.length -1) {
    currentItem = 0;
  }

  showMeal();
})

prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem  < 0) {
    currentItem = meals.length -1;
  }
  showMeal();
})

// show RANDOM meal

randomBtn.addEventListener('click', function () {
    currentItem = getRandomNumber();
    showMeal();
  });

function getRandomNumber() {
  return Math.floor(Math.random() * meals.length);
}