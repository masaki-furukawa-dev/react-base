import React, { Component } from 'react';
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login : this.props.login ? this.props.login : false,
      userPermission : this.props.userPermission ? this.props.userPermission : 0,
    };
  }

  componentDidMount() {
      if(!this.state.login){
        this.props.dispatch({type: "Logout"});
      }
  }

  render() {
    const { login } = this.state;
    if(!login) {
      return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
    } else {
      if(!this.props.permission || this.props.permission === this.state.userPermission) {
        return (
          <Route exact path={this.props.path} component={this.props.component} />
        )
      } else {
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
      }
    }
  }
}

const mapStateToProps = store => {
    return {
        login: store.login.login,
        userPermission: store.login.permission,
    }
};

const connectedPrivateRoute = connect(mapStateToProps)(withRouter(PrivateRoute));
export { connectedPrivateRoute as PrivateRoute };