const btn = document.querySelector('button');

btn.addEventListener('click', e => {
  btn.textContent = `Click count: ${e.detail}`;
  if(e.detail % 2 === 0){
      console.log('done!');
      btn.textContent = 'Good !'
      e.stopPropagation();
  }
});