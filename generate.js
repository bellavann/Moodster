let gen = document.querySelector('#gen');


gen.addEventListener('click', slow); 
gen2.addEventListener('click', normal); 
gen3.addEventListener('click', hype); 

music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2');
music_vae.initialize();
norm = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/groovae_2bar_humanize');
norm.initialize();
hype = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/multitrack_fb256');
hype.initialize();

vaePlayer = new mm.Player();
vae_temperature = 1.5;

function hype(){
 
  console.log("hype");
  if (vaePlayer.isPlaying()) {
    vaePlayer.stop();
    return;
  }
  hype
  .sample(1, 1.5)
  .then((sample) => vaePlayer.start(sample[0]));
}
function normal(){
 
  console.log("norm");
  if (vaePlayer.isPlaying()) {
    vaePlayer.stop();
    return;
  }
  norm
  .sample(1, vae_temperature)
  .then((sample) => vaePlayer.start(sample[0]));

}
function slow(){
 
  console.log("slow");
  if (vaePlayer.isPlaying()) {
    vaePlayer.stop();
    return;
  }
  music_vae
  .sample(1, vae_temperature)
  .then((sample) => vaePlayer.start(sample[0]));

}

