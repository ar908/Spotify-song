
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        //    console.log("value-->", name, email)


        try {
            const res = await axios.post("http://localhost:5000/registeruser", {
                name,
                email
            })

            console.log(res);

        } catch (error) {
            console.log("login error by user")
        }
        setLoading(false)

    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login User</h3>
                    <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            name="name"
                            value={name}
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className="form-control mt-1"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            {loading ? "submit" : "please wait"}
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}