let input = document.querySelector('.userInput');
let button = document.querySelector('.button');
let display= document.querySelector('.searchResults');


let happy = document.querySelector('.H');
let mad = document.querySelector('.M');
let sad = document.querySelector('.S');

var userInput;
var query;
var response;

happy.addEventListener('click', hSet); 
mad.addEventListener('click', mSet); 
sad.addEventListener('click', sSet); 

button.addEventListener('click', Search); 

function hSet(){
  query = "rock";
}

function sSet(){
  query = "blues";
}

function mSet(){
  query = "metal";
}
function Search () {
  userInput = input.value;
  
  event.preventDefault();

 // query = userInput.split(" ").join("+");
 console.log(query);
  let url = ("https://itunes.apple.com/search?term=" + query)

    fetch(url)
        .then(function(response){

          response.json().then(function(data){
          console.log(data);

         

           for (var i = 0; i < 20; i++) { 

             let results = document.createElement('div');
              results.setAttribute('class', 'result');
              results.id = i;
              console.log(results.id);



             results.innerHTML += 
             `
               <div class="songContainer">
                 <img src="${data.results[i].artworkUrl100}">
               
               <p class="songName">
                 ${data.results[i].trackName}
               </p>
               <p class="artistName">
                 ${data.results[i].artistName}
                 </p>
             `
             results.addEventListener('click', function(event){
                playSong(this.id);
                console.log(this.id); 
              });

               display.appendChild(results);
               function playSong(x) {

                 let index = Number(x);
                 let player = document.getElementById('music-player');
                 let musicPreview = data.results[index].previewUrl;
                 player.setAttribute('src', musicPreview);
                 player.play();
               }

           }



         

      });

    });

}


