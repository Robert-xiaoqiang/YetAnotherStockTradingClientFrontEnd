import React from 'react';
import '../css/index.css';
import '../css/index_scss.scss';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import Introduce from './Introduce.js';
import APPProgress from './Progress.js';
import APPCarousel from './Carousel.js';
import Stockhold from './Stockhold';
import Fund from './Fund';
import BuySellForm from './BuySellForm';
import Sider from './Sider';

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
                  <Menu.Item key="setting:1">退出</Menu.Item>
              </SubMenu>
          </Menu>
        <div className="right-box">
          <Route
          path='/app' 
          render={ ({ match: { url } }) => (
            <>
              <Route path={`${url}/introduce`} component={Introduce} />
              <Route path={`${url}/table`} component={Stockhold}/>
              <Route path={`${url}/form`} component={BuySellForm}/>
              <Route path={`${url}/progress`} component={APPProgress}/>
              <Route path={`${url}/progress2`} component={Fund}/>
              <Route path={`${url}/carousel`} component={APPCarousel}/>
            </>) } 
          />
        </div>
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;
