export default class Negociacao {
	constructor(
		private _data: Date, private _quantidade: number, private _valor: number
	) {}

	get data() {
		const data = new Date(this._data.getTime())
		return data;
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}

	get volume() {
		return this.quantidade * this.valor;
	}
}