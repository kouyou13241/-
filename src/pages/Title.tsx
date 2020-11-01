import React, { Component, Fragment, useEffect, useState } from 'react';
import '../asserts/App.css';
import { Menu, Dropdown } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const { SubMenu } = Menu;
function Title() {
  return (
    <div className="title">
      <div className="title-left">
        <div>
          <img
            className="title-picture"
            src={require('../asserts/武大校标.jpg')}
          />
        </div>
        <div>
          <p id="big-font">李兵实验室</p>
        </div>
      </div>
      <div className="title-right">
      <Menu mode="horizontal" key='head' style={{cursor:'pointer'}} >
    <Menu.Item >
      {' '}
      <Link className="nav-Link" to="/">
       首页
      </Link>
    </Menu.Item>
    <SubMenu title='导师团队' onTitleClick={()=>(window.location.href='/leaderteam/Libing')}>
      <Menu.Item><Link className="nav-Link" to="/leaderteam">
        团队负责人
      </Link></Menu.Item>
      <SubMenu title='团队成员' >
       <Menu.Item><Link className='nav-Link' to='/leaderteam/Libing'>李兵</Link></Menu.Item>
       <Menu.Item><Link className='nav-Link' to='/leaderteam/Wangjian'>王健</Link></Menu.Item>
     </SubMenu>
    </SubMenu>
    <Menu.Item>
      {' '}
      <Link className="nav-Link" to="/researchtarget">
        研究方向
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="nav-Link" to="/articalpublished">
        发表文章
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="nav-Link" to="/teamnews" style={{cursor:'revert'}}>
        组内新闻
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="nav-Link" to="/studentshow">
        学生风采
      </Link>
    </Menu.Item>
    <Menu.Item>
      {' '}
      <Link className="nav-Link" to="/resoursedownload">
        资源下载
      </Link>
    </Menu.Item>
    <Menu.Item>
      {' '}
      <Link className="nav-Link" to="/english">
        english
      </Link>
    </Menu.Item>
  </Menu>
      </div>
    </div>
  );
}
export default Title;
