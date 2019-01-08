/* global PRIVATEASER*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const bar = PRIVATEASER.getBar();
    const time = document.querySelector('.time').value;
    const persons = document.querySelector('.persons').value;
    const option = document.querySelector('.option').checked;
    const actors = PRIVATEASER.payActors(bar, time, persons, option);

    render(actors);

    return;
  });
})();


function printForms(){
  let x = document.getElementById("infoButton");
  let bookBut = document.getElementById("bookBut");
  if (x.style.display === "none"){
    x.style.display = "block";
    bookBut.disabled = true;
    bookBut.style.backgroundColor = "darkblue";
  }else{
    x.style.display = "none";
  }
}
