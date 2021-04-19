// myFirstApp kezdete ****************************************************
// VERZIÓ : működik(egy-két elakadás, de nem vészes), TODO jQueryt át kell írni: loadPhoto, Nyilas rész, Thumbnail eseményfigyelője
// Eltároljuk a kivetített kép számát
let currentPhoto = 0;

// Adattömbbe objektumokként mentjük el a fotók adatait, leírását
let pictures = [
  {'id': 0,'photo':'images/1.jpg', 'title': 'Pines and valleys', 'description': 'You can see many pines and mountains in this fabulous photo', 'active': ' active', 'activate': 'thumbnail'
  }, 
  {'id': 1,'photo':'images/2.jpg', 'title': 'Lady by the lake', 'description': "This photo has taken near a fantastic lake, and there is a woman's back ", 'active': '', 'activate': 'thumbnail active'
  }, 
  {'id': 2,'photo':'images/3.jpg', 'title': 'Skyscraper', 'description': "You can see a huge skyscraper's windows in this picture", 'active': '', 'activate': ' active'
  }, 
  {'id': 3,'photo':'images/4.jpg', 'title': 'Valley of fairytales', 'description': 'Valley of fairytales: in this photograph you can see a lake with an unbellivable aquamarine colour, woods of pines and beautiful mountains', 'active': '', 'activate': ' active'
  },
//  {'id': 4,'photo':'images/1.jpg', 'title': 'Pines and valleys', 'description': 'You can see many pines and mountains in this fabulous photo', 'active': '', 'activate': 'thumbnail'
//}, 
//{'id': 5,'photo':'images/2.jpg', 'title': 'Lady by the lake', 'description': "This photo has taken near a fantastic lake, and there is a woman's back ", 'active': '', 'activate': 'thumbnail active'
//}, 
//{'id': 6,'photo':'images/3.jpg', 'title': 'Skyscraper', 'description': "You can see a huge skyscraper's windows in this picture", 'active': '', 'activate': ' active'
//},
  ];

// THUMBNAILS betöltése ****************************************************
// Meghatározom, hogy hova akarom kiírni a fotók adatait - most az app aljára
let containerSection = document.getElementById('container');

// forEach -> functiont hozok létre, amibe az innerHTML-lel kiiratom az adattömb minden részletét:

pictures.forEach(picture => {
  containerSection.innerHTML += `<div class="thumbnail${picture.active}" id="thumbnail${picture.id}" data-src="${picture.photo}">
  <img src="${picture.photo}" data-src="${picture.photo}" data-index="${picture.id}" data-id="${picture.id}" width="100px" height="100px">
  <div class="title">${picture.title}</div>
  </div>
  `
})


// FŐKÉP betöltése ****************************************************
// TODO loadPhoto attr jQuery-t átírni JS-re!
// TODO -> JS-re át kellene írni és a kép aljára kiiratni a címet és a leírást félig átlátszó blokkban
// Tettem hozzá fadeOut és fadeIn animációt

let loadPhoto = (photoNumber) => {


  // TODO !Itt megakadt a kód, de nem tudom mikor és miért...negyedik képre válttam és ráklikkeltem a thumbnailjére-> loadphotoval amúgy se írja ki a switchet a thumbnailre klikkkor:
  $('#photo').fadeOut(700, function () {
    $(this).attr('src', pictures[photoNumber].photo);
}).fadeIn(700);
$('#photo-title').fadeOut(700, function () {
  $(this).text(pictures[photoNumber].title);
}).fadeIn(700);
$('#photo-description').fadeOut(700, function () {
  $(this).text(pictures[photoNumber].description);
}).fadeIn(700);

//  $('#thumbnail1').attr('class', pictures[photoNumber].activate);
//  $('#thumbnail0').attr('class', 'thumbnail');
// TODO ÖTLET: if - getElementsByClass/.find? -> active => removeClass,
// aktiválja azt, #thumbnail${currentPhoto}
/*  AKTIVÁLÓ - switch-el megoldva kezdete    */
switch(currentPhoto){
        case 0:
          $('#thumbnail0').addClass('active');
          $('#thumbnail1').removeClass('active');   
          $('#thumbnail2').removeClass('active');   
          $('#thumbnail3').removeClass('active');   
        console.log("Első kép esete");
        break;
        case 1:
          $('#thumbnail1').addClass('active');
          $('#thumbnail0').removeClass('active');   
          $('#thumbnail2').removeClass('active');   
          $('#thumbnail3').removeClass('active');  
        console.log("Második kép esete");
        break;
        case 2:
          $('#thumbnail2').addClass('active');
          $('#thumbnail1').removeClass('active');
          $('#thumbnail0').removeClass('active');   
          $('#thumbnail3').removeClass('active');  
        console.log("3-ik kép esete");
        break;
        case 3:
          $('#thumbnail3').addClass('active');
          $('#thumbnail0').removeClass('active');
          $('#thumbnail1').removeClass('active');
          $('#thumbnail2').removeClass('active');
        console.log("4-ik kép esete");
        break;
        default:
        console.log("Alapeset, ha a currentPhoto nem 0-1-2-3");
        break;
      }
      /*  AKTIVÁLÓ - switch-el megoldva vége    */
//if(currentPhoto = 1) {
//  $('#thumbnail1').addClass('active');
//  $('#thumbnail0').removeClass('active');
//}
console.log(photoNumber)
}
loadPhoto(currentPhoto);

// ESEMÉNYFIGYELŐ ****************************************************
// TODO  jQuery-t átírni JS-re!
// Thumbnail-re való kattintás eseményfigyelője:
$('.thumbnail').click((event) => {
  let currentPhoto = $(event.target).attr('data-index');
 // let indexClicked = $(event.target).attr('data-src');

loadPhoto(currentPhoto);
});

// AKTIVÁLÓ RÉSZ - JS ************************************************
// TODO Aktivitást jelölni, de currentPhoto szerint, mert ez csak a klikkelés alapján aktivál!, minden ezzel kapcsolatos kódot tisztázni, css style formázása
// Add active class to the current button (highlight it)

let header = document.getElementById("container");
let thumbnails = header.getElementsByClassName("thumbnail");
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// NYILAK használata ****************************************************
// TODO jQuery->JS

$('#nyilJobbra').click(() => {
  if(currentPhoto < 3) {
    currentPhoto++;
    }
    else {
      currentPhoto=0;
      }
  loadPhoto(currentPhoto);
  
});

$('#nyilBalra').click(() => {
  if(currentPhoto > 0) {
    currentPhoto--;
  } 
  else {
    currentPhoto=6;
    }
  loadPhoto(currentPhoto);
});


/* TODO Ezeket a kódokat felhasználni:
// Melyik elemet akarjuk figyelni -> burger:
const burger = document.getElementById('thumbnail0');
// -> amire rákattintunk => amire hatunk - menu-active classt akarunk rátenni:
const nav = document.getElementById('thumbnail1');

// burgert figyelnünk kell, hogy ráklikkelnek -e -> addEventListener metódus:
burger.addEventListener('click', function (event) {
    burger.classList.toggle('active');
});
*/

/*
// Ez az aktív doboz példa: Get the container element
const thumbnailContainer = document.getElementById("container");

// Get all buttons with class="btn" inside the container
const thumbnails = thumbnailContainer.getElementsByClassName("thumbnail");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/