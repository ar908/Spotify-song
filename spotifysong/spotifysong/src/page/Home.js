import React from "react";
import Listsong from "../components/Listsong";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Artistlist from "../components/Artistlist";
import { Link } from "react-router-dom";
import Addsongs from "../components/Addsongs";

function Home() {
    return (
        <>
            <Container className="pt-4">
                <div className="card px-3 py-2">

                    <Stack direction="horizontal" gap={3}>
                        <div className="p-2">Top 10 Songlist</div>

                        <Link
                            className="p-2 ms-auto"
                            variant="outline-primary"
                            to={"/song"}
                            style={{
                                textDecoration: "none",
                                border: "1px solid blue",
                                borderRadius: "30px",
                            }}
                        >
                            {" "}
                            + Add Songs
                        </Link>

                    </Stack>
                </div>
                <Listsong />
                <Artistlist />
            </Container>
        </>
    );
}

export default Home;
