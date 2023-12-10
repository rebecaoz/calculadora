let peso=31;

if(peso<=30){
    segar(peso);
}else{
    superficie(peso);
}

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
    return ((peso * 4) + 7) / (peso + 90);
    
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

input.addEventListener('change',calcular);