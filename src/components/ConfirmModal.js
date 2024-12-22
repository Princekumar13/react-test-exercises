import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const ConfirmModal = (props) => {
    const { modal, toggle, handleConfirm } = props;
    
    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
        >
            <ModalHeader toggle={toggle}>Delete Confirmation</ModalHeader>
            <ModalBody>
                <div className="mb-5">Do you want to delete this
                record.</div>
                <div className="text-end">
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                    <Button className="ms-3" color="primary" onClick={handleConfirm}>
                        Confirm
                    </Button>
                </div>    
            </ModalBody>
        </Modal>
    )
}

export default ConfirmModal;