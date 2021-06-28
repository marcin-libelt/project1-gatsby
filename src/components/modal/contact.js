import React, { useState } from 'react';
import Modal from 'react-modal';
import ContactForm from "../form/ContactForm";

Modal.setAppElement(`#___gatsby`);

const ContactModal = () => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={openModal} className="btn btn-primary p-3 px-4 my-5">Get in touch</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <button onClick={closeModal}>close</button>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Full bio contact form</h2>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </Modal>
        </>
    )
}

export default ContactModal