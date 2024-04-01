function calculoimc() {
    let ps = document.getElementById("txtpeso").value;
    let alt = document.getElementById("txtaltura").value;
    let rdsexo = document.getElementById("rdf");
    let imc = 0;

    if (isNaN(ps) || (ps == "")) {
        alert("Digite um valor válido para o peso!");
        document.getElementById("txtpeso").value = "";
        document.getElementById("txtpeso").focus();
    }else if (isNaN(alt) || (alt == "")) {
        alert("Digite um valor válido para a altura!");
        document.getElementById("txtaltura").value = "";
        document.getElementById("txtaltura").focus();
    } else {
        alt = parseFloat(alt);
        ps = parseFloat(ps);
        imc = ps / (alt * alt);
        document.getElementById("txtresultado").value = imc;

        if (rdsexo.checked == true) {
            if (imc > 38.9)
                alert("Obesidade mórbida - IMC feminino muito acima do ideal");

            else if (imc >= 29)
                alert("Obesidade moderada - IMC feminino acima do ideal");

            else if (imc >= 24)
                alert("Obesidade leve - IMC feminino um pouco acima do ideal");

            else if (imc >= 19)
                alert("Peso ideal - IMC feminino ideal");

            else
                alert("Abaixo do peso - IMC feminino abaixo do ideal");
        } else {
            if (imc > 39.9)
                alert("Obesidade mórbida - IMC masculino muito acima do ideal");

            else if (imc >= 30)
                alert("Obesidade moderada - IMC masculino acima do ideal");

            else if (imc >= 25)
                alert("Obesidade leve - IMC masculino um pouco acima do ideal");

            else if (imc >= 20)
                alert("Peso ideal - IMC masculino ideal");

            else
                alert("Abaixo do peso - IMC masculino abaixo do ideal");
        }
    }
}
