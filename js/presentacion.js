let section_inicio  = document.getElementById('section_inicio');
let pers = document.getElementById('pers');
let x = 0;
let y = 0; 

function definir(){
	pers.style.left = x + 'px';	
}

section_inicio.addEventListener('load', () =>{ 
definir()})


	window.addEventListener('keydown', function(e){
    let tecla = e.key 
	switch(tecla){ 
		
		//Izquierda

		case 'ArrowLeft': 
		        pers.classList.add('izquierda1');
		        setTimeout( () => { pers.classList.remove('izquierda1')}, 250 );
		        pers.classList.add('izquierda2');
		        setTimeout( () => { pers.classList.remove('izquierda2')}, 500 );
		        pers.classList.add('izquierda');
				pers.classList.remove('derecha');
				pers.classList.remove('abajo');
				pers.classList.remove('arriva');

				x = x - 3;
				pers.style.left = x + '0.5px';

				break;
		
		//Derecha

		case 'ArrowRight':
				pers.classList.add('derecha1');
				setTimeout( () => { pers.classList.remove('derecha1')}, 250 );
				pers.classList.add('derecha2');
				setTimeout( () => { pers.classList.remove('derecha2')}, 500 );
				pers.classList.add('derecha');
				pers.classList.remove('izquierda');
				pers.classList.remove('abajo');
				pers.classList.remove('arriva');
				
				x = x + 3;
				pers.style.left = x + '0.5px';
							
				break
			
	}

})


//Cuadro de dialogo

window.addEventListener('load', () => {
setTimeout(() => {dil.style.animation = '15s aparicion_dil 1'}, 500)
// setTimeout(() => {dil.style.opacity = 'inherit'}, 1200)
})

//escritura
const text = document.getElementById('a_t');
let str = text.innerHTML;
text.innerHTML = "";

const speed = 120;
let i = 0;


const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

setTimeout(typeWriter, speed);


// Palanca

    let pal_a = document.getElementById('pal_a')
    let pal_c = document.getElementById('pal_c')
    let secs = document.getElementById('secs')
    let nom = document.getElementById('nom')
    let ent = document.getElementById('ent')
    
// Ocultar nombre y mostar lista de secs


		pal_a.addEventListener('click',
		() => {
		nom.classList.add('ocul_n');
		secs.classList.add('mos_secs');
		pal_c.classList.add('pal_m');
		pal_a.classList.add('pal_o');
		ent.classList.add('pal_o')

		
	})

	pal_c.addEventListener('click',
		() => {
		nom.classList.remove('ocul_n');
		secs.classList.remove('mos_secs');
		pal_a.classList.remove('pal_o');
		pal_c.classList.remove('pal_m');
		
	})


