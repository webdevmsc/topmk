import {connect} from "react-redux";
import MainPage from "./MainPage";
import React from 'react'

const MainPageContainer = React.memo((props) => {
    return (
        <MainPage { ...props } />
    )
})

const mapStateToProps = (state) => {
    return {

    };
}


export default connect(mapStateToProps, { })(MainPageContainer);
