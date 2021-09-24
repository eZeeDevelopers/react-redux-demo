import React from 'react'
const Footer = () => {
    return (
        <>
            <footer className="container-fluid text-center">
                <p>Online Store Copyright</p>
                <form className="form-inline">Get deals:
                     <input type="email" className="form-control" size="50" placeholder="Email Address"></input>
                    <button type="button" className="btn btn-danger">Sign Up</button>
                </form>
            </footer>
        </>
    );
}
export default Footer