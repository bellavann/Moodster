let gen = document.querySelector('#gen');


gen.addEventListener('click', generate); 
music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2');
music_vae.initialize();

// Create a player to play the sampled sequence.
vaePlayer = new mm.Player();
vae_temperature = 1.5;
function generate(){
  console.log("Generatign music");
  if (vaePlayer.isPlaying()) {
    vaePlayer.stop();
    return;
  }
  music_vae
  .sample(1, vae_temperature)
  .then((sample) => vaePlayer.start(sample[0]));

}

