function mostrarDataHora() {
    const data = new Date();
    console.log(data.toLocaleString());

    document.getElementById('data').innerText = data.toLocaleString();
}

mostrarDataHora();