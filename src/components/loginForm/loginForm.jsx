import { useState } from "react";
import styled from "./loginForm.module.css"

function validate(user) {
    let errors = {}
    if (!user.email) {
        errors.email = "Enter your email"
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = "Invalid email address"
    }
    if (user.email.length >= 35) {
        errors.email = "Invalid email address"
    }
    if (!/\d/.test(user.password)) {
        errors.password = "Password must contain a letter"
    }
    if (user.password.length < 6 || user.password.length > 10) {
        errors.password = "Password must be between 6 and 10 characters"
    }

    return errors
}


function LoginForm({ login }) {
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState(
        {
            email: "",
            password: "",
        }
    )

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

        setErrors(validate({
            ...user,
            [e.target.name]: e.target.value,
        }))

    }

    function handleSubmit(e) {
        e.preventDefault(user);
        if (!errors.email && !errors.password) {
            login(user)
        } else {
            alert("Incorrect data");
        }
    }


    return (
        <div className={styled.fromContainer}>
            <div className={styled.fromTitle}>
                <h1>Fill Your Credential</h1>
            </div>


            <form onSubmit={handleSubmit}>
                <div className={styled.credentials}>
                    <label>Username</label>
                    <input type="text" placeholder="ColocaTuMail@gmail.com" name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}

                </div>

                <div className={styled.credentials}>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit" className={styled.submitBtn}>
                    LOGIN

                </button>
            </form>
        </div>





    );
}

export default LoginForm;