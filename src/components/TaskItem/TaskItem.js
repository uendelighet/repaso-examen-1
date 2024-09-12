class TaskItem extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['título', 'descripción'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

	render() {

        this.shadowRoot.innerHTML = `
        <style>

            .task-item {

                display: flex;
                flex-wrap: column;
                justify-content: center;
                background-color: aqua;
            };
        </style>
        <div class="task-item"> 
        <input type = "checkbox" name = "task-checkbox"/> 
        <h1>${this.titulo || 'Task without name'}</h1>
        <p>${this.descripcion || 'No tiene descripcion'}</p>
        
        </div> 
        `;
	}
}

customElements.define('task-item', TaskItem);
export default TaskItem;