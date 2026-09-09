# Gerador de QR Code

Gerador de QR Code simples e responsivo para transformar textos e links em códigos QR instantaneamente, direto no navegador.

## Demonstração

Acesse a versão publicada pelo GitHub Pages:

**[Abrir o Gerador de QR Code](https://viniinogueira.github.io/gerador-qr-code/)**

**Link bruto**

https://viniinogueira.github.io/gerador-qr-code/

## Funcionalidades

- Geração do QR Code em tempo real enquanto o usuário digita.
- Suporte para links, textos e outros conteúdos compatíveis com QR Code.
- Interface leve, sem cadastro e sem servidor próprio.
- Código QR renderizado com nível alto de correção de erros.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- [QRCode.js](https://github.com/davidshimjs/qrcodejs), carregada via CDN do cdnjs

## Como usar

1. Abra a [demonstração online](https://viniinogueira.github.io/gerador-qr-code/).
2. Digite um link ou texto no campo de entrada.
3. O QR Code será atualizado automaticamente abaixo do campo.

## Executar localmente

Como o projeto é estático, não é necessário instalar dependências ou executar um processo de build.

1. Clone o repositório:

	```bash
	git clone https://github.com/viniinogueira/gerador-qr-code.git
	```

2. Entre na pasta do projeto:

	```bash
	cd gerador-qr-code
	```

3. Abra o arquivo `index.html` no navegador.

Também é possível usar uma extensão de servidor local, como o Live Server, para desenvolver com recarregamento automático.

## Estrutura do projeto

```text
gerador-qr-code/
├── assets/
│   └── img/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Publicação

O projeto está hospedado no [GitHub Pages](https://pages.github.com/) e pode ser acessado em:

<https://viniinogueira.github.io/gerador-qr-code/>
