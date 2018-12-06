import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../store/actions/authActions';

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: {}
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/find-person');
        }
    }
    componentWillReceiveProps = nextProps => {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/find-person');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        
        // const errorDisplay = errors ? (
        //     <div className="form-error">{errors[0]}</div>
        // ) : (null);

        return (
            <div className="split-screen-sect">
                <div className="split-screen-lhs">
                    <div className="hp-sect-title">Login</div>
                    <div className="hp-sect-subtitle">Create the right atmosphere for the occassion</div>
                    <ul className="hp-sect-content">
                        <li>
                            Bellevoye bears the name of a road, the least traveled by, a path
                            that one barely sees and that carries the promise of dawn, a
                            destination shaped like a dream.
                </li>
                        <li>
                            Jean and Alexandre designed this dream, placing their faith at the
                            very heart of it, faith in the strength of their culture and
                            country, France.
                </li>
                        <li>
                            They have made this dream come true with a crazy and audacious
                            bet. It was born from a will to create, innovate, and push the
                            boundaries: producing a great French whisky, with all of our
                            skills and know-how, our terroirs and our raw materials.
                </li>
                        <li>
                            They have built this dream though strong values and the wish to
                            establish a virtuous circle around their whisky, from suppliers to
                            partners through retailers and customers.
                </li>
                        <li>
                            Some stories are meant to be told, dreams must become true,
                            otherwise they are doomed to remain no more than beautiful ideas.
                </li>
                    </ul>
                </div>
                <div className="split-screen-rhs">
                    <form onSubmit={this.handleSubmit} >
                        <input
                            type="text"
                            name="email"
                            className="site-input"
                            placeholder="Email"
                            onChange={this.handleInputChange}
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        <input
                            className="site-input"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleInputChange}
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        <button className="btn btn-x2 btn-default">Sign In</button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
