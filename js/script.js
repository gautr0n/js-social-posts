/*# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.*/


const post = [
    {
        postId: 1,
        authorPic: "https://unsplash.it/300/300?image=15",
        authorName: 'Phil Mangione',
        postDate: '03/06/22',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImg: "https://unsplash.it/600/300?image=171",
        numberOfLikes: 80,
    },
    {
        postId: 2,
        authorPic: "https://unsplash.it/300/300?image=15",
        authorName: 'Phil Mangione',
        postDate: '03/06/22',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImg: "https://unsplash.it/600/300?image=171",
        numberOfLikes: 80,
    },
    {
        postId: 3,
        authorPic: "https://unsplash.it/300/300?image=15",
        authorName: 'Phil Mangione',
        postDate: '03/06/22',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImg: "https://unsplash.it/600/300?image=171",
        numberOfLikes: 80,
    },
];

const postUp = document.getElementById('container');

let listPost = '';
for (let i = 0; i < post.length; i++) {
    listPost += 
    `<div class="post">
        <div class="post__header">
            <div class="post-meta"><div class="post-meta__icon">
                <img class="profile-pic" src=${post[i].authorPic} alt="Phil Mangione" />
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post[i].authorName}</div>
            <div class="post-meta__time">${post[i].postDate}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${post[i].postText}
    </div>
    <div class="post__image">
      <img src="${post[i].postImg}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${post[i].postId}">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${post[i].postId}" class="js-likes-counter">${post[i].numberOfLikes}</b> persone</div>
      </div>
    </div>
  </div>`;

};
 
postUp.innerHTML = listPost;


const likeButton = document.querySelectorAll('.js-like-button');

for (const button of likeButton) {
    button.addEventListener('click', () => {
        button.classList.add('like-button--liked');
        const postId = button.dataset.postid;
        const likeCounter = document.getElementById(`like-counter-${postId}`);
        let likes = parseInt(likeCounter.innerText);
        likeCounter.innerText = ++likes;
    })
}