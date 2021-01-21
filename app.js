const selectDiv = document.querySelector('.ville-select'),
      showRadio = document.querySelector('.show'),
      hideRadio = document.querySelector('.hide'),
      NomInp = document.querySelector('#name'),
      PassInp = document.querySelector('#password'),
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

  const index = select.selectedIndex;
  let reg = /^[a-zA-Z]+$/;

  //------------------- verifier si il existe une erreur ------------------------//
  if ( !reg.test(NomInp.value) || PassInp.value === '' || divIsHidden == false && select[index].text === 'Selectionner ville' )
  {
    //---------------- verifier qu'il type d'erreur existe-il----------------------------//
    if ( !reg.test(NomInp.value)){
      
      showAlert('Validation échoué!');
      setTimeout( () => {
        document.querySelector('.alert').innerHTML = '';
      },2000);

    }
    
    if (PassInp.value === ''){
      showAlert('Validation échoué!');
      setTimeout( () => {
        document.querySelector('.alert').innerHTML = '';
      },2000);
    }

    if( divIsHidden == false && select[index].text === 'Selectionner ville'){

    showAlert('Validation échoué!');
    setTimeout( () => {
      document.querySelector('.alert').innerHTML = '';
    },2000);

    }
  } //-------------------------------- message de validation ----------------------------//
  else{
    showAlert('Validation Passé avec succée');
    setTimeout( () => {
      document.querySelector('.alert').innerHTML = '';
    },2000);
    NomInp.value = '';
    PassInp.value = '';
  }
  
})



//----------------------- annuler ---------------------------//

annuler.addEventListener('click' , (e) => {
  e.preventDefault();

  location.reload();
})

//--------------------- alert --------------------------------//
function showAlert(message){
  document.querySelector('.alert').innerHTML = message ;
}

      
