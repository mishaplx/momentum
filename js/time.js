export default function time() {
  const time = document.querySelector(".time");
  const date = document.querySelector(".date");
  const buttonRu = document.querySelector(".ru");
  const buttonEn = document.querySelector(".en");
  const greetingTranslation = {
    ru: "ru-Ru",
    en: "en-En",
  };
  function showTime(len) {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    if (len == greetingTranslation.en) {
      showData(greetingTranslation.en);
    }
    else if (len == greetingTranslation.ru){
        showData(greetingTranslation.ru);
    }
    setTimeout(showTime, 1000);
  }
  showTime(greetingTranslation.en);
  function showData(languages) {
    const data = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    const currentDate = data.toLocaleDateString(languages, options);
    date.textContent = currentDate;
  }

  buttonRu.addEventListener("click", () => {
    showTime(greetingTranslation.ru);
  });

  buttonEn.addEventListener("click", () => {
    showTime(greetingTranslation.en);
  });
}
