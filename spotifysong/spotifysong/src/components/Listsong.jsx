import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Stars from "./Stars";

function Listsong() {
    return (
        <>
            <Container className="pt-5">
                <div className="py-3">
                    <h3>UserList song</h3>
                </div>

                <Card>
                    <Table>
                        <thead>
                            <tr>
                                <th>S no</th>
                                <th>Image</th>
                                <th>Song</th>
                                <th>Date of Release</th>
                                <th>Artists</th>
                                <th>Rate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                            alt="photo"
                                            width={120}
                                            height={180}
                                        />
                                    </div>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>{<Stars />}</td>
                                <td>
                                    <Button className="mx-3">Edit</Button>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    {" "}
                                    <div>
                                        <img
                                            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                            alt="photo"
                                            width={120}
                                            height={180}
                                        />
                                    </div>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>{<Stars />}</td>
                                <td>
                                    <Button className="mx-3">Edit</Button>
                                    <Button>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Container>
        </>
    );
}

export default Listsong;
