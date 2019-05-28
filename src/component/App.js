import React from 'react';
import '../css/index.css';
import '../css/index_scss.scss';
import { Redirect, Route, BrowserRouter } from 'react-router-dom';
import { Menu } from 'antd';

import Introduce from './Introduce.js';
import APPProgress from './Progress.js';
import APPCarousel from './Carousel.js';
import Stockhold from './Stockhold';
import Fund from './Fund';
import Sider from './Sider';
import BuySellForm from './BuySellForm';

const SubMenu = Menu.SubMenu;

function App() {
  let name;
  if (localStorage.getItem("userinfo") === null) {
    return <Redirect to="/login"/>
  } else {
    name = JSON.parse(localStorage.getItem("userinfo")).username;
  }
  return (
    <BrowserRouter>
        <Route path="/" render={() => <Sider username={ name } />}>
            <Route exact path="/" component={Introduce} />
            <Route path="introduce/" component={Introduce} />
            <Route path="table/" component={Stockhold} />
            <Route path="form/" component={BuySellForm} />
            <Route path="progress/" component={APPProgress} />
            <Route path="progress2/" component={Fund} />
            <Route path="carousel/" component={APPCarousel} />
        </Route>
    </BrowserRouter>
  );
}

export default App;
