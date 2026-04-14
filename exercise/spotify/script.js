console.log("js is running");
let songs = [];
let currentSong = new Audio();

function secondstominute(seconds) {
  if (isNaN(seconds)) return "0:00";

  let minute = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${minute}:${sec.toString().padStart(2, "0")}`;
}

async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/exercise/spotify/songs/");
  let response = await a.text();
  //fetched songs data

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");

  for (let i = 0; i < as.length; i++) {
    const name = as[i].textContent;

    if (name.endsWith(".mp3")) {
      songs.push(name); //pushed the songs to song array
    }
  }
  return songs;
}

async function main() {
  let songlist = await getsongs();

  let songul = document.querySelectorAll(".songname");
  let songimages = document.querySelectorAll(".songimage img");

  for (let i = 0; i < songul.length; i++) {
    //did this to change the names and photo of the songs in
    if (songlist[i]) {
      let clearname = songlist[i].replace(".mp3", "");
      songul[i].textContent = clearname;
      songimages[i].src = `song-templates/${clearname}.jpg`;
    }
  }


  // event listner for time update in seekbar
  currentSong.addEventListener("timeupdate", () => {
    document.getElementsByClassName("songtime")[0].innerHTML =
      `${secondstominute(currentSong.currentTime)}/${secondstominute(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

   // to change the time of song when click on seekbar
  document.querySelector(".seekbar").addEventListener("click", e=>{
    let movepercent= (e.offsetX/e.target.getBoundingClientRect().width)*100
    document.querySelector(".circle").style.left=movepercent +"%";
    currentSong.currentTime=(currentSong.duration*movepercent)/100


  })
}
const playmusic = (track) => {
  currentSong.src = "http://127.0.0.1:3000/exercise/spotify/songs/" + track; //to take the name of the song
  currentSong.play();
};
Array.from(document.querySelectorAll(".songs")).forEach((e) => {
  let selectsong = e.querySelector(".playbtn");
  selectsong.addEventListener("click", () => {
    let songname = e.querySelector(".songname").textContent.trim();
    playmusic(songname + ".mp3");

    // to change the icon of play and pause
    changeplayicon.src = "assets/pause.svg";

    //to display the song which is playing
    let displaysongname = document.querySelector(".songdisplay");
    displaysongname.innerHTML = songname;
  });
});
let changeplayicon = document.getElementById("play").firstElementChild;

play.addEventListener("click", () => {
  if (currentSong.paused) {
    currentSong.play();
    changeplayicon.src = "assets/pause.svg";
  } else {
    currentSong.pause();
    changeplayicon.src = "assets/play.svg";
  }
});
let ham = document.querySelector(".hambrgr");
let library = document.querySelector(".library");

ham.addEventListener("click", () => {
  if (library.style.left === "0px") {
    library.style.left = "-100%";
    document.querySelector(".hambrgrbtn").src = "assets/hamburger.svg";
  } else {
    library.style.left = "0";
    document.querySelector(".hambrgrbtn").src = "assets/cross-circle-svgrepo-com.svg";
  }
});


main();
// console.log(songs)
// colab
