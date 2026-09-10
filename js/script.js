const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: " ",
    width: 128,
    height: 128,
    correctLevel: QRCode.CorrectLevel.H
});

const input = document.getElementById("texto");

input.addEventListener("input" , () => {
    const valor = input.value.trim();
    qrcode.clear();
    qrcode.makeCode( valor || " ")
});

const botaobaixar = document.getElementById("baixar");

botaobaixar.addEventListener("click" , 
    () =>  { const imagem = document.querySelector("#qrcode img");

    if(!imagem) return ;

    const link = document.createElement("a");

    link.href = imagem.src;
    link.download = "qr code.png"

    link .click();    
});

const botaoCompartilhar = document.getElementById("compartilhar");

botaoCompartilhar.addEventListener("click" , async () => { const imagem = document.querySelector("#qrcode img");
 
    if (!imagem) return;

    const resposta = await fetch(imagem.src);
    const blob = await resposta.blob();

    const arquivo = new File(
        [blob],
        "qrcode.png",
        { type: "image/png" }
    );

    if (navigator.canShare && navigator.canShare({ files: [arquivo] })) {
        await navigator.share({
            title: "Meu QR Code",
            text: "Confira este QR Code",
            files: [arquivo]
        });
    } else {
        alert("Seu navegador não suporta compartilhamento de arquivos.");
    }
});