import React from 'react';

const Login = () => {
    return (
        <div>
            <h2 className="mt-5 p-5">Pleace Login Your Account</h2>
            <form>
                <div className="mb-3 w-50 mx-auto">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 w-50 mx-auto">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check w-50 mx-auto">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br />
                <button type="submit" className="btn btn-primary m-2">Google Sing In</button>
                <button type="submit" className="btn btn-primary ms-2 m-2">Facebook Sing In</button>
            </form>
        </div>
    );
};

export default Login;