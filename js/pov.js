// define custom element
class MyModal extends HTMLElement {
	// define constructor
	constructor() {
		super();
		// create shadow DOM
		this.attachShadow({mode: 'open'});
		// create modal content
		this.shadowRoot.innerHTML = `
			<style>
				.modal {
					display: none;
					position: fixed;
					z-index: 1;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					overflow: auto;
					background-color: rgba(0,0,0,0.4);
				}
				.modal-content {
					background-color: #fefefe;
					margin: 10% auto;
					padding: 20px;
					border: 1px solid #888;
					width: 80%;
					max-width: 500px;
				}
				.close {
					color: #aaa;
					float: right;
					font-size: 28px;
					font-weight: bold;
				}
				.close:hover,
				.close:focus {
					color: black;
					text-decoration: none;
					cursor: pointer;
				}
			</style>
			<div class="modal">
				<div class="modal-content">
					<span class="close">&times;</span>
					<p>Please enter the password to access this page:</p>
					<input type="password" id="passwordInput">
					<button id="confirmButton">Confirm</button>
				</div>
			</div>
		`;
		// define variables for modal elements
		this.modal = this.shadowRoot.querySelector('.modal');
		this.closeBtn = this.shadowRoot.querySelector('.close');
		this.passwordInput = this.shadowRoot.querySelector('#passwordInput');
		this.confirmButton = this.shadowRoot.querySelector('#confirmButton');
		// add event listeners
		this.closeBtn.addEventListener('click', () => {
			this.hide();
		});
		this.confirmButton.addEventListener('click', () => {
			this.confirm();
		});
	}
	// define show method
	show() {
		this.modal.style.display = 'block';
	}
	// define hide method
	hide() {
		this.modal.style.display = 'none';
	}
	// define confirm method
	confirm() {
		if (this.passwordInput.value === 'mypassword') {
			this.hide();
		} else {
			alert('Incorrect password');
		}
	}
}
// register custom element
customElements.define('my-modal', MyModal);
