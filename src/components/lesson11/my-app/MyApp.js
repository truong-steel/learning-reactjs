import React , {Component} from "react";
import { BrowserRouter, Routes, Router, Route, Navigate, Link , Switch } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import "./MyApp.css";
import Calculator from "../calculator/Calculator";
import Form from "../form-with-ref/Form";
import FormWithState from "../form-with-state/FormWithState";
import FormWithReducer from "../form-with-reducer/FormWithReducer";
import LifeCycle from "../lifecycle/LifeCycle";
import Axios from "../axios/Axios";
import ParentToChild from "../parent-to-child/ParentToChild";
import ChildToParent from "../child-to-parent/ChildToParent";
import ChildToChild from "../child-to-child/ChildToChild";
import RegisterForm from "../../lesson10/Parent";




function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Navigation 1', 'sub1', <AppstoreOutlined />, [
      getItem(<Link to="/life-cycle" className="link">
      Life Cycle
  </Link>),
      getItem(<Link to="/calculator" className="link">
      Calculator
  </Link>),
      getItem(<Link to="/axios" className="link">
      Axios
  </Link>),
    ]),
    getItem('Hooks', 'sub2', <AppstoreOutlined />, [
      getItem(<Link to="/form-with-ref" className="link">
      Form With Ref
  </Link>),
      getItem(<Link to="/form-with-state" className="link">
      Form With State
  </Link>),
      getItem(<Link to="/form-with-reducer" className="link">
      Form With Reducer
  </Link>),
      getItem(<Link to="/use-context" className="link">
      Form With Context
  </Link>)
    ]),
    {
      type: 'divider',
    },
    getItem('Communication', 'sub4', <AppstoreOutlined />, [
      getItem(<Link to="/parent-to-child" className="link">
      Parent To Child
  </Link>),
      getItem(<Link to="/child-to-parent" className="link">
      Child To Parent
  </Link>),
      getItem(<Link to="/child-to-child" className="link">
      Child To Child
  </Link>)
    ]),
  ];

function Menu1 () {
   return <Calculator/>
}
function Menu2 () {
    return <Form/>
 }
 function Menu3 () {
    return <FormWithState/>
 }
 function Menu4 () {
    return <FormWithReducer/>
 }
 function Menu5 () {
    return <LifeCycle/>
 }
 function Menu6 () {
    return <Axios/>
 }
 function Menu7 () {
    return <ParentToChild/>
 }
 function Menu8 () {
    return <ChildToParent/>
 }
 function Menu9 () {
    return <ChildToChild/>
 }
 function Menu10 () {
   return <RegisterForm/>
 }
 

class HomePage extends Component {
    
    render() {
    return (
        <BrowserRouter>
        <div className='nav'>
        <div className="Menu">
            <h1>MENU</h1>
            <Menu
      
      style={{
        width: 256, 
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      
    />
                </div>
            <div className='Content'>
            <Routes>
                <Route path="/calculator" element={<Menu1/>} />
                <Route path="/form-with-ref" element={<Menu2/> } />
                <Route path="/form-with-state" element={<Menu3/>} />
                <Route path="/form-with-reducer" element={<Menu4/>} />
                <Route path="/life-cycle" element={<Menu5/>} />
                <Route path="/axios" element={<Menu6/>} />
                <Route path="/parent-to-child" element={<Menu7/>} />
                <Route path="/child-to-parent" element={<Menu8/>} />
                <Route path="/child-to-child" element={<Menu9/>} />
                <Route path="/use-context" element={<Menu10/>} />
            </Routes>
            </div>
        </div>
        </BrowserRouter>    
         );
    }
}
export default HomePage;