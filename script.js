
const apiUrlPrim = `https://api.pexels.com/v1/search?query=nature`;

const apiUrlSec = `https://api.pexels.com/v1/search?query=city`;

const apiKey ='sua7MmOhVtbgcrpfXqqCbVrC8LfseEYHcxm37HDHeVNqUgMNAv2gbJJf';

// ---search----
let searchIn = document.getElementById('inputSearch'); 
let buttonIn = document.getElementById('inputButton'); 

let keyword = buttonIn.addEventListener('click', () => {
    let inputValue = searchIn.value;
    console.log(inputValue);
    return inputValue
}
);   

let apiUrlSearch = `https://api.pexels.com/v1/search?query=?${keyword}`;



// -------------ex 1/2--------------------
function fetchData (url){
    fetch(url, {
        headers: {
            Authorization: apiKey
        }
    })

    .then(response => response.json())
    .then(data => {
        result = data;
        console.log(result)
       
        
        // keyword
        insertImg(result);
        imgId(result)
        author(result);
        description(result);
        
        
    })
}

function insertImg (x){         
    let imgs = document.querySelectorAll('img');
    
    imgs.forEach((image, i)=>{
        image.setAttribute('src' , x.photos[i].src.medium);
    })
}


// -------------ex 3/4--------------------
function editoToHide (){
    let editButtons = document.querySelectorAll('.card-body .btn-group .btn:last-child ');
    
    for (let button of editButtons){
        button.innerText='Hide';

        button.addEventListener('click', () => {
        button.parentElement.parentElement.parentElement.parentElement.style.display = 'none';})
    }
}
editoToHide();

// -------------ex 5--------------------
function imgId (x){
    let small = document.getElementsByTagName('small');
    let photos = x.photos;
    let photosId = [];
    
    photos.forEach((photo, i) =>{
        photosId.push('photo id: '+photos[i].id);
    })

    for (let i = 0; i < small.length; i++){
        small[i].innerText = photosId[i];
    }
}

function author(x) {
    let cardBody = document.querySelectorAll('.card-body');
    let photos = x.photos; 
    let photographers = [];

    
    for (let i = 0; i < photos.length; i++ ){
        photographers.push(photos[i].photographer);
    }

    cardBody.forEach((card , i)=>{
        let newSpan = document.createElement('span');
        
        newSpan.innerText = photographers[i];
        card.prepend(newSpan);
        
        newSpan.classList.add('mb-5');
    })    

}


function description(x) {
    let cardText = document.querySelectorAll('.card-text');
    let photos = x.photos; 
    let desc = [];

    for (let i = 0; i < photos.length; i++ ){
        desc.push(photos[i].alt);
    }

    for (let i = 0; i < desc.length; i++){
        cardText[i].innerText = desc[i];
        // cardText.classList.add('fst-italic');
    }
}

// -------------ex 6--------------------




// function searchImg() {
    
//     buttonIn.addEventListener('click', () => {
//         let inputValue = searchIn.value;
//         console.log(inputValue);     
//     })
    
//     return inputValue;
// }

// console.log(keyword)
