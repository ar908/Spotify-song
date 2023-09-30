import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

export default function Modals() {
    const [show, setShow] = useState(false);
    const [art, setArt] = useState("");
    const [dob, setDob] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmitmodal = (e) => {
        e.preventDefault();
        console.log("Submit value-->", art, dob);

        setArt("");
        setDob("");
    };
    const handleDone = () => {
        console.log("Done value-->", { art: art, dob: dob });

        setArt("");
        setDob("");
        handleClose(); // Close the modal
    };
    return (
        <>
            <Container>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Artist</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmitmodal}>
                        <Modal.Body>
                            <div>
                                <label className="p-3">Artist Name: </label>
                                <input
                                    type="text"
                                    name="art"
                                    value={art}
                                    required
                                    onChange={(e) => setArt(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="p-3">Date of Birth :</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={dob}
                                    required
                                    onChange={(e) => setDob(e.target.value)}
                                    width={100}
                                />
                            </div>

                            <FloatingLabel
                                controlId="floatingTextarea2"
                                label="Songs"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: "100px" }}
                                />
                            </FloatingLabel>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleDone}>
                                Done
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </Container>
        </>
    );
}
