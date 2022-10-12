import Negociacao from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class negociacaoController {
	private inputData: HTMLInputElement;
	private inputQuantidade: HTMLInputElement;
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes;
	private negociacoesView = new NegociacoesView(".negociacoes-view");
	private mensagemView = new mensagemView("#mensagemView")

	constructor() {
		this.inputData = document.querySelector('#data');
		this.inputQuantidade = document.querySelector('#quantidade');
		this.inputValor = document.querySelector('#valor');
		this.negociacoesView.update(this.negociacoes);
		this.mensagemView.update('Negociação adicionada com sucesso');
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
		this.negociacoesView.update(this.negociacoes);
		this.mensagemView.update('Negociação adicionada com sucesso');
		
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