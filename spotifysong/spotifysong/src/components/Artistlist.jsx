import React, { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function Artistlist() {
    const [show, setShow] = useState(false);
    const [art, setArt] = useState("");
    const [dob, setDob] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDone = () => {
        console.log("Done value-->", { art: art, dob: dob });

        setArt("");
        setDob("");
        handleClose(); // Close the modal
    };
    const handleSubmitmodal = (e) => {
        e.preventDefault();
        console.log("Submit value-->", art, dob);

        setArt("");
        setDob("");
    };
    return (
        <>
            <Container className="py-5">
                <div className="py-3">
                    {" "}
                    <h3>UserList Artists</h3>
                </div>
                <Card>
                    <Table>
                        <thead>
                            <tr>
                                <th>S no</th>
                                <th>Artist</th>
                                <th>DOB</th>
                                <th>Songs</th>
                                <th>Action</th>
                                {/* <th>Date of Release</th>
                                <th>Artists</th>
                                <th>Rate</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td> Haryy potter</td>
                                <td>Otto</td>
                                <td>qertyuijhgf asdfghj acvbnd</td>
                                <td>
                                    <Button
                                        className="mx-3"
                                        variant="primary"
                                        onClick={handleShow}
                                    >
                                        Edit
                                    </Button>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td> Franccyines</td>
                                <td>Otto</td>
                                <td>asdfghjhgd werthgvgdd wefc @mdo</td>
                                <td>
                                    <Button
                                        className="mx-3"
                                        variant="primary"
                                        onClick={handleShow}
                                    >
                                        Edit
                                    </Button>
                                    {/* <Button></Button> */}
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>

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

export default Artistlist;
