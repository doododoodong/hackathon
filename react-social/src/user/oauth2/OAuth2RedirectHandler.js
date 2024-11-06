import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { Navigate } from 'react-router-dom';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(window.location.search); // use window.location to access search params
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            return (
                <Navigate
                    to="/profile"
                    replace
                    state={{ from: this.props.location }}
                />
            );
        } else {
            return (
                <Navigate
                    to="/login"
                    replace
                    state={{ from: this.props.location, error: error }}
                />
            );
        }
    }
}

export default OAuth2RedirectHandler;
