function gotoLink(link){
    window.open(link.value);
};

function copyPixKey() {
    const PixKey = "cpamponet59@gmail.com";
    navigator.clipboard.writeText(PixKey).then(() => {
        const alertCopy = document.getElementById('alert-copy');
        alertCopy.classList.remove('d-none');
        setTimeout(() => {
            alertCopy.classList.add('d-none');
        }, 3000);
    }).catch(err => {
        console.error("Erro ao copiar a chave Pix: ", err);
    });
}

