const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const VD= document.getElementById('vd');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FORMACALC= document.getElementById('forma-calculo');
const radio=document.getElementById('radio-button');
const input= document.getElementById('peso');

function segar(peso){
    let suero=0;
    let peso2=0;

    if(peso<=10){
        suero= 100*peso;
    }else if(peso<=20){
            peso2= peso-10;
            suero= 1000+(peso2*50);
    }else{
            peso2= peso-20;
            suero= 1500+(peso2*20);
    }
    return suero;
}

function superficie(peso){
    let sup= ((peso*4)+7)/(parseInt(peso)+90);

      if(document.getElementById('checkbox1').checked){
        nElegido= document.getElementById('checkbox1').value;
      }else{
        nElegido= document.getElementById('checkbox2').value;
      }
      
      return sup*nElegido;
    
}

function calcFlujo(peso){
    if(peso<=30){
        return segar(peso);
    }else{
        return superficie(peso);
    }
}

function calcular(){
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = Math.round(calcFlujo(DATO)/24);
        let mantenimiento = flujo*1.5;
        VD.innerHTML= Math.round(calcFlujo(DATO))+' cc';
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        VD.style.display= 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        VD.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
}




input.addEventListener("keyup",()=>{
    var peso = document.getElementById('peso').value;
    if(peso>30){
        radio.style.display='block';
        FORMACALC.innerHTML='<li><strong>Cuando el niño pesa mas de 30kg, se utiliza un cálculo diferente:</strong></li><li>Superficie corporal = ( (peso * 4) + 7) / (peso + 90)</li><li>Este resultado se multiplica por 1500 o por 2000 para hallar el valor del volumen diario en cc, y el medico decide cual de los dos resultados utilizar.</li>'
        
    }else{
        radio.style.display='none';
        FORMACALC.innerHTML='<li>De 0kg a 10kg, se calcula 100cc por cada kilo.</li><li>Se suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg</li><li>De 20kg para arriba, se suman 20cc por cada kilo adicional</li>'
    }
    VD.style.display = 'none';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
})


CALCULAR.addEventListener('click', calcular);






