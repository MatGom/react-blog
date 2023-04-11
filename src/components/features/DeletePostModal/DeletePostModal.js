import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeletePostModal({ showModal, closeModal, removePost }) {
  return (
    <div className='modal show' style={{ display: 'block', position: 'initial' }}>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this post from the app. <br /> Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
          <Button variant='danger' onClick={removePost}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeletePostModal;
