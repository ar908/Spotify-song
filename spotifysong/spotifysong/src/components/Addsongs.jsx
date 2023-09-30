import React, { useState } from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import { Last } from "react-bootstrap/esm/PageItem";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MultiSelect } from "react-multi-select-component";

import { useNavigate } from "react-router-dom";

import Modals from "./Modals";

const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Mango 🥭", value: "mango" },
];

function Addsongs() {
    const [show, setShow] = useState(false);
    const [art, setArt] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selected, setSelected] = useState([]);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [dob, setDob] = useState("");
    const [images, setImages] = useState("");
    const navigate = useNavigate();
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     navigate("/home");
    // };

    const [artists, setArtists] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access all the form data here and submit it to your backend or perform other actions
        const formData = {
            name,
            date,
            images,
            artists,
        };
        console.log("Form Data:", formData);
        // You can also navigate to another page here
        navigate("/home");
    };

    const handleAddArtist = () => {
        // Add the selected artist to the artists array
        if (selected.length > 0) {
            setArtists([...artists, ...selected]);
            setSelected([]); // Clear the selected artists
        }
    };

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
            <Container style={{ maxWidth: "500px" }}>
                <div>
                    <h3>Add a new Song </h3>
                </div>
                {/* <Card className="pt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="pt-4">
                            <label>Song Name : </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>

                        <div className="pt-4">
                            <label>Date Related : </label>
                            <input
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>

                        <div className="pt-4">
                            <label>Image </label>
                            <input
                                type="file"
                                name="images"
                                value={images}
                                onChange={(e) => setImages(e.target.value)}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>

                        <div className="pt-4 mx-4">
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                style={{ width: "300px" }}
                                // labelledBy="Select"
                            />
                        </div>

                        <div className="pt-4">
                            <label>Artists </label>
                            <input
                                type="text"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>
                        <div className="p-5">
                            <Button variant="primary" onClick={handleShow}>
                                + Add Artist
                            </Button>
                        </div>

                        <div>
                            <Card.Body>
                                <Button className="btn mx-3" type="submit">
                                    Save
                                </Button>

                                <Button className="btn" type="submit">
                                    Close
                                </Button>
                            </Card.Body>
                        </div>
                    </form>
                </Card> */}

                <Card
                    style={{
                        maxWidth: "400px",
                        margin: "0 auto",
                        padding: "20px",
                    }}
                >
                    <Form onSubmit={handleSubmit}>
                        <div className="pt-4">
                            <Form.Label>Song Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>

                        <div className="pt-4">
                            <Form.Label>Date Related:</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>

                        <div className="pt-4">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control
                                type="file"
                                name="images"
                                // value={images} // You generally don't set the value of a file input
                                onChange={(e) => setImages(e.target.files[0])}
                                required
                                style={{ width: "300px" }}
                            />
                        </div>

                        <div className="pt-4 mx-4">
                            <Form.Label>Artists:</Form.Label>
                            <MultiSelect
                                options={options} // Define your options here
                                value={selected}
                                onChange={setSelected}
                                style={{ width: "300px" }}
                            />
                        </div>
                        <div className="pt-4">
                            {" "}
                            <Button variant="primary" onClick={handleShow}>
                                + Add Artist
                            </Button>
                        </div>

                        <div className="p-5">
                            <Button
                                className="btn mx-3"
                                variant="primary"
                                type="submit"
                            >
                                Save
                            </Button>
                            <Button variant="secondary" type="reset">
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Card>

                {/* Modal */}

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

export default Addsongs;
