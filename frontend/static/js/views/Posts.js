import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Posts");
	}

	async getHtml() {
		return `
		<h1>Posts!</h1>

		<p>Bacon ipsum dolor amet meatball fatback venison, chislic sirloin boudin tail burgdoggen beef short loin frankfurter pork chop. 
		Chicken alcatra pork belly, shank sirloin jerky tail landjaeger. 
		Pork loin t-bone leberkas sausage, shank corned beef salami rump pancetta. T-bone turducken ham ball tip. 
		Frankfurter ball tip pig porchetta tenderloin salami flank burgdoggen.
		Jerky turkey ball tip chislic porchetta brisket doner shank chicken pork loin jowl strip steak burgdoggen kielbasa.</p>
		`;
	}
}