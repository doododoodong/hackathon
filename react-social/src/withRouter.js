import { useNavigate, useLocation, useParams } from 'react-router-dom';
import React from 'react';

export function withRouter(Component) {
    return (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        return <Component {...props} navigate={navigate} location={location} params={params} />;
    };
}