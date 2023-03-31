
const apiKey ='sua7MmOhVtbgcrpfXqqCbVrC8LfseEYHcxm37HDHeVNqUgMNAv2gbJJf';



// ----------------search------------------
let searchIn = document.getElementById('inputSearch'); 
let buttonIn = document.getElementById('inputButton'); 


    let inputValue = document.getElementById('inputSearch');
    let inputStr = inputValue.value;
    let keyword = eval.inputStr

// ----------------------------------------------


// -------------get API data--------------------
function fetchData (key){
    let url = 'https://api.pexels.com/v1/search?query=' + key;

    fetch(url, {
        headers: {
            Authorization: apiKey
        }
    })

    .then(response => response.json())
    .then(data => {
        result = data;
        console.log(result);
       
        getImgUrl(result);
        filterResult(result);

        insertImg(result);
        imgId(result)
        author(result);
        description(result);

    })
}
// ------load default images------
fetchData('ocean');
// ----------------------------------------------

// -------------insert imgs--------------------
function insertImg (x){         
    let imgs = document.querySelectorAll('img');
    
    imgs.forEach((image, i)=>{
        image.setAttribute('src' , x.photos[i].src.medium);
    })
}
// --------------------------------------------

// -------------hide card-------------------
function editoToHide (){
    let editButtons = document.querySelectorAll('.card-body .btn-group .btn:last-child ');
    
    for (let button of editButtons){
        button.innerText='Hide';

        button.addEventListener('click', () => {
        button.parentElement.parentElement.parentElement.parentElement.style.display = 'none';})
    }
}
editoToHide();
// --------------------------------------------

// -------------insert id--------------------
function imgId (x){
    let small = document.getElementsByTagName('small');
    let photos = x.photos;
    let photosId = [];
    
    photos.forEach((photo, i) =>{
        photosId.push('photo id: '+ photos[i].id);
    })
    
    for (let i = 0; i < small.length; i++){
        small[i].innerText = photosId[i];
    }
    
}
// --------------------------------------------

// -------------set card height-----------------

function cardHeight(){
    let cards = document.querySelectorAll('.card');
    for (card of cards){
        card.style.height = '25rem';
    }
}
cardHeight();
// ---------------------------------------------


// ----------create span for author-------------
function spanAuthor(){
    let cardBody = document.querySelectorAll('.card-body');
    
    cardBody.forEach((card , i)=>{     
        let newSpan = document.createElement('span');
        card.prepend(newSpan); 
        card.classList.add('d-flex')      
        card.classList.add('flex-column', 'justify-content-between')      
    })    
}
spanAuthor()
// ---------------------------------------------

// -------------insert author-----------------
function author(x) {
    let authorSpanNodes = document.querySelectorAll('.card-body span');
    let authorSpan = Array.from(authorSpanNodes);

    let photos = x.photos; 
    let photographers = photos.map(a => a.photographer);

    for (let i = 0; i < photos.length; i++ ){
        photographers.push(photos[i].photographer);
    }
    
    
    for (let i = 0; i < authorSpan.length; i++ ){
        authorSpan[i].innerText = photographers[i];
        authorSpan[i].classList.add('font-weight-bold');
    }

}
// ---------------------------------------------

// ---------replace text for description-----------
function description(x) {
    let cardText = document.querySelectorAll('.card-text');
    let photos = x.photos; 

    let desc = photos.map(a => a.alt);

    for (let i = 0; i < desc.length; i++){
        cardText[i].innerHTML = desc[i];
        cardText[i].classList.add('font-italic');
    }
}
// ---------------------------------------------

// --------------------modal--------------------
function modal(x) {
    let viewButtons = document.querySelectorAll('.card-body .btn-group .btn:first-child');
   

    for (let button of viewButtons){
        button.setAttribute('data-toggle' ,'modal');
        button.setAttribute('data-target' , '#exampleModal');
        button.setAttribute('data-source' , '#exampleModal');
    }
         
    // let imgs = document.querySelectorAll('img');
    // let modalImage = document.getElementsByClassName('card-img-top');
    // let modalImgs = Array.from(modalImage);
    let cardImg = document.querySelector('card-img-top');

    console.log(modalImage);

    let imageSrc = cardImg.dataset.image;
    modalImage.src = imageSrc;
}
// modal()
// ---------------------------------------------

// --------------------EXTRA map--------------------
function getImgUrl(x){   
    let photos = x.photos; 
    let imgsUrl = photos.map(a => a.url);
    
    console.log(imgsUrl) 
}
// ---------------------------------------------
// --------------------EXTRA filter--------------------
function filterResult(x) {
    let authorName ='Matt Hardy';
    let photos = x.photos; 
    let imgsAuthor = photos.filter(a => (a.photographer == authorName));

    console.log('Filtered image by author: '+ authorName); 
    console.log(imgsAuthor);
    
    return imgsAuthor;
}




// ---------------------------------------------