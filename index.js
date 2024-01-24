function idade() {
    const diaNascimento = 1;
    const mesNascimento = 3;
    const anoNascimento = 2001;

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1; // Os meses em JavaScript são indexados de 0 a 11
    const anoAtual = hoje.getFullYear();

    let idade;

    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
        // Já fez aniversário este ano
        idade = anoAtual - anoNascimento;
    } else {
        // Ainda não fez aniversário este ano
        idade = anoAtual - anoNascimento - 1;
    }

    const HTMLNovo = document.createTextNode(idade + " anos | Técnologo em Sistemas para a Internet");

    const elementoIdade = document.getElementById("idade");
    elementoIdade.appendChild(HTMLNovo);
}