import Address from "../models/address.js";


function State(){
    this.btnSave = null;
    this.btnClear = null;
    this.inputCep= null;
    this.inputStreet = null;
    this.inputNumber = null;
    this.inputCity = null;
    this.errorCep = null;
    this.errorNumber = null;
    this.address = new Address();
}
const state = new State();

export function init(){
    
    
    state.inputCep = document.forms.newAddress.cep ;
    state.inputCity = document.forms.newAddress.city;
    state.inputNumber = document.forms.newAddress.number;
    state.inputStreet = document.forms.newAddress.street;

    state.btnClear = document.forms.newAddress.btnClear;
    state.btnSave = document.forms.newAddress.btnSave;
    
    state.errorCep = document.querySelector('[data-error="cep"]');
    state.errorNumber = document.querySelector('[data-error="number"]');

    state.inputNumber.addEventListener('change',handleInputNumberChange);
    state.btnClear.addEventListener('click',handleBtnClearClick);
    

}

function handleInputNumberChange(event){
    if (event.target.value =="")
    {
        setFormError("number","Campo requerido");
    }
    else {
        setFormError("number","");
    }

}
function setFormError(key,value){ 
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML=value
}
function handleBtnClearClick(event){
    event.preventDefault();
    clearForm();

}
function clearForm(){

    state.inputCep.value = "";
    state.inputCity.value = "";
    state.inputNumber.value = "";
    state.inputStreet.value = "";
    
    setFormError("cep","");
    setFormError("number","");
   state.inputCep.focus();
}


