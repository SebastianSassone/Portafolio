// Menu desplegable
let boton_men = document.getElementById('boton_men');
let boton_cer = document.getElementById('boton_cer');
let nav_ul = document.querySelector('.nav_ul');
let li = document.querySelectorAll('a');

//Mostar

boton_men.addEventListener('click', () => {
    nav_ul.classList.add('nav_menu_desplegado');
    boton_men.classList.add('ocultar_b');
    boton_cer.style.display = 'flex';
    
})

//Ocultar

boton_cer.addEventListener('click', function () {  
  nav_ul.classList.remove('nav_menu_desplegado');
  boton_cer.style.display = 'none';
  boton_men.classList.remove('ocultar_b');
})  

//Animaciones

let inici = document.getElementById('ini');
let sobre = document.getElementById('sob');
let proyec = document.getElementById('pro');
let contac = document.getElementById('con');

window.addEventListener('scroll', () => {
  let img_ht = document.getElementById('img_ht');
  let img_cs = document.getElementById('img_cs');
  let img_js = document.getElementById('img_js');
  let img_gi = document.getElementById('img_gi');
  let img_mon = document.getElementById('img_mon');
  let img_nod = document.getElementById('img_nod');
  let img_rea = document.getElementById('img_rea');
  let img_jav = document.getElementById('img_jav');
  let img_mys = document.getElementById('img_mys');
  let img_col = document.getElementById('img_col');
  let img_db2 = document.getElementById('img_db2');

  let posicionObjet = img_tec.getBoundingClientRect().top
  let tamanodepantalla = window.innerHeight/1
  
  if(posicionObjet < tamanodepantalla){
    setTimeout(() => {img_ht.style.animation = '3s aparicion 1'}, 1000);
    setTimeout(() => {img_cs.style.animation = '3s aparicion 1'}, 1100);
    setTimeout(() => {img_js.style.animation = '3s aparicion 1'}, 1200);
    setTimeout(() => {img_gi.style.animation = '3s aparicion 1'}, 1300);
    setTimeout(() => {img_mon.style.animation = '3s aparicion 1'}, 1400);
    setTimeout(() => {img_nod.style.animation = '3s aparicion 1'}, 1500);
    setTimeout(() => {img_rea.style.animation = '3s aparicion 1'}, 1600);
    setTimeout(() => {img_jav.style.animation = '3s aparicion 1'}, 1700);
    setTimeout(() => {img_mys.style.animation = '3s aparicion 1'}, 1800);
    setTimeout(() => {img_col.style.animation = '3s aparicion 1'}, 1900);
    setTimeout(() => {img_db2.style.animation = '3s aparicion 1'}, 2000);
  }
});

sobre.addEventListener('click', () => {
  
  let img_ht = document.getElementById('img_ht');
  let img_cs = document.getElementById('img_cs');
  let img_js = document.getElementById('img_js');
  let img_gi = document.getElementById('img_gi');
  let img_mon = document.getElementById('img_mon');
  let img_nod = document.getElementById('img_nod');
  let img_rea = document.getElementById('img_rea');
  let img_jav = document.getElementById('img_jav');
  let img_mys = document.getElementById('img_mys');
  let img_col = document.getElementById('img_col');
  let img_db2 = document.getElementById('img_db2');

  setTimeout(() => {img_ht.style.animation = '3s aparicion 1'}, 1000);
  setTimeout(() => {img_cs.style.animation = '3s aparicion 1'}, 1100);
  setTimeout(() => {img_js.style.animation = '3s aparicion 1'}, 1200);
  setTimeout(() => {img_gi.style.animation = '3s aparicion 1'}, 1300);
  setTimeout(() => {img_mon.style.animation = '3s aparicion 1'}, 1400);
  setTimeout(() => {img_nod.style.animation = '3s aparicion 1'}, 1500);
  setTimeout(() => {img_rea.style.animation = '3s aparicion 1'}, 1600);
  setTimeout(() => {img_jav.style.animation = '3s aparicion 1'}, 1700);
  setTimeout(() => {img_mys.style.animation = '3s aparicion 1'}, 1800);
  setTimeout(() => {img_col.style.animation = '3s aparicion 1'}, 1900);
  setTimeout(() => {img_db2.style.animation = '3s aparicion 1'}, 2000);
   
});

//Animacion Contacto

window.addEventListener('scroll', () => {
  let foco_neon = document.getElementById('foco_neon');
  let posicionObjet = foco_neon.getBoundingClientRect().top
  let tamanodepantalla = window.innerHeight/2.6;
  
  if(posicionObjet < tamanodepantalla){   
    foco_neon.style.animation = '0.4s foco_neon 1'
  }

});

contac.addEventListener('click', () => {
  let foco_neon = document.getElementById('foco_neon') ; 
  setTimeout(() => {foco_neon.style.animation = '0.5s foco_neon 1'}, 1000);

});

//Formulario


const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit (e) {
    e.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'  
        }
    })
    if(response.ok){
        this.reset()
        alert('Su mensaje fue enviado con exito.')
    }
 
}

const moscoun = document.getElementById('moscoun');

moscoun.addEventListener('click', () => {
   let counter = document.getElementById('counter');
   counter.style.display = 'flex';
   setTimeout(() => {counter.style.display = 'none';}, 2000)

})
