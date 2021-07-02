import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({show, onHide, saveAction}) => {
    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Alert!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure? You want to delete this post? </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={saveAction}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
            </Modal.Footer>
      </Modal>
    )
}
export default MyModal
