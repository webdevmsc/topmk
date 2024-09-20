import {connect} from "react-redux";
import React from 'react';
import Main from "./Main";

const MainContainer = React.memo((props) => {
    return (
        <Main { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(MainContainer);
