export default function () {
    const name = document.querySelector(".name")
    function getLocalStorage() {
        
        if(localStorage.getItem('name')) {
          name.value = localStorage.getItem('name');
        }
      }
      window.addEventListener('load', getLocalStorage)
    
    function setLocalStorage() {
        localStorage.setItem('name', name.value);
      }
      window.addEventListener('beforeunload', setLocalStorage)
}