class TaskList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        this.task = [];
	}

	static get observedAttributes() {

	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />

    `;
	}
}

customElements.define('task-list', TaskList);
export default TaskList;