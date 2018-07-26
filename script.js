let position = 0;
let on = false;
document.querySelector('.button').addEventListener('click', e => {
  if(position % 2 == 0) {
    document.querySelector('.switch').style.justifyContent = "flex-end";
    document.querySelector('.led').style.backgroundColor = "yellow";
    position ++;
    on = true;
  } else {
    document.querySelector('.switch').style.justifyContent = "flex-start";
    document.querySelector('.led').style.backgroundColor = "black ";
    position ++;
    on = false;
  }
});

// document.querySelectorAll('.key').forEach( key => {
//   key.addEventListener('click', e => {
//     e.target.style.boxShadow = "inset  0 4px 4px 4px grey";
//     setTimeout( () => {e.target.style.boxShadow = "inset  0 0 0 0";}, 200);
//   });
// });

let keyCodes = [97, 115, 100, 102, 103, 104, 106, 107, 108, 233, 225, 369];

document.addEventListener('keypress', k => {
  let key = document.getElementById(k.charCode);
  key.style.boxShadow = "inset  0 4px 4px 4px grey";
  key.style.height = '98%';
  setTimeout( () => {
    key.style.boxShadow = "inset  0 0 0 0";
    key.style.height = '100%';
  }, 200);

  if(on) {
    let audio = new Audio(`./medias/${keyCodes.indexOf(k.charCode) + 1}.mp3`);
    audio.play();
  }
});

