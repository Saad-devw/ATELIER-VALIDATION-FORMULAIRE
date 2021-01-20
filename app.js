const selectDiv = document.querySelector('.ville-select'),
      showRadio = document.querySelector('.show'),
      hideRadio = document.querySelector('.hide'),
      NomInp = document.querySelector('#name'),
      submit = document.querySelector('#connecter'),
      annuler = document.querySelector('#annuler'),
      select = document.querySelector('#ville-liste');

let divIsHidden = true;

//---------------- show Hide the Div ----------------------//
function show(){
  selectDiv.style.display = 'block';
  divIsHidden = false;
}
function hide(){
  selectDiv.style.display = 'none';
  divIsHidden = true;
}

//-------------------- Verify Name Format -----------------//
submit.addEventListener('click', (e) => {
  e.preventDefault();

  let reg = /^[a-zA-Z]+(\' \')?$/;

      if ( !reg.test(NomInp.value)){
        alert('Nom Format non Valide');
      }

    const index = select.selectedIndex;

    if( divIsHidden == false && select[index].text === 'Selectionner ville'){
      alert('choisie une ville ');
    }
    

})



//----------------------- annuler ---------------------------//

annuler.addEventListener('click' , (e) => {
  e.preventDefault();

  location.reload();
})

      