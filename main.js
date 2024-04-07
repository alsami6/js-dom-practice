// document.getElementById('try').addEventListener("click", function(){
//     this.style.backgroundColor = "green";
// })

// learning async

// function getdata(dataId) {
//     setTimeout(() =>{
//         console.log("data", dataId);
//     }, 3000);
// }


const btn = document.getElementById("try")

btn.addEventListener("click", function(e){
    if(e.ctrlKey){
        console.log("Yeah it's work");
    }
})