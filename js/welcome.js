export default function () {
  const greetingTranslation = {
    ru: "ru",
    en: "en",
  };
  const greeting = document.querySelector(".greeting");
  const buttonRu = document.querySelector(".ru");
  const buttonEn = document.querySelector(".en");

  function getTimeOfDay(languages) {
    const date = new Date();
    const hours = date.getHours();
    if (languages == greetingTranslation.en) {
      if (hours >= 6 && hours <= 9) {
        greeting.textContent = "Good morning";
        return hours;
      } else if (hours >= 10 && hours <= 17) {
        greeting.textContent = "Good day";
        return hours;
      } else if (hours >= 18 && hours <= 24) {
        greeting.textContent = "Good evening";
        return hours;
      } else if (hours >= 0 && hours < 6) {
        greeting.textContent = "Good night";
        return hours;
      }
    } else if (languages == greetingTranslation.ru) {
      if (hours >= 6 && hours <= 9) {
        greeting.textContent = "Доброе утро";
        return hours;
      } else if (hours >= 10 && hours <= 17) {
        greeting.textContent = "Добрый день";
        return hours;
      } else if (hours >= 18 && hours <= 24) {
        greeting.textContent = "Добрый вечер";
        return hours;
      } else if (hours >= 0 && hours < 6) {
        greeting.textContent = "Доброй ночи";
        return hours;
      }
    }
    setTimeout(getTimeOfDay, 1000);
  }
  getTimeOfDay(greetingTranslation.en);
  buttonRu.addEventListener("click", () => {
    getTimeOfDay(greetingTranslation.ru);
  });

  buttonEn.addEventListener("click", () => {
    getTimeOfDay(greetingTranslation.en);
  });
}
