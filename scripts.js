const forms = document.querySelector('form')
//to stop the get/post
forms.addEventListener('submit' , (e)=>{
  e.preventDefault() //prevent
  const h = parseInt(document.querySelector('#height').value ) //into integer
  const w = parseInt(document.querySelector('#weight').value ) 
  const r = document.querySelector('#results')//into integer
  const g = document.querySelector('#guide')
  if(h === '' || h<0 || isNaN(h)){
    r.innerHTML = `please give valid height ${h}` 
  }
  if(w==='' || w<0 || isNaN(w)){
    r.innerHTML = `please give a valid weight ${w}`
  }
  if(h>0 && w>0){
   const bmii =   (w / ( (h * h) / 10000) ).toFixed(2);
   r.innerHTML = `<span>${bmii}</span>`
}
  
  //const t = abs(24.9-bmii)
  if(bmii<18.6)
  {
   g.innerHTML = `<b>you are UNDERWEIGHT!</b>`
  }
  if(bmii>=18.6 && bmii <24.9)
    {
     g.innerHTML = `<b>you are PERFECTTTTTT!</b>`
    }
  if(bmii>= 24.9)
  {
    g.innerHTML = `<b>you are OVERWEIGHT!</b>`
  }




})