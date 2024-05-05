// const click = document.getElementById('clicked');
// click.addEventListener('click', ()=>{
//     const hobe = document.getElementById('changehobe');
//     hobe.innerText = "aije hoise"
// })


// const another = document.getElementById('hereIsAnother');
// another.addEventListener('click', ()=>{
//     const hobe = document.getElementById('changehobe');
//     hobe.innerText = "aije koto bar hobe na"
//     hobe.style.backgroundColor = 'red';
// })



// const update = document.getElementById('btn-update');
// update.addEventListener('click', ()=>{
//     const blogs = document.getElementById('blog-post');
//     const jk = blogs.value;
//     const ok = document.getElementById('fine');
//     ok.innerText = jk;
//     blogs.value = '';
// })



// const post = document.getElementById('c-post');
// post.addEventListener('click', ()=>{
//     const cmt = document.getElementById('comment')
//     const jk = cmt.value;
//     const commentSpace = document.getElementById('cmnt-box');
//     const p = document.createElement('p');
//     p.innerText = jk;
//     commentSpace.appendChild(p);
//     cmt.value = '';
// })


// function loadUsers(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(d => displayUsers(d))
// }


// function displayUsers(d){
//     console.log(d);
// }

// function loadUsers2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUsers2(data))
// }

// function displayUsers2(data){
//     const ul = document.getElementById('usersList')
//     for(const user of data){
//         console.log(user.name);
        
//     const li = document.createElement('li')
//     li.innerText = user.name;
//     ul.appendChild(li)
//     }
// }


function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json)
    .then(d => console.log(d))
}

loadPost()


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}