const catImage = document.querySelector('#cat-image')

const fetchCat = async () => {
    try {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const fetchApi = await  fetch(url);
    const cat = await fetchApi.json();

     return cat[0].url;
  } catch {
    console.log('deu ruim')
  }
} 

const tradeImage = async () => {
    let imageLink = await fetchCat();
    catImage.setAttribute('src', imageLink);

    console.log(typeof imageLink)
    console.log(imageLink)
    
}

window.onload = () => tradeImage();