import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement(`#___gatsby`);

const RequestQuoteModal = () => {

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

    const customStyles = {
        color: 'red'
    }

    return (
        <>
            <button onClick={openModal} className="btn btn-primary p-3 px-4 my-5">Request a quote</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                className="Modal"
                overlayClassName="Overlay"
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </>
    )
}

export default RequestQuoteModal