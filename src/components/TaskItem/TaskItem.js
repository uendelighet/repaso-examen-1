class TaskItem extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['título', 'descripción', 'completed'];
	}

	connectedCallback() {
		this.render();

	}

	attributeChangedCallback(propName, oldValue, newValue) {
		if (propName === 'completed'){
			this.updateStatus()
		}
	}

	updateStatus (){
		const taskContainer = this.shadowRoot.querySelector(".task-item")
		taskContainer.classList.toggle("completed", this.getAttribute("completed") === "true")

	}

	render() {
        this.shadowRoot.innerHTML = `
        <style>
        .task-item {
                display: flex;
                flex-wrap: column;
                justify-content: center;
                background-color: aqua;
        }
		.completed {
		text-decoration: line-through;
		color: red;
		}
        </style>
        <div class="task-item"> 
		<div>
        <h4>${this.getAttribute("title")}</h4>
        <p>${this.getAttribute("description")}</p>
		<div>
		<button id="toggle-completed">Completada</button>
        </div> 
        `;

		this.shadowRoot.querySelector('#toggle-completed').addEventListener('click', () => {
			const isCompleted = this.getAttribute('completed') === "true"; 
			this.setAttribute('completed', isCompleted ? 'false' : 'true');
		});

		this.updateStatus();


	}
}

customElements.define('task-item', TaskItem);
export default TaskItem;