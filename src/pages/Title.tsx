import React, { Component, Fragment, useEffect, useState } from 'react';
import '../asserts/App.css';
import { Menu, Dropdown } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const { SubMenu } = Menu;
function Title() {
  const [res, setRes] = useState<any>();
  useEffect(() => {
    fetch('/platform-scientific/api/sci/teacher/filter/detail').then(async (response) => {
      setRes(await response.json());
    });
  }, []);
  console.log(res);
  
  let value=res?res.data.value:NaN;
  return value?(
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
      <Menu mode="horizontal" key='head' style={{fontSize:'15px'}} >
    <Menu.Item >
      {' '}
      <Link  to="/">
       首页
      </Link>
    </Menu.Item>
    <SubMenu title='导师团队' onTitleClick={()=>(window.location.href='/leaderteam/B598F5A43C8645EDA2BA170A545DDFAF')}>
      <Menu.Item><Link  to="/leaderteam">
        团队负责人
      </Link></Menu.Item>
      <SubMenu title='团队成员' >
  {value.map((item: any)=>(<Menu.Item><Link to={'/leaderteam/'+item.id} >{item.teacherName}</Link></Menu.Item>))}
     </SubMenu>
    </SubMenu>
    <Menu.Item>
      {' '}
      <Link  to="/researchtarget">
        研究方向
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link  to="/articalpublished">
        发表文章
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link  to="/teamnews" >
        组内新闻
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link  to="/studentshow">
        学生风采
      </Link>
    </Menu.Item>
    <Menu.Item>
      {' '}
      <Link  to="/resoursedownload">
        资源下载
      </Link>
    </Menu.Item>
    <Menu.Item>
      {' '}
      <Link  to="/english">
        english
      </Link>
    </Menu.Item>
  </Menu>
      </div>
    </div>
  ):<p>isLoading...</p>
}
export default Title;
