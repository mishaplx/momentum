export default function () {
  const sliderNext = document.querySelector(".slide-next");
  const sliderPrev = document.querySelector(".slide-prev");
  let date = new Date();
  const hours = date.getHours();
  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result < 10 ? `0${result}` : `${result}`;
  }
  let randomNumber = getRandomNum(1, 20);

  function setBg(timeOfDay, bgNum) {
    if (timeOfDay >= 6 && timeOfDay <= 9) {
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg)`;
    } else if (timeOfDay >= 10 && timeOfDay <= 17) {
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${bgNum}.jpg)`;
    } else if (timeOfDay >= 18 && timeOfDay <= 24) {
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg)`;
    } else if (timeOfDay >= 0 && timeOfDay < 6) {
      document.body.style.backgroundImage = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${bgNum}.jpg`;
    }
  }
  function load(){
    setBg(hours, randomNumber);
    function getSlideNext() {
      
      if (randomNumber == 20 ){
        randomNumber = 1
      }
      else{
        randomNumber++;
      }
      if (randomNumber < 10 ){
        randomNumber = `0${randomNumber}`
      }
      setBg(setBg(hours, randomNumber))
      //document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomNumber}.jpg)`;
  
    }
    function getSlidePrev() {
      if (randomNumber == 1 ){
        randomNumber = 20
      }
      else{
        randomNumber--;
      }
      if (randomNumber < 10 ){
        randomNumber = `0${randomNumber}`
      }
      setBg(setBg(hours, randomNumber))
      //document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${randomNumber}.jpg)`;
      
    }
    sliderNext.addEventListener("click", getSlideNext);
    sliderPrev.addEventListener("click", getSlidePrev);
  }
 

 
  window.addEventListener('load', load)
}
