/* Mustavalkonäkymän vaihto A */

function mustavalkoVaihto() {
	var bodyElement = document.body;
	bodyElement.classList.toggle("body-mv");
}

/* Tietolaatikon esiintuominen */

const link1 = document.querySelector('.item3 .tavutus-oletus:first-of-type');
const link2 = document.querySelector('.item3 .tavutus-oletus:last-of-type');

link1.addEventListener('mouseover', () => {
	document.querySelector('.tiedot-verkkosivu').style.display = 'block';
});

link2.addEventListener('mouseover', () => {
	document.querySelector('.tiedot-pelinvalikko').style.display = 'block';
});

link1.addEventListener('mouseout', () => {
	document.querySelector('.tiedot-verkkosivu').style.display = 'none';
});

link2.addEventListener('mouseout', () => {
	document.querySelector('.tiedot-pelinvalikko').style.display = 'none';
});

/* Mustavalkonäkymän vaihto */
/*
function mustavalkoVaihto() {
	var mustavalkoNakyma = document.querySelector('.raami-mv');
	var variNakyma = document.querySelector('.raami-nelio');
	var vaakaNakyma = document.querySelector('.raami-vaaka');
	
	var computedStyle = window.getComputedStyle(variNakyma);
	var displayStyle = computedStyle.getPropertyValue('display');
	
	if (displayStyle === 'grid') {
		mustavalkoNakyma.style.display = 'grid';
		variNakyma.style.display = 'none';
		vaakaNakyma.style.display = 'none';
	} else {
		mustavalkoNakyma.style.display = 'none';
		variNakyma.style.display = 'grid';
		vaakaNakyma.style.display = 'grid';
	}
}
*/
