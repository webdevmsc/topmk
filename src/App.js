import './App.css';
import * as React from 'react'
import {connect, Provider} from "react-redux";
import MainContainer from "./components/Main/MainContainer";
import store from "./redux/redux-store";


const App = React.memo(({}) => {

  return (
      <MainContainer/>
  )
})

const mapStateToProps = (state) => {
  return {

  }
}

let AppContainer = connect(mapStateToProps, { })(App);

let Application = () => {
  return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
  )
}



export default Application;
