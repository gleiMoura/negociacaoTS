import { negociacaoController } from "./controllers/negociacaoController.js";
const controller = new negociacaoController;
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.adiciona();
});
