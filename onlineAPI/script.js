const root = document.querySelector('#root');

const button = document.querySelector('button');


function createItem(item) {

    //Card === creation of card to contain image and title of image
    const card = document.createElement('div');
    card.classList.add('card');
    // card.style.display = 'flex'

    //photo  
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    //title
    const title = document.createElement('h3');
    title.innerHTML = item.title;
    card.appendChild(photo);
    card.appendChild(title);

    // appending work of images(card container) one after another
    root.appendChild(card);

}


function displayImages(items) {
    items.forEach((item) => {
        createItem(item);
    });
    // console.log(items);

}

// adding click event listner to button to trigger the event 
button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/album/1/photos')
        .then((response) => response.json())
        .then(items => {
            displayImages(items);
        });
});