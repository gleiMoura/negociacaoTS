import Negociacao from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class negociacaoController {
	private inputData: HTMLInputElement;
	private inputQuantidade: HTMLInputElement;
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes;

	constructor() {
		this.inputData = document.querySelector('#data');
		this.inputQuantidade = document.querySelector('#quantidade');
		this.inputValor = document.querySelector('#valor');
	}

	criaNegociacao(): Negociacao {
		const exp = /-/g;
		const date = new Date(this.inputData.value.replace(exp, ","));
		const quantidade = parseInt(this.inputQuantidade.value);
		const valor = parseFloat(this.inputValor.value);

		const negociacao = new Negociacao(date, quantidade, valor);

		return negociacao;
	}

	adiciona() {
		const negociacao = this. criaNegociacao();
		this.negociacoes.adiciona(negociacao);
		
		console.log(this.negociacoes.lista());

		this.limparFormulario();
	}

	limparFormulario(): void {
		this.inputData.value = '';
		this.inputQuantidade.value = '';
		this.inputValor.value = '';
		this.inputData.focus();
	}
}