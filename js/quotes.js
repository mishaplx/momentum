export default function(){
    const quote = document.querySelector('.quote')
    const author = document.querySelector('.author')
    const changeQuote = document.querySelector('.change-quote')
    const buttonRu = document.querySelector(".ru");
    const buttonEn = document.querySelector(".en");
    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let result = Math.floor(Math.random() * (max - min)) + min;
        return result;
      }
 let mainLang;
    async function getQuotes(lang) {  
        const quotes = lang;
        const res = await fetch(quotes);
        const data = await res.json(); 
        const strJson = JSON.stringify(data)
        const read = JSON.parse(strJson)
        const counter = getRandomNum(0, read.length)
        quote.textContent = read[counter].text;
        author.textContent = read[counter].author;
        mainLang = lang
      
      }
      getQuotes('dataen.json');
      changeQuote.addEventListener('click',() =>{
        getQuotes('dataen.json')
      })

      buttonRu.addEventListener('click',()=>{
        getQuotes('data.json')
      })
      buttonEn.addEventListener('click',()=>{
        getQuotes('dataen.json')
      })
}