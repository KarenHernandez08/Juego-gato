var con=1;
var boton1="boton1",boton2="boton2",boton3="boton3",boton4="boton4",boton5="boton5",boton6="boton6",boton7="boton7",boton8="boton8",boton9="boton9";
function actions(boton){
 if(boton.className=="boton"){

  boton.className="clicked";
  var text;
  if(con%2==0){
   text="X";
  }else{
   text="O";
  }
  boton.value=text;

  boton.appendChild(document.createTextNode(text));
  con++;
  asignation(text,boton);
 }else{

 }
}
function asignation(text,boton){
 if(boton1==boton.name){
  boton1=text;
 }
 else if(boton2==boton.name){
  boton2=text;
 }
 else if(boton3==boton.name){
  boton3=text;
 }
 else if(boton4==boton.name){
  boton4=text;
 }
 else if(boton5==boton.name){
  boton5=text;
 }
 else if(boton6==boton.name){
  boton6=text;
 }
 else if(boton7==boton.name){
  boton7=text;
 }
 else if(boton8==boton.name){
  boton8=text;
 }
 else if(boton9==boton.name){
  boton9=text;
 }
 validation(text);
}
function validation(text){
 if((boton1==boton2 && boton2==boton3)||(boton1==boton5 && boton5==boton9)||(boton3==boton5 && boton5==boton7)||(boton4==boton5 && boton5==boton6)||(boton7==boton8 && boton8==boton9)||(boton1==boton4 && boton4==boton7)||(boton2==boton5 && boton5==boton8)||(boton3==boton6 && boton6==boton9)){
  var con=confirm(text+" YA GANASTE ¿QUIERES VOLVER A JUGAR?");
  if(con==true){
   window.location.reload();
  }
 }
}