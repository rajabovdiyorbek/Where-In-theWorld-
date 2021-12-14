const query = window.location.search

const darkMode = document.querySelector('.dark__mode')
const header = document.querySelector('.header')



fetch(`https://restcountries.com/v3.1/name/${query.slice(1)}`)
  .then((data) => {
    return data.json()
  })
  .then(aboutCountry)

function aboutCountry(data) {

  console.log(data)
  document.querySelector('.about__img').setAttribute('src', data[0].flags.png)
  document.querySelector('.country__name').textContent = data[0].name.common
  document.querySelector('.native__name').textContent = data[0].altSpellings[2]
  document.querySelector('.population').textContent = data[0].population
  document.querySelector('.region').textContent = data[0].region
  document.querySelector('.subregion').textContent = data[0].subregion
  document.querySelector('.capital').textContent = data[0].capital
  document.querySelector('.toplvl').textContent = data[0].tld[0]
  document.querySelector('.currencies').textContent = data[0].currencies.Object.keys.name










}




//darkMode
darkMode.addEventListener('click', ()=>{
        if(darkMode.textContent ==="Dark Mode"){
            darkMode.textContent ="White Mode"
           
        }else{
            darkMode.textContent ="Dark Mode"
           
        
        }
       
        header.classList.toggle('header__active')
        document.querySelector('body').classList.toggle('bgdark__active')
        forminput.classList.toggle("header__active")
        
        document.querySelector('.input').classList.toggle("header__active")
        document.querySelector('.select').classList.toggle("header__active")

        
})