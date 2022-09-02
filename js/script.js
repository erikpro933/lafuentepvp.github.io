alert(`❌ Aviso:
      Esta pagina esta en constante actualización para mejorar tu visita.
      Disfruten de la web ya que nos esta costando mucho desarrollarla.
  Att: erikpro933`);
console.log("make by erikpro933" );

setInterval(() => {
	console.log("make by erikpro933 ");
}, 10000)

let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}