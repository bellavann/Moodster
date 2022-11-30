let input = document.querySelector('.userInput');
let button = document.querySelector('.button');
let display= document.querySelector('.searchResults');
let happy = document.querySelector('#H');
let mad = document.querySelector('#M');
let sad = document.querySelector('#S');
let fear = document.querySelector('#F');
let disgust = document.querySelector('#D');
let surprise = document.querySelector('#SU');






var userInput;
var query;
var response;

happy.addEventListener('click', hSet); 
mad.addEventListener('click', mSet); 
sad.addEventListener('click', sSet); 


fear.addEventListener('click', fSet); 
disgust.addEventListener('click', dSet); 
surprise.addEventListener('click', suSet); 
//button.addEventListener('click', Search); 

function hSet(){
  query = "rock";
  console.log('TEST');
  moodSearch ();
}

function sSet(){
  query = "blues";
  moodSearch ();
}

function mSet(){
  query = "metal";
  moodSearch ();
}


function fSet(){
  query = "horror";
  console.log('TEST');
  moodSearch ();
}

function dSet(){
  query = "Screamo";
  moodSearch ();
}

function suSet(){
  query = "Dubstep";
  moodSearch ();
}


function moodSearch () {
 // userInput = input.value;
  
  event.preventDefault();

 // query = userInput.split(" ").join("+");
 console.log(query);

  let url = ("https://itunes.apple.com/search?term=" + query)

    fetch(url)
        .then(function(response){

          response.json().then(function(data){
          console.log(data.results[1].trackName);
          console.log(data.results);
          let player = document.getElementById('music-player');
          let num = data.results.length;
let song = Math.floor(Math.random() * num);
          let musicPreview = data.results[song].previewUrl;
          player.setAttribute('src', musicPreview);
          player.play();

          


         

      });

    });
