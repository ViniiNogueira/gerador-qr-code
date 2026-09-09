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
