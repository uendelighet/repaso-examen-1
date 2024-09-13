class TaskList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        this.task = []; //almacenar las tareas al presionar el boton añadir tarea y eso lo trae el abuelo
	}

	// static get observedAttributes() { observar parametros que hay que cambiar

	// }

	// attributeChangedCallback(propName, oldValue, newValue) {
	// 	if (oldValue !== newValue) {
	// 		this[propName] = newValue;
	// 		this.render();
	// 	}
	// }

	connectedCallback() {
		this.render();

		this.shadowRoot.querySelector('form').addEventListener('submit', (e) => this.addTask (e)); //shadowroot es todo el html
		}

		addTask (e) {
		e.preventDefault(); //para que no se recargue la pagina


		const title = this.shadowRoot.querySelector("#Title").value; //aqui llama al valor de lo que hay en render
		const description = this.shadowRoot.querySelector("#Description").value;

		if (title && description){ //si se escribe title y descripcion,
			const tarea = document.createElement("task-item"); //se crea una tarea (componente)
			tarea.setAttribute("title", title); //aqui se pone el nuevo valor de titulo
			tarea.setAttribute("description", description);
			tarea.setAttribute("completed", "false"); //pone atributo a la tarea que es completed con valor false

		this.shadowRoot.querySelector(".list").appendChild(tarea);
		this.shadowRoot.querySelector("form").reset();
		}



		}

	render() {
		this.shadowRoot.innerHTML = `
		<style>
		.list{
		max-width: 500px;
		margin: 0 auto;
		}
		</style>
		<div class="list">
		<form  class ="task-form">
		<input type="text" id="Title" name="name" required minlength="4" maxlength="8" size="10"/>
		<input type="text" id="Description" name="name" required minlength="4" maxlength="8" size="10" />
		<input type="submit" value = "Add task" />
		</form>
		</div>


    `;
	}
}

customElements.define('task-list', TaskList);
export default TaskList;