function idade() {
    dia = 01;
    mes = 03;
    ano = 2001;
    let idade;
    idade = new Date().getFullYear() - ano;
    HTMLNovo = document.createTextNode(idade+" anos | Estudante");

    let a = document.getElementById("idade");
    a.appendChild(HTMLNovo);
}