function mostrarDataHora() {
    const data = new Date();
    console.log(data.toLocaleString());

    document.getElementById('data').innerText = data.toLocaleString();
}

mostrarDataHora();


function alterarNomeAlteracaoMaiusculo(){
    const nomeAlteracao = document.getElementById('nome-alteracao');
    nomeAlteracao.innerText = nomeAlteracao.innerText.toUpperCase();
}
alterarNomeAlteracaoMaiusculo();