let div = document.querySelector('.bars-parent');
let parent = document.querySelector('.bar');
    let lists = document.querySelector('.list-items');
    div.addEventListener('click', function(){
       lists.classList.toggle('active');
       div.classList.toggle('new');
        
    });


let celcius  = document.getElementById('cel');
let fahrenheit = document.getElementById('fah');
celcius.addEventListener('input' , function(){
   
    let c = this.value;
    let f = (c * 9/5) + 32;
    fahrenheit.value = f ;
   });
fahrenheit.addEventListener('input' ,  function(){
   let f = this.value ;
   console.log(f);
   let c = (f-32) * 5/9 ;
   celcius.value = c ;
});



let color = [ 'red' , 'blue' , 'green' , 'yellow' ,'white'];
let button = document.getElementById('btn');
let body = document.getElementsByTagName('body');
button.addEventListener('click' , function(){
   let random = Math.floor(Math.random()*color.length);
   
   document.body.style.backgroundColor = color[random] ;
   
});

let button2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(){
   document.body.style.backgroundColor = 'black';
})

button2.addEventListener('click' , function(){
   document.body.style.backgroundColor = 'white';
});



let textarea = document.getElementById('textarea');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
textarea.addEventListener('input', function(){
    let text = this.value;
    let length = text.length;
    span1.innerHTML = length ;
    text = text.trim();
   
    let words = text.split(" ").length ;
   span2.innerHTML = words ;

});

const quotes = [ { 
  quote : "Without continual growth and progress , success have no meaning." ,
  writer : "BENJAMIN FRANKLIN" ,
           
},
{
   quote : "try not to become a man of succcess but rather try to become a man of value.",
   writer: "ALBERT EINSTEIN", 
},
{
   quote : "success is a lousy teacher. It seduces smart people into thinking they can't lose.",
   writer: "BILL GATES" ,
},
{
   quote : " A true friend is one who overlooks your failures and tolerates your success." ,
   writer: "DOUG LARSON" ,
}
];

let quotepara = document.getElementById('quotespara');
let quotebutton = document.getElementById('quote-btn');
let writername = document.getElementById('writername')
quotebutton.addEventListener('click', function(){
   let random_value = Math.floor(Math.random()*quotes.length);
   quotepara.innerText = quotes[random_value].quote;
   writername.innerText = quotes[random_value].writer;
   console.log(quotes[random_value]);
});
