const posts = [
    {title: 'post One', body: 'this is post one' },
    {title: 'post two', body: 'this is post two'}
];

function getPost() {
    setTimeout( () => {
let output = "";
posts.forEach( (post, index) => {
output += `<li>${post.title}</li>`;
});

document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000);
}

getPost();

createPost({title: 'post Three', body:' This is post three'}, getPost);

// const posts = [
//    {title: 'post One', body: 'this is post one' },
//     {title: 'post two', body: 'this is post two'}
// ];

// $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(getPost){
//     getPost.forEach( (post) =>{
//       let output = `<li>${JSON.stringify(post)}</li>`;
//       document.body.innerHTML += output;
//     })
// } ) 
//below is button click function
// $('#myButton').click(function() {
//     $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(getPost){
//     getPost.forEach( (post) =>{
//       let output = `<li>${JSON.stringify(post)}</li>`;
//       document.body.innerHTML += output;
//     })
// } ) 
// } )         


// exercise 2 and 3
function compareToTen(num) {
    p = new Promise((resolve, reject) => {
        if(num > 50) {
            resolve(num + ' is greater than 50, Nice!')
        } else {
            reject(num + "is less than 50, error!")
        }
    })
    return p
}

compareToTen(55)
.then(result => console.log(result))
.catch(error => console.log(error))

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))


var arrayOfWords = ['monkey', 'computer', 'cloud']
var complicatedArray = ['monkey', 44, true]

function makeAllCaps(array){
    return new Promise((resolve, reject) => {
        
        if(typeof word === 'string'){
            return word.toUpperCase()
        } else {
            reject( 'error: Not all Items in the array strings!')
        }
        resolve(capsArray)
    })
}

function sortWords(array){
    return new Promise((resolve, reject) => {
        if(array) {
            array.forEach((el) => {
                if(typeof el !== 'string'){
                    reject('error: not all in array are strings')
                }
            })
            resolve(array.sort());
        } else {
            reject('error: something went wrong with sorting words')
        }
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))



// post of 12 will be 14


// function getPost() {
//     setTimeout( () => {
// let output = "";
// posts.forEach( (post, index) => {
// output += `<li>${post.title}</li>`;
// });

// document.body.innerHTML += output;    //+= made text show on page. not replace.
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//     setTimeout( () => {
//         posts.push(post);

//          const error = false;

//          if(!error) {
//              resolve();
//          } else {
//             reject('error: Something went wrong');
//          }

//     }, 2000);
// });
// }

// createPost({ title: 'post Three', body: "This is post three" }).then(getPost);









































