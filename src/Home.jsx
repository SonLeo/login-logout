import React, { Component} from "react";

class Home extends Component {
    componentWillUnmount() {
        alert('Goodbye!!!');
    }

    render() {
        return (
            <div className="container d-flex align-items-center text-center justify-content-center">
                <div className="form-signin">
                    <h1 className="h3 mb-3 fw-normal">Wellcome!</h1>
                    <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.props.onLogOut}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Home;