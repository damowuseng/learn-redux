import React, {PureComponent} from 'react';
import Home from "./pages/home5";
import About from "./pages/about5";
import Profile from "./pages/profile";
import User from "./pages/user";
import {
  NavLink,
  Route,
  Switch,
  withRouter
} from 'react-router-dom' ;
import {renderRoutes} from 'react-router-config'

import "./App.css";
import Details from "./pages/details";
import routes from "./router";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
          {to: "/", title: "首页"},
          {to: "/about", title: "关于"},
          {to: "/profile", title: "我的"},
          ]
    }
  }
  render() {
    const id = 123;
    return (
        <>
          {/*<Link to="/">首页</Link>*/}
          {/*<Link to="/about">关于</Link>*/}
          {/*<Link to="/profile">我的</Link>*/}
          
          {/*只有navlink有exact属性*/}
          <NavLink exact to="/" >首页</NavLink>
          <NavLink to="/about" >关于</NavLink>
          <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
          <NavLink to="/user" activeClassName="link-active">用户中心</NavLink>
          <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
          <button onClick={e => this.toJoin()}>手动路由--点击我加入</button>
          
          {/*<Switch>*/}
          {/*  <Route exact path="/" component={Home}/>*/}
          {/*  <Route path="/about" component={About}/>*/}
          {/*  <Route path="/profile" component={Profile}/>*/}
          {/*  <Route path="/user" component={User}/>*/}
          {/*  <Route path="/detail/:id" component={Details}/>*/}
          {/*</Switch>*/}
          {renderRoutes(routes)}
          
        </>
    );
  }
  toJoin() {
    this.props.history.push("/user")
  }
}



export default withRouter(App);
