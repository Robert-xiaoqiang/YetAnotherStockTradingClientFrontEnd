import React from 'react';
import '../css/index.css';
import '../css/index_scss.scss';
import { Redirect, Route, BrowserRouter, Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import Introduce from './Introduce.js';
import APPProgress from './Progress.js';
//import APPCarousel from './Carousel.js';
import Stockhold from './Stockhold';
import Fund from './Fund';
import BuySellForm from './BuySellForm';
import Sider from './Sider';
import ModifyPassForm from './ModifyPass.js'
import HistoryRecord from './HistoryRecord';
import QueryStock from './QueryStock';
const SubMenu = Menu.SubMenu;

function App() {
  let name;
  if (localStorage.getItem("userinfo") === null) {
    return <Redirect to="/login"/>
  } else {
    name = JSON.parse(localStorage.getItem("userinfo")).username;
  }
  return (
    // <BrowserRouter>
    //     <Route path="/app/" render={() => <Sider username={ name } />}>
    //         <Route exact path="/app/" render={() => <Introduce />} />
    //         <Route path="introduce/" render={() => <Introduce/>} />
    //         <Route path="table/" render={() => <Stockhold/>} />
    //         <Route path="form/" render={() => <BuySellForm/>} />
    //         <Route path="progress/" render={() => <APPProgress/>} />
    //         <Route path="progress2/" render={() => <Fund/>} />
    //         <Route path="carousel/" render={() => <APPCarousel/> } />
    //     </Route>
    // </BrowserRouter>
    //<BrowserRouter>
    <div>
      <Sider />
      <div id="rightWrap">
          <Menu mode="horizontal">
              <SubMenu title={<span><Icon type="user" />{ name }</span>}>
                  <Menu.Item key="modifiedPass"><Link to="/app/password">修改密码</Link></Menu.Item>
                  <Menu.Item key="setting"><Link to="/login">退出</Link></Menu.Item>
              </SubMenu>
          </Menu>
        <div className="right-box">
          <Route
          path='/app' 
          render={ ({ match: { url } }) => (
            <>
              <Route path={`${url}/introduce`} component={Introduce} />
              <Route path={`${url}/querystock`} component={QueryStock}/>
              <Route path={`${url}/buysellform`} component={BuySellForm}/>
			  <Route path={`${url}/stockhold`} component={Stockhold}/>
              <Route path={`${url}/fund`} component={Fund}/>
              <Route path={`${url}/password`} component={ModifyPassForm}/>
              <Route path={`${url}/history`} component={HistoryRecord}/>  
           </>) } 
          />
        </div>
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
