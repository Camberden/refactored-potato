import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Settings");
	}

	async getHtml() {
		return `
		<h1>Configure Settings</h1>

		<p>Bacon ipsum dolor amet meatball fatback venison.</p>
		<p>Bacon ipsum dolor amet meatball fatback landjaeger.</p>

		`;
	}
}