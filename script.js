// Created by Man Of Ξction

onload = () =>{

/*

 π Break My Heart π π

 π Developed By : Man Of Action.

 π Date of posted: 24-September-2020.

 π Don't copy(β) without permission.

 π Made with love π

 π Hope you'll love it.

 π Don't forget me give feedback, follow
    me & share π

 π Idea comes in mind : https://pin.it/3yeqV0L

*/


// DOM Init..

const heartItem = document.querySelectorAll(".heart__item");
const heart = document.querySelector(".heart");
const text = document.querySelector('.text');
const btnRect = document.querySelector('.btn-react');
const btnRound = document.querySelector('.btn-round');

let roundItem = 0 ;

// Arrow Function

const getRandom = (max,min = 0) => Math.floor( Math.random() * (max - min) + min);

const setCurrentSelectedBtn = (e)=>{
    if(e.target.className.includes('btn-selected'))
        return;
     btnRect.classList.toggle('btn-selected');
     btnRound.classList.toggle('btn-selected');
     roundItem = roundItem ? 0 : 28;
     heartBlust();
}

const getRandomAnimation = (index) => {
  let val_0 = getRandom(300, 80);
  let val_1 = getRandom(300, 80);
  let val_2 = getRandom(300, 80);
  if (getRandom(100) % 2 == 0) {
    val_0 *= -1;
    val_1 *= -1;
    val_2 *= -1;
  }
  const str = [
    `opacity:0;border-radius:28%;transform : translate(${val_1}vh,${val_2}vw); transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:28%;transform : scale(${getRandom(
      5,
      2
    )}) translate(${val_1}vh,${val_2}vw); transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:28%;transform : scale(0) rotateY(${getRandom(
      180 * 10
    )}deg) rotateX(${getRandom(
      180 * 10
    )}deg) translateY(${val_0}vh) translateX(${val_0}vw); transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:28%;transform : rotate(${getRandom(
      360 * 2
    )}deg) scale(${getRandom(
      5,
      1
    )}) translate(${val_1}vh,${val_2}vw) ; transition:all ${getRandom(
      6,
      1
    )}s ease-in-out`,
    `opacity:0;border-radius:28%;transform : translateX(${
      val_1 < 0 ? val_1 * -1 : val_1
    }vw); transition:all ${getRandom(6, 1)}s ease-in-out`,
    `opacity:0;border-radius:28%;transform : translateY(${
      val_1 > 0 ? val_1 * -1 : val_1
    }vw); transition:all ${getRandom(6, 1)}s ease-in-out`,
  ];
  return str[index];
};

const heartBlust = () => {
text.innerHTML = 'ππ‘ Π’Ρ ΡΠ°ΠΊΠΎΠΉ ΠΏΠ»ΠΎΡΠΎΠΉ, ΡΡ ΡΠ°Π·Π±ΠΈΠ»Π° ΠΌΠΎΠ΅ ΡΠ΅ΡΠ΄ΡΠ΅ π π­π­';
  const index =  getRandom(6);
  heartItem.forEach((item) => {
     item.style.cssText = getRandomAnimation(index);
  });
  setTimeout(() => {
    heartArrange();
  }, 4000);
};



const heartArrange = () => {
text.innerHTML = 'π€π€';
  heartItem.forEach((item) => {
    item.style.transform = ``;
    item.style.opacity = 1;
  });
  setTimeout(() => {
    text.innerHTML = 'Π₯Π΅ΡΠ΅ΡΠ΅ ππ ΡΡ Π½Π΅ ΠΌΠΎΠΆΠ΅ΡΡ ΡΠ°Π·Π±ΠΈΡΡ ΠΌΠΎΠ΅ ΡΠ΅ΡΠ΄ΡΠ΅ π Ρ Π΄ΠΎΡΡΠ°ΡΠΎΡΠ½ΠΎ ΡΠΈΠ»Π΅Π½, Π΄Π°Π²Π°ΠΉ ΠΏΠΎΠΏΡΠΎΠ±ΡΠ΅ΠΌ Π΅ΡΠ΅ ΡΠ°Π· π';
  }, 5000);
};



// Event Handling

heart.addEventListener("click", ()=>{
  heartBlust();
});






}