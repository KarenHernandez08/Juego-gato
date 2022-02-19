let turno = false;
let ganar = false;
let cont=0;



const cli = (even) => {
    const {id} = even.target;
    const div = document.getElementById(id);
    const t = turno;
        if(t){
            document.getElementById("x").innerText="Turno jugador X";
            document.getElementById("x").className="activo";
            document.getElementById("o").innerText="Turno jugador O";
            document.getElementById("o").className="noActivo";
        }else{
            document.getElementById("o").innerText="Turno jugador O";
            document.getElementById("o").className="activo";
            document.getElementById("x").innerText="Turno jugador X";
            document.getElementById("x").className="noActivo";
        }
    if(div.innerText == ""&& ganar==false){
        div.innerText = turno ? "O" : "X";
        cont++;
        ganador();  
        turno = !turno;
        
        
    }
    
    
}


const reiniciar = () => {
    turno=false;
    ganar=false;
    cont=0;

            document.getElementById("x").innerText="Turno jugador X";
            document.getElementById("x").className="activo";
            document.getElementById("o").innerText="Turno jugador O";
            document.getElementById("o").className="noActivo";
    
    for (let i=0;i<9;i++){
        const di = document.getElementById(i+1);
        di.innerText="";  
    }
}

const ganador = () => {
    const datos = [9];
    
    for (let i=0;i<9;i++){
        const div = document.getElementById(i+1);
        datos[i]=(div.innerText);  
    }

  

     if((datos[0]==datos[1] && datos[0]==datos[2]&& datos[0]!=="")||
        (datos[3]==datos[4] && datos[3]==datos[5]&& datos[3]!=="")||
        (datos[6]==datos[7] && datos[6]==datos[8]&& datos[6]!=="")||
        (datos[0]==datos[3] && datos[0]==datos[6]&& datos[0]!=="")||
        (datos[1]==datos[4] && datos[1]==datos[7]&& datos[1]!=="")||
        (datos[2]==datos[5] && datos[2]==datos[8]&& datos[2]!=="")||
        (datos[0]==datos[4] && datos[0]==datos[8]&& datos[0]!=="")||
        (datos[2]==datos[4] && datos[2]==datos[6]&& datos[2]!==""))
        {
        
        ganar = true;
        if (ganar&&turno){
           setTimeout(()=> alert("Ganó jugador O"),100);
        }
        else if (ganar){
            setTimeout(()=> alert("Ganó jugador X"),100);
        }
    }
    else if(cont == 9){
       alert("Nadie gano, vuelvan a intertarlo");
       cont=0;     
    }
}