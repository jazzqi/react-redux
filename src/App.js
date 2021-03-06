import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateUser, apiRequest } from "./actions/user-actions";

import { createSelector } from "reselect";

class App extends Component {
  // In order to use this, we need to add a constructor and bind this
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    // this.props.onApiRequest();
  }

  onUpdateUser(e) {
    this.props.onUpdateUser(e.target.value);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

// without rselect
// convert state and props to new props
// const mapStateToProps = (state, props) => {
//   return {
//     products: state.products,
//     user: state.user,
//     userPlusProp: `${state.user} ${props.aRandomProps}`
//   };
// };

// with reselect
const mapStateToProps = createSelector(
  state => state.products,
  state => state.user,
  // the last parameter function will assembly all previous param functions' result into one object
  (products, user) => ({
    user,
    products
  })
);

// Without thunk
// const mapActionToProps = (dispatch, props) => {
//   // console.log(props);
//   return bindActionCreators({
//     onUpdateUser: updateUser
//   }, dispatch);
// };

// 1st param is basically whatever we return from map state;
// 2nd is what we return from map actions to props
// 3rd is the passed in props
// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// }

// With thunk
const mapActionToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
};

export default connect(
  mapStateToProps,
  mapActionToProps
  // , mergeProps
)(App);
