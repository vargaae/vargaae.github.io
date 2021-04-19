let currentPhoto = 0;
let imagesData = [
  {'photo':'images/1.jpg', 'title': 'Első fotó címe', 'description': 'Első fotó leírása'
}, 
{'photo':'images/2.jpg', 'title': 'Második fotó címe', 'description': 'Második fotó leírása'
}, 
{'photo':'images/3.jpg', 'title': 'Harmadik fotó címe', 'description': 'Harmadik fotó leírása'
}, 
{'photo':'images/4.jpg', 'title': 'Negyedik fotó címe', 'description': 'Negyedik fotó leírása'
}
];

imagesData.forEach((item, index) => {
  $('#container').append(`<div class="thumbnail" id="thumbnail${index}" data-src="${item.photo}"><img src="${item.photo}" data-src="${item.photo}" data-index="${index}" width="100px" height="100px"><div class="title">${item.title}</div></div> `);
 
  console.log(item)  

   $('.thumbnail').click((event) => {
    let currentPhoto = $(event.target).attr('data-index');
    console.log(currentPhoto);
    let indexClicked = $(event.target).attr('data-src');

    // indexClicked függvény keresi ki a thumbnail src-jét, amit a data-indexbe mentettem el 
    //és így átkapcsolja a következő paranccsal a nagy képet is ugyanerre a képre úgy, hogy átállítja az src-jét a nagy képnek

    $('#clicked').text(indexClicked+" currentPhoto értéke: "+currentPhoto);
    
  $("#photo").attr("src", indexClicked);
  $(event.target).css('border', 'blue solid 2px');
  $('.thumbnail').css('border', 'green solid 2px'); 
 

  });

  
  });
  
     

  let loadPhoto = (photoNumber) => {

    $('#photo').attr('src', imagesData[photoNumber].photo);
  
  
    $('.thumbnail').css('border', 'grey solid 2px');
  
  
    $('#clicked').text(" currentPhoto értéke: "+currentPhoto);
      console.log(photoNumber)
     
     
      switch(currentPhoto){
        case 0:
          $('#thumbnail0').css('border', 'red solid 2px');  
        console.log("Első kép esete");
        break;
        case 1:
          $('#thumbnail1').css('border', 'red solid 2px');  
        console.log("Második kép esete");
        break;
        case 2:
          $('#thumbnail2').css('border', 'red solid 2px');  
        console.log("3-ik kép esete");
        break;
        default:
        console.log("Alapeset, ha a currentPhoto nem 0-1-2");
        break;
      }
  }
  loadPhoto(currentPhoto);


  $('#nyilJobbra').click(() => {
    if(currentPhoto < 3) {
      currentPhoto++;
      }
      else {
        currentPhoto=0;
        }
    /*  if(currentPhoto = 0) {
        $('.thumbnail1').css('border', 'lime solid 2px');
        } 
        */
    loadPhoto(currentPhoto);
    /*activePhoto(currentPhoto);*/
    console.log(currentPhoto)
    console.log(imagesData[currentPhoto])
    
  });
  
  $('#nyilBalra').click(() => {
    if(currentPhoto > 0) {
      currentPhoto--;
    } 
    else {
      currentPhoto=3;
      }
    loadPhoto(currentPhoto);
});
/*
// Ez az aktív doboz példa: Get the container element
var thumbnailContainer = document.getElementById("container");

// Get all buttons with class="btn" inside the container
var thumbnails = thumbnailContainer.getElementsByClassName("thumbnail");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  thumbnails[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/