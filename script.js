  function calcular() {

    var volts = 120;
  
    let rc = document.querySelector("#rc").value;
    let rr = document.querySelector("#rr").value;
    let im = document.querySelector("#im").value;

    if(rc == "" ){
        alert("Resistencia das bobinas não pode ser vazia");
        return;
    }

    if(rr == "" ){
        alert("Resistencia do rotor não pode ser vazia");
        return;
    }


    if(im == "" ){
        alert("Corrente de entrada motor não pode ser vazia");
        return;
    }


    i1 = volts/rc;

    it = im - i1;

    forcaeletromotriz = volts - (rr * it);

    pdr = rr * Math.pow(it, 2);

    pdb = rc * Math.pow(i1, 2);

    potenciaSaida = forcaeletromotriz * it;

    potenciaEntrada = volts * im;

    eficiencia = potenciaSaida/potenciaEntrada * 100;
    
  
    alert(
        "A) A corrente do rotor: " + it + "A" +
        " \n"  +
        "B) A força eletromotriz induzida no rotor: " +  forcaeletromotriz + "V" +
        " \n" +
        "C) Em sequência, as potências dissipadas nas bobinas de campo magnético e no rotor: " + 
        "Potencia da bobina =" + pdr + "W" +
        "Potencia do Campo magnetico = " +  pdb + "W" + 
        " \n" + 
        "D) A potência de saída, ou de eixo, no útil do motor: " + 
        "Potencia de saida = " + potenciaSaida + "W" +
        "Potencia de entrada =" + potenciaEntrada + "W" +
        " \n" + 
        "E) A eficiencia do motor: " + eficiencia + "%"


    );
  }