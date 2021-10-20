import playList from "./playList.js";
export default function () {
  const audio = document.querySelector("audio");
  const play = document.querySelector(".play");
  const buttonPlayNext = document.querySelector(".play-next");
  const buttonPlayPrev = document.querySelector(".play-prev");
  const playListContainer = document.querySelector(".play-list");

  playList.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add("play-list-item");
    li.textContent = el.title;
    playListContainer.append(li);
  });
  const playListItem = document.querySelectorAll(".play-list-item");
  let isPlay = false;
  let globalCurrentTime = 0;
  function playAudio() {
    if (!isPlay) {
      isPlay = true;
      audio.currentTime = globalCurrentTime;
      play.setAttribute("class", "pause player-icon");
      let nameSuond = audio.src.slice(
        audio.src.lastIndexOf("/") + 1,
        audio.src.lastIndexOf(".")
      );
      let resNameSound = nameSuond.split("%20").join(" ");
  
      for (let i = 0; i < playListItem.length; i++) {
        playListItem[i].style.color = 'white'
        playListItem[i].style.fontSize = '16px'
        if (playListItem[i].textContent == resNameSound) {
          playListItem[i].style.fontSize = '20px'
          playListItem[i].style.color = "#b3b3b3";
        }
      }
      audio.play();
    } else {
      play.classList.toggle("play");
      globalCurrentTime = audio.currentTime;
      isPlay = false;
      play.setAttribute("class", "play player-icon");
      audio.pause();
    }
  }
  let playNum = 0;
  function playNext() {
    isPlay = true;
    play.setAttribute("class", "pause player-icon");
    playNum += 1;

    if (playNum == playList.length) {
      playNum = 0;
    }
    audio.src = playList[playNum].src;

    let nameSuond = audio.src.slice(
      audio.src.lastIndexOf("/") + 1,
      audio.src.lastIndexOf(".")
    );
    let resNameSound = nameSuond.split("%20").join(" ");

    for (let i = 0; i < playListItem.length; i++) {
      playListItem[i].style.color = 'white'
      playListItem[i].style.fontSize = '16px'
      if (playListItem[i].textContent == resNameSound) {
        playListItem[i].style.fontSize = '20px'
        playListItem[i].style.color = "#b3b3b3";
      }
    }
    audio.play();
  }
  function playPrev() {
    isPlay = true;
    play.setAttribute("class", "pause player-icon");
    playNum -= 1;
    if (playNum == -1) {
      playNum = playList.length - 1;
    }
    audio.src = playList[playNum].src;
    let nameSuond = audio.src.slice(
      audio.src.lastIndexOf("/") + 1,
      audio.src.lastIndexOf(".")
    );
    let resNameSound = nameSuond.split("%20").join(" ");

    for (let i = 0; i < playListItem.length; i++) {
      playListItem[i].style.color = 'white'
      playListItem[i].style.fontSize = '16px'
      if (playListItem[i].textContent == resNameSound) {
        playListItem[i].style.fontSize = '20px'
        playListItem[i].style.color = "#b3b3b3";
      }
    }
    audio.play();
  }

  play.addEventListener("click", playAudio);
  buttonPlayNext.addEventListener("click", playNext);
  buttonPlayPrev.addEventListener("click", playPrev);
}
