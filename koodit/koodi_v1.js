
/*
const link1 = document.querySelector('.item2 div a');
const link2 = document.querySelector('.item3 div a');

link1.addEventListener('mouseover', () => {
	document.querySelector('.tiedot-pelinvalikko').style.opacity = '1';
	document.querySelector('.item3 div a').style.opacity = '0';
});

link2.addEventListener('mouseover', () => {
	document.querySelector('.tiedot-verkkosivu').style.opacity = '1';
	document.querySelector('.item2 div a').style.opacity = '0';
});

link1.addEventListener('mouseout', () => {
	document.querySelector('.tiedot-pelinvalikko').style.opacity = '0';
	document.querySelector('.item3 div a').style.opacity = '1';
});

link2.addEventListener('mouseout', () => {
	document.querySelector('.tiedot-verkkosivu').style.opacity = '0';
	document.querySelector('.item2 div a').style.opacity = '1';
});
*/

const link1 = document.querySelector('.item2 div a');
const link2 = document.querySelector('.item3 div a');

function handleMouseOverLink1() {
    if (window.innerWidth >= 600) {
        document.querySelector('.tiedot-pelinvalikko').style.opacity = '1';
        document.querySelector('.item3 div a').style.opacity = '0';
    }
}

function handleMouseOverLink2() {
    if (window.innerWidth >= 600) {
        document.querySelector('.tiedot-verkkosivu').style.opacity = '1';
        document.querySelector('.item2 div a').style.opacity = '0';
    }
}

function handleMouseOutLink1() {
    if (window.innerWidth >= 600) {
        document.querySelector('.tiedot-pelinvalikko').style.opacity = '0';
        document.querySelector('.item3 div a').style.opacity = '1';
    }
}

function handleMouseOutLink2() {
    if (window.innerWidth >= 600) {
        document.querySelector('.tiedot-verkkosivu').style.opacity = '0';
        document.querySelector('.item2 div a').style.opacity = '1';
    }
}

link1.addEventListener('mouseover', handleMouseOverLink1);
link2.addEventListener('mouseover', handleMouseOverLink2);
link1.addEventListener('mouseout', handleMouseOutLink1);
link2.addEventListener('mouseout', handleMouseOutLink2);

// Lisätään tapahtumankäsittelijät ikkunan koon muutoksille
window.addEventListener('resize', () => {
    if (window.innerWidth >= 600) {
        // Jos ikkuna on riittävän leveä, nollataan opacity-arvot
        document.querySelector('.tiedot-pelinvalikko').style.opacity = '';
        document.querySelector('.tiedot-verkkosivu').style.opacity = '';
        document.querySelector('.item2 div a').style.opacity = '';
        document.querySelector('.item3 div a').style.opacity = '';
    }
});
