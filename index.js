const bgColor = document.querySelector('#bg-color')
const navBtn = document.querySelector('#nav-btn'); 
navBtn.addEventListener('click',function(event){
    const color = rendomColor()
   bgColor.style.background = color
})
function rendomColor(){
 let red = Math.floor(Math.random() * 225)
 let blue = Math.floor(Math.random() * 225)
 let green = Math.floor(Math.random() * 225)
 return `rgb(${red},${blue},${green})`
}

// big button
const bigBtn = document.querySelector('#big-btn')
bigBtn.addEventListener('click',function(){
 window.location.href="node.html"
 
})

// ----------- bard btn
let btn = document.querySelectorAll('#card-btn')
// buttons.addEventListener('click',function(){
//   alert()
// })

 for(let buttons of btn){
       buttons.addEventListener('click',function(event){
        alert()
        buttons.disables=true   
        buttons.style.background = 'silver'
       const stBox1 = document.querySelector('#box1').innerText;
         const convertStBox1 = parseFloat(stBox1);
         const plus = convertStBox1 + 1
         document.querySelector('#box1').innerText = plus
         
         const stBox2 = document.querySelector('#box2').innerText;
         const convertStBox2 = parseFloat(stBox2);
         const minus = convertStBox2 - 1
         document.querySelector('#box2').innerText = minus
         

       })
 }

