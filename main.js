const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Questo ciclo crea i Post
for(let i = 0; i < posts.length; i++){
    
    // if (posts[i].author.image == null){
    //     let initials = '';

    //     for(let j = 0; j < posts[i].author.name.length; j++){
    //         if (posts[i].author.name[j] == posts[i].author.name[j].toUpperCase()){
    //             initials += posts[i].author.name[j].toUpperCase();
    //         }
    //     }
    //     posts[i].author.image = initials.replace(/ /g, "");
    // }
    createPost(posts[i]);
}







// Questa funzione formatta la data
function formatDate(propertyDate){
    let date = new Date(propertyDate);
    let myDate = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + date.getFullYear() ;
    return myDate;
};






function createPost (objectPost){
    const containerPost = document.querySelector(".posts-list");
    containerPost.innerHTML += 
        `<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${objectPost.author.image}" alt="${objectPost.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${objectPost.author.name}</div>
                    <div class="post-meta__time">${formatDate(objectPost.created)}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${objectPost.content}</div>
        <div class="post__image">
            <img src= "${objectPost.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${objectPost.likes}</b> persone
                </div>
            </div> 
        </div>            
        </div>`
};