console.log("js is running");
let songs = [];

async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/exercise/spotify/songs/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  for (let i = 0; i < as.length; i++) {
    const elements = as[i];
    if (elements.href.endsWith(".mp3")) {
      let songName = elements.href.split("/songs/")[1];   //to remove the back slashes
      songs.push(songName);
    }
  }
  return songs;
}

async function main() {
  let songlist = await getsongs();
  console.log(songlist);

  // var audio= new Audio(songlist[1]);
  // audio.play();
}
console.log(songs);
main();
// console.log(songs)
// colab