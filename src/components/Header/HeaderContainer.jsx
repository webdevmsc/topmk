import {connect} from "react-redux";
import React from 'react';
import Header from "./Header";

const HeaderContainer = React.memo((props) => {
    return (
        <Header { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(HeaderContainer);
