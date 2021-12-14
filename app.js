const darkMode = document.querySelector('.dark__mode')
const header = document.querySelector('.header')
const form = document.querySelector('form')
const forminput = document.querySelector('.form__input')
const input = document.querySelector('.input')
const select1 = document.querySelector('.select')
const selectValue = document.querySelector('.select__value')
const search = document.querySelector('.search')
const back = document.getElementById('back__button')
const main__cards = document.querySelector('.main__cards')







// API

const allCountry = 'https://restcountries.com/v3.1/all'

fetch(allCountry)
  .then((data) => {
    return data.json()
  })
  .then(getData)

// GetData
function getData(data) {
  const allData = data
  allData.forEach((country) => {
    const div = document.createElement('div')
    const anchor = document.createElement('a')
    div.classList.add('main__card')
    anchor.setAttribute('id', `${country.name.common}`)
    anchor.setAttribute('href', `about.html?${country.name.common}`)

    div.innerHTML = `
    <img class="card__img" src=${country.flags.png} alt="img" width="264">
        <div class="card__text">
         <h1  class="card__title">${country.name.common}</h1>
         <p class="text">
            <span>Population:</span> ${country.population}
         </p>
         <p class="text">
            <span>Region:</span> ${country.region}
         </p>
         <p class="text">
            <span>Capital:</span> ${country.capital}
        </p>
    </div>

    `
    anchor.appendChild(div)
    main__cards.appendChild(anchor)

    const option = document.createElement('option')
    option.innerHTML = country.name.common
    option.setAttribute('value', `${country.name.common}`)
    select1.appendChild(option)
  })
}

form.addEventListener('input', (e) => {
  const countryName =
    input.value.charAt().toUpperCase() + input.value.slice(1).toLowerCase()
  const allCountry = main__cards.childNodes

  for (i = 0; i < allCountry.length; i++) {
    if (main__cards.childNodes[i].getAttribute('id').includes(countryName)) {
      main__cards.childNodes[i].classList.remove('hidden')
    } else {
      main__cards.childNodes[i].classList.add('hidden')
    }
  }
})

select1.addEventListener('change', () => {
  const country = select1.value
  const allCountry = main__cards.childNodes

  for (i = 0; i < allCountry.length; i++) {
    if (main__cards.childNodes[i].getAttribute('id').includes(country)) {
      main__cards.childNodes[i].classList.remove('hidden')
    } else {
      main__cards.childNodes[i].classList.add('hidden')
    }
  }
})

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const aCountry = `https://restcountries.com/v3.1/name/${input.value}`

//   fetch(aCountry)
//     .then((data) => {
//       return data.json()
//     })
//     .then(getACounryData)
// })

// function getACounryData(data) {
//   main__cards.innerHTML = ''
//   const aCounty = data[0]
//   console.log(aCounty)
//   const div = document.createElement('div')
//   div.classList.add('main__card')
//   div.innerHTML = `
//     <img class="card_img" src=${aCounty.flags.png} alt="img" width="264">
//         <div class="card__text">
//          <h1  class="card__title">${aCounty.name.common}</h1>
//          <p class="text">
//             <span>Population:</span> ${aCounty.population}
//          </p>
//          <p class="text">
//             <span>Region:</span> ${aCounty.region}
//          </p>
//          <p class="text">
//             <span>Capital:</span> ${aCounty.capital}
//         </p>
//     </div>
//     `
//   main__cards.appendChild(div)
// }


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