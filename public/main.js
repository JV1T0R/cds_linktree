function gotoLink(link){
    window.open(link.value);
};

document.addEventListener("DOMContentLoaded", function () {
    const copiarChaveBtn = document.getElementById("copiarChave");

    if (copiarChaveBtn) {
        copiarChaveBtn.addEventListener("click", copyPixKey);
    }
});

function copyPixKey() {
    const PixKey = "cpamponet59@gmail.com";
    navigator.clipboard.writeText(PixKey).then(() => {
        const alertCopy = document.getElementById("alert-copy");

        if (alertCopy) {
            alertCopy.classList.remove("d-none");
            setTimeout(() => {
                alertCopy.classList.add("d-none");
            }, 3000);
        }
    }).catch(err => {
        console.error("Erro ao copiar a chave Pix: ", err);
    });
}

