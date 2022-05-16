import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Dashboard");
	}

	async getHtml() {
		return `
		<h1>Welcome, Chrispy!</h1>

		<p>Ground round tenderloin prosciutto burgdoggen meatloaf porchetta beef. 
		 Chislic salami burgdoggen short loin shankle biltong pork chop pastrami short ribs cupim.
		 Salami tenderloin rump picanha leberkas jowl landjaeger frankfurter. 
		 Ham ball tip pork chop ham hock, andouille kevin prosciutto capicola.</p>

		 <p>
		 	<a href="/posts" data-link>View recent posts</a>.
		</p>
		`;
	}
}