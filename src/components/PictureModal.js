import React from "react";
import Modal from "react-modal";

export default class PictureModal extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Modal
				ariaHideApp={false}
				onRequestClose={this.props.closeModal}
				isOpen={this.props.isOpen}
				closeTimeoutMS={200}
				className="modal-picture"
			>
				<div className="modal-picture__body">
				<img className="modal-picture__image" src={this.props.image} />
				</div>
				<button className="button modal-button" onClick={this.props.closeModal}>Close</button>
      </Modal>
		)
	}
}