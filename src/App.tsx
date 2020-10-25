import React, { Component, useEffect, useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
/*在学长的帮助下完成，自己要掌握*/
function Getnewsfliter(props: { numbers: React.ReactText; })
{
 const[res,setRes]=useState<any>();

 useEffect(()=>{
   fetch('/api/sci/news/filter?page=1&rows=3').then(
     async (response)=> {
     setRes(await response.json());
     }
   );
    },[]); 
 
  return (
     <div className="newsOfresearchGroup">
  <div className="news-discription">
    <div>
      <div>
        <img
          id="nobel-picture"
          src={require('./photos/homepage-nobel.jpg')}
        />
      </div>
      <div id="news-top-font">
      {res?res.data.value[props.numbers].title:'waiting'}
      </div>
      <div className="news-discription-dataflex">
        <div id="svg-flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
            >
              <path
                id="Icon_ionic-ios-contact"
                data-name="Icon ionic-ios-contact"
                d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                transform="translate(-3.375 -3.375)"
              />
            </svg>
          </div>
          <div>
            <p id="news-font">{res?res.data.value[props.numbers].userId :'waiting'}</p>
          </div>
        </div>
        <div id="svg-flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.5"
              height="17"
              viewBox="0 0 15.5 17"
            >
              <path
                id="Icon_awesome-calendar-times"
                data-name="Icon awesome-calendar-times"
                d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
              />
            </svg>
          </div>
          <div>
            <p id="news-font">2020-10-16</p>
          </div>
        </div>
      </div>
      <div id="news-bottom-font">
        祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
      </div>
    </div>
  </div>
</div>);
}

function Downloadlayer(props: {
  form: React.ReactNode; 
  space: React.ReactNode;
  numbers: React.ReactNode;
  date: React.ReactNode;
  name: React.ReactNode;
}) {
  return (
    <div>
      <div className="download-flex">
        <div className="download-layer-left">
          <p id="download-title-font">课程设计说明</p>
        </div>
        <div className="download-layer-right">
          <div>
            <p id="download-margin">{props.form}</p>
          </div>
          <div>
            <p id="download-margin">{props.space}</p>
          </div>
          <div>
            <p id="download-margin">{props.numbers}</p>
          </div>
          <div>
            <p id="download-margin">{props.date}</p>
          </div>
          <div>
            <p id="download-margin">{props.name}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
function Title() {
  return (
    <div className="title">
      <div className="title-left">
        <div>
          <img
            className="title-picture"
            src={require('./photos/武大校标.jpg')}
          />
        </div>
        <div>
          <p id="big-font">李兵实验室</p>
        </div>
      </div>
      <div className="title-right">
        <ul className="nav">
          <li>
            <Link className="nav-Link" to="/">
              {' '}
              首页
            </Link>
          </li>
          <li className="drop-down">
            <Link className="nav-Link" to="/leaderteam">
              导师团队
            </Link>
            <ul className="drop-down-content">
              <li className="drop-down">
                <Link className="nav-Link " to="/leaderteam">
                  导师团队
                </Link>
                <ul className="drop-down-content-1">
                  <li>
                    <Link className="nav-Link-1" to="/leaderteam">
                      导师团队
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-Link-1" to="/leaderteam">
                      导师团队
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-Link-1" to="/leaderteam">
                      导师团队
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-Link-1" to="/leaderteam">
                      导师团队
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-Link" to="/leaderteam">
                  导师团队
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="nav-Link" to="/researchtarget">
              研究方向
            </Link>
          </li>
          <li>
            <Link className="nav-Link" to="/articalpublished">
              发表文章
            </Link>
          </li>
          <li>
            <Link className="nav-Link" to="/teamnews">
              组内新闻
            </Link>
          </li>
          <li>
            <Link className="nav-Link" to="/studentshow">
              学生风采
            </Link>
          </li>
          <li>
            <Link className="nav-Link" to="/resoursedownload">
              资源下载
            </Link>
          </li>
          <li>
            <Link className="nav-Link" to="/english">
              english
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom-left"> Copyright 2019.All Right Reserve</div>
      <div className="bottom-mid">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="31.246"
            viewBox="0 0 22 31.246"
          >
            <path
              id="Icon_material-location-on"
              data-="Icon material-location-on"
              d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z"
              transform="translate(-7 -2.5)"
              fill="#f6fafc"
              stroke="#000"
              stroke-width="1"
            />
          </svg>
        </div>
        <div>地址：湖北省武汉大学国家网络安全学院12F</div>
      </div>
      <div className="bottom-right">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.681"
            height="34.651"
            viewBox="0 0 34.681 34.651"
          >
            <path
              id="Icon_awesome-phone-alt"
              data-="Icon awesome-phone-alt"
              d="M23.053,16.485,17.862,14.3a1.125,1.125,0,0,0-1.3.314l-2.3,2.761A17.037,17.037,0,0,1,6.053,9.3L8.862,7.04a1.079,1.079,0,0,0,.32-1.276L6.957.661A1.125,1.125,0,0,0,5.682.028L.862,1.122A1.1,1.1,0,0,0,0,2.187,21.324,21.324,0,0,0,21.505,23.329a1.109,1.109,0,0,0,1.085-.848L23.7,17.743a1.1,1.1,0,0,0-.649-1.258Z"
              transform="translate(16.317 0.718) rotate(42)"
              fill="#f8fafc"
              stroke="#000"
              stroke-width="1"
            />
          </svg>
        </div>
        <div>联系电话：050-55555555</div>
      </div>
    </div>
  );
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="cs-picture">
          <img src={require('./photos/homepage-cs.jpg')} />
        </div>
        <div id="news-total-flex">
          <p id="news-title">课题组新闻</p>
          <div id="news-flex">
            <Getnewsfliter numbers='0'/>
            <Getnewsfliter numbers='1'/>
            <Getnewsfliter numbers='2'/>
          </div>
        </div>
      </div>
    );
  }
}
class LeaderTeam extends Component {
  render() {
    return (
      <div>
        <div className="margin-top-discription">
          <div id="margin-left">
            <hr />
          </div>
          <div id="margin-mid">
            <p id="title-big-font">导师介绍</p>
          </div>
          <div id="margin-right">
            <hr />
          </div>
        </div>
        <div className="content-leaderteam">
          <div className="content-leaderteam-left">
            <div>
              <img src={require('./photos/导师团队.jpg')}></img>
            </div>
            <div id="flex-row">
              <div>
                <p id="paragraph-big">李兵</p>
              </div>
              <div>教授 博士生导师</div>
            </div>
            <div id="flex-row">任职：计算机学院副院长</div>
            <div id="flex-row">
              <div>通讯地址：武汉大学</div>
            </div>
            <div id="flex-row">
              <div>联系电话：027-68775371</div>
            </div>
            <div id="flex-row">
              <div>电⼦邮件：bingli@whu.edu.cn</div>
            </div>
          </div>

          <div className="content-leaderteam-right">
            <div id="flex-row">
              <div id="title-small-font">研究方向</div>
            </div>
            <div id="flex-row">
              <div>
                ⼤数据安全,复杂系统建模,⾯向服务的软件⼯程,⼈⼯智能,软件⼯程,云
                <br />
                计算与⼤数据处理
              </div>
            </div>
            <div id="flex-row">
              <div id="title-small-font">学习⼯作经历</div>
            </div>
            <div id="flex-row">
              <div>
                2018.01—现在，武汉⼤学，计算机学院，教授、博⼠⽣导师。
                <br />
                2014.07—2017.12，武汉⼤学，国际软件学院，教授、博⼠⽣导师。
                <br />
                2005.05—2014.06，武汉⼤学，计算机学院，教授、博⼠⽣导师。
                <br />
                2003.05—2005.05，武汉⼤学，计算机科学与技术流动站，博⼠后。
                <br />
                1990.09—2005.05，湖北⼤学，数学与计算机科学学院，副教授。
              </div>
            </div>
            <div id="flex-row">
              <div id="title-small-font">重要学术奖项</div>
            </div>
            <div id="flex-row">
              <div>
                2015年湖北省科技进步⼀等奖（⽀撑⼤型企业云管理的软件服务化关
                <br />
                键技术、国际标准、平台及应⽤）；
                <br />
                2014年中国计算机学会科技进步⼀等奖(云计算中软件服务化的关键
                <br />
                技术、国际标准、平台及应⽤);
                <br />
                2011年湖北省科技进步⼀等奖（⾯向服务的软件互操作性关键技术及
                <br />
                其ISO标准化）；
                <br />
                2010年湖北省标准创新贡献奖⼀等奖；
              </div>
            </div>
            <div id="flex-row">
              <div id="title-small-font">发表论⽂</div>
            </div>
            <div id="flex-row">
              <div>
                杨荣， 李兵. 流程⽚段⾃适应重⽤策略研究. 软件学报，2015,
                26(4):778-789.（EI）
                <br />
                熊伟， 李兵. 云计算环境下基于能耗感知的弹性资源管理机制.
                四川⼤学学报 (⼯程科学
                <br />
                版) .2015, 2[3]. （EI）
                <br />
                汪⽂娟， 李兵， 何鹏. 开源软件社区开发者⾓⾊的演化分析.
                复杂系统与复杂性科学.
                <br />
                2015, 12(1). （EI） <br />
                何鹏， 李兵， 程璨， 曾诚.
                开源软件系统中社会-技术⽹络的协同演化分析. 复杂系统与
                <br />
                复杂性科学. 2015, 12(2). （EI）
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class TeamNews extends Component {
  render() {
    return (
      <div>
        <div id="news-total-flex">
          <div id="news-flex">
            <div className="newsOfresearchGroup">
              <div className="news-discription">
                <div>
                  <div>
                    <img
                      id="nobel-picture"
                      src={require('./photos/homepage-nobel.jpg')}
                    />
                  </div>
                  <div id="news-top-font">祝贺文章发表</div>
                  <div className="news-discription-dataflex">
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Icon_ionic-ios-contact"
                            data-name="Icon ionic-ios-contact"
                            d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">朱江源</p>
                      </div>
                    </div>
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.5"
                          height="17"
                          viewBox="0 0 15.5 17"
                        >
                          <path
                            id="Icon_awesome-calendar-times"
                            data-name="Icon awesome-calendar-times"
                            d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">2020-10-16</p>
                      </div>
                    </div>
                  </div>
                  <div id="news-bottom-font">
                    祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
                  </div>
                </div>
              </div>
            </div>
            <div className="newsOfresearchGroup">
              <div className="news-discription">
                <div>
                  <div>
                    <img
                      id="nobel-picture"
                      src={require('./photos/homepage-nobel.jpg')}
                    />
                  </div>
                  <div id="news-top-font">祝贺文章发表</div>
                  <div className="news-discription-dataflex">
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Icon_ionic-ios-contact"
                            data-name="Icon ionic-ios-contact"
                            d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">朱江源</p>
                      </div>
                    </div>
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.5"
                          height="17"
                          viewBox="0 0 15.5 17"
                        >
                          <path
                            id="Icon_awesome-calendar-times"
                            data-name="Icon awesome-calendar-times"
                            d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">2020-10-16</p>
                      </div>
                    </div>
                  </div>
                  <div id="news-bottom-font">
                    祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
                  </div>
                </div>
              </div>
            </div>
            <div className="newsOfresearchGroup">
              <div className="news-discription">
                <div>
                  <div>
                    <img
                      id="nobel-picture"
                      src={require('./photos/homepage-nobel.jpg')}
                    />
                  </div>
                  <div id="news-top-font">祝贺文章发表</div>
                  <div className="news-discription-dataflex">
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Icon_ionic-ios-contact"
                            data-name="Icon ionic-ios-contact"
                            d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">朱江源</p>
                      </div>
                    </div>
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.5"
                          height="17"
                          viewBox="0 0 15.5 17"
                        >
                          <path
                            id="Icon_awesome-calendar-times"
                            data-name="Icon awesome-calendar-times"
                            d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">2020-10-16</p>
                      </div>
                    </div>
                  </div>
                  <div id="news-bottom-font">
                    祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="news-total-flex">
          <div id="news-flex">
            <div className="newsOfresearchGroup">
              <div className="news-discription">
                <div>
                  <div>
                    <img
                      id="nobel-picture"
                      src={require('./photos/homepage-nobel.jpg')}
                    />
                  </div>
                  <div id="news-top-font">祝贺文章发表</div>
                  <div className="news-discription-dataflex">
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Icon_ionic-ios-contact"
                            data-name="Icon ionic-ios-contact"
                            d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">朱江源</p>
                      </div>
                    </div>
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.5"
                          height="17"
                          viewBox="0 0 15.5 17"
                        >
                          <path
                            id="Icon_awesome-calendar-times"
                            data-name="Icon awesome-calendar-times"
                            d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">2020-10-16</p>
                      </div>
                    </div>
                  </div>
                  <div id="news-bottom-font">
                    祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
                  </div>
                </div>
              </div>
            </div>
            <div className="newsOfresearchGroup">
              <div className="news-discription">
                <div>
                  <div>
                    <img
                      id="nobel-picture"
                      src={require('./photos/homepage-nobel.jpg')}
                    />
                  </div>
                  <div id="news-top-font">祝贺文章发表</div>
                  <div className="news-discription-dataflex">
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Icon_ionic-ios-contact"
                            data-name="Icon ionic-ios-contact"
                            d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">朱江源</p>
                      </div>
                    </div>
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.5"
                          height="17"
                          viewBox="0 0 15.5 17"
                        >
                          <path
                            id="Icon_awesome-calendar-times"
                            data-name="Icon awesome-calendar-times"
                            d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">2020-10-16</p>
                      </div>
                    </div>
                  </div>
                  <div id="news-bottom-font">
                    祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
                  </div>
                </div>
              </div>
            </div>
            <div className="newsOfresearchGroup">
              <div className="news-discription">
                <div>
                  <div>
                    <img
                      id="nobel-picture"
                      src={require('./photos/homepage-nobel.jpg')}
                    />
                  </div>
                  <div id="news-top-font">祝贺文章发表</div>
                  <div className="news-discription-dataflex">
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <path
                            id="Icon_ionic-ios-contact"
                            data-name="Icon ionic-ios-contact"
                            d="M11.875,3.375h0A8.5,8.5,0,0,0,3.424,10.98a8.191,8.191,0,0,0,0,1.79,8.5,8.5,0,0,0,8.451,7.605h0a8.5,8.5,0,0,0,0-17ZM17.425,16.7c-.928-.351-2.431-.866-3.367-1.144-.1-.029-.11-.037-.11-.437a2.326,2.326,0,0,1,.27-.952,4.749,4.749,0,0,0,.376-1.291,2.871,2.871,0,0,0,.556-1.344,1.793,1.793,0,0,0-.016-1.128.724.724,0,0,1-.025-.069,7.349,7.349,0,0,1,.127-1.586,2.92,2.92,0,0,0-.609-2.1,3.124,3.124,0,0,0-2.391-1.144h-.715a3.12,3.12,0,0,0-2.37,1.144,2.907,2.907,0,0,0-.613,2.1,7.349,7.349,0,0,1,.127,1.586c-.008.029-.016.049-.025.074a1.763,1.763,0,0,0-.016,1.128,2.916,2.916,0,0,0,.556,1.344,4.946,4.946,0,0,0,.376,1.291,2.283,2.283,0,0,1,.155.964c0,.4-.016.409-.106.437-.969.286-2.407.793-3.269,1.136a7.355,7.355,0,1,1,12.9-4.834A7.288,7.288,0,0,1,17.425,16.7Z"
                            transform="translate(-3.375 -3.375)"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">朱江源</p>
                      </div>
                    </div>
                    <div id="svg-flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.5"
                          height="17"
                          viewBox="0 0 15.5 17"
                        >
                          <path
                            id="Icon_awesome-calendar-times"
                            data-name="Icon awesome-calendar-times"
                            d="M15.085,5.313H.415A.408.408,0,0,1,0,4.914v-1.2A1.629,1.629,0,0,1,1.661,2.125H3.321V.4A.408.408,0,0,1,3.737,0H5.121a.408.408,0,0,1,.415.4V2.125H9.964V.4a.408.408,0,0,1,.415-.4h1.384a.408.408,0,0,1,.415.4V2.125h1.661A1.629,1.629,0,0,1,15.5,3.719v1.2A.408.408,0,0,1,15.085,5.313ZM.415,6.375h14.67a.408.408,0,0,1,.415.4v8.633A1.629,1.629,0,0,1,13.839,17H1.661A1.629,1.629,0,0,1,0,15.406V6.773A.408.408,0,0,1,.415,6.375Zm8.9,5.313,1.664-1.6a.388.388,0,0,0,0-.564L10,8.586a.428.428,0,0,0-.588,0l-1.664,1.6-1.664-1.6a.428.428,0,0,0-.588,0l-.979.94a.388.388,0,0,0,0,.564l1.664,1.6-1.664,1.6a.388.388,0,0,0,0,.564l.979.94a.428.428,0,0,0,.588,0l1.664-1.6,1.664,1.6a.428.428,0,0,0,.588,0l.979-.94a.388.388,0,0,0,0-.564Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p id="news-font">2020-10-16</p>
                      </div>
                    </div>
                  </div>
                  <div id="news-bottom-font">
                    祝贺实验室XXX、XXX、XXX在XXX杂志发表文章.....................................
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class StudentShow extends Component {
  render() {
    return (
      <div>
        <div className="student">
          <div className="news-discription">
            <div>
              <div>
                <img id="nobel-picture" src={require('./photos/学生.jpg')} />
              </div>
              <div id="student-bottom-font">
                <p>XXXX 2016级 博士</p>
              </div>
            </div>
          </div>
          <div className="news-discription">
            <div>
              <div>
                <img id="nobel-picture" src={require('./photos/学生.jpg')} />
              </div>
              <div id="student-bottom-font">
                <p>XXXX 2016级 博士</p>
              </div>
            </div>
          </div>
          <div className="news-discription">
            <div>
              <div>
                <img id="nobel-picture" src={require('./photos/学生.jpg')} />
              </div>
              <div id="student-bottom-font">
                <p>XXXX 2016级 博士</p>
              </div>
            </div>
          </div>
        </div>
        <div className="student">
          <div className="news-discription">
            <div>
              <div>
                <img id="nobel-picture" src={require('./photos/学生.jpg')} />
              </div>
              <div id="student-bottom-font">
                <p>XXXX 2016级 博士</p>
              </div>
            </div>
          </div>
          <div className="news-discription">
            <div>
              <div>
                <img id="nobel-picture" src={require('./photos/学生.jpg')} />
              </div>
              <div id="student-bottom-font">
                <p>XXXX 2016级 博士</p>
              </div>
            </div>
          </div>
          <div className="news-discription">
            <div>
              <div>
                <img id="nobel-picture" src={require('./photos/学生.jpg')} />
              </div>
              <div id="student-bottom-font">
                <p>XXXX 2016级 博士</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class ResearchTarget extends Component {
  render() {
    return (
      <div>
        <div className="content-researchtarget">
          <div id="title-big-font">人工智能</div>
          <div className="content-researchtarget-bottom">
            <div id="title-small-font">简介</div>
            <div>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;⼈⼯智能（Artificial
                Intelligence），英⽂缩写为AI。它是研究、开发⽤于模拟、延伸和扩展⼈的智能的
                理论、⽅法、技术及应⽤系统的⼀门新的技术科学。
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;⼈⼯智能是计算机科学的⼀个分⽀，它企图了解智能的实质，并⽣产出⼀种新的能以⼈类智能相似的⽅
                式做出反应的智能机器，该领域的研究包括机器⼈、语⾔识别、图像识别、⾃然语⾔处理和专家系统等。⼈⼯
                智能从诞⽣以来，理论和技术⽇益成熟，应⽤领域也不断扩⼤，可以设想，未来⼈⼯智能带来的科技产
                品，将会是⼈类智慧的“容器”。⼈⼯智能可以对⼈的意识、思维的信息过程的模拟。⼈⼯智能不是⼈的智能，
                但能像⼈那样思考、也可能超过⼈的智能。
              </p>
            </div>
            <div id="flex-row">
              <img
                src={require('./photos/人工智能.jpg')}
                style={{ width: '300px' }}
              />
            </div>
            <div>
              {' '}
              <p id="title-small-font">主研方向</p>
            </div>
            <div>
              <p>持续学习、迁移学习、图像识别</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class ResourseDownload extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="download-flex">
            <div className="download-layer-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <path
                  id="Icon_awesome-download"
                  data-name="Icon awesome-download"
                  d="M15.188,0h5.625A1.683,1.683,0,0,1,22.5,1.688V13.5h6.166a1.4,1.4,0,0,1,.991,2.4L18.963,26.6a1.362,1.362,0,0,1-1.92,0L6.335,15.9a1.4,1.4,0,0,1,.991-2.4H13.5V1.688A1.683,1.683,0,0,1,15.188,0ZM36,26.438v7.875A1.683,1.683,0,0,1,34.313,36H1.688A1.683,1.683,0,0,1,0,34.313V26.438A1.683,1.683,0,0,1,1.688,24.75H12L15.448,28.2a3.6,3.6,0,0,0,5.1,0L24,24.75H34.313A1.683,1.683,0,0,1,36,26.438Zm-8.719,6.188a1.406,1.406,0,1,0-1.406,1.406A1.41,1.41,0,0,0,27.281,32.625Zm4.5,0a1.406,1.406,0,1,0-1.406,1.406A1.41,1.41,0,0,0,31.781,32.625Z"
                />
              </svg>
              <p>文件名称</p>
            </div>

            <div className="download-layer-right">
              <div>
                <p id="download-margin">文件类型</p>
              </div>
              <div>
                <p id="download-margin">文件大小</p>
              </div>
              <div>
                <p id="download-margin">下载量</p>
              </div>
              <div>
                <p id="download-margin">上传日期</p>
              </div>
              <div>
                <p id="download-margin">上传者</p>
              </div>
            </div>
          </div>
          <div>
            <hr />
          </div>
        </div>
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
        <Downloadlayer
          form="pdf"
          space="50kb"
          numbers="100"
          date="2020-10-18"
          name="朱江源"
        />
      </div>
    );
  }
}
class ArticalPublished extends Component {
  render() {
    return (
      <div className="content-articalpublished">
        <div>
          <h2>2019年</h2>
        </div>
        <div id="flex-row">
          2. Fuyu Yuan, Juan Li, Supawadee Namuangruk,*, Nawee Kungwan, Jia
          Guo,* and Changchun Wang, Microporous, Self-
          <br />
          Segregated, Graphenal Polymer Nanosheets Prepared by Dehydrogenative
          Condensation of Aza-PAHs Building Blocks in the
          <br />
          Solid State, Chemistry of Materials 2017, 29, 3971-3979.
        </div>

        <div id="flex-row">
          <img
            src={require('./photos/发表文章.jpg')}
            style={{ width: '200px' }}
          />
        </div>

        <p id="flex-row">
          1. Yongjing Li, Jiaxun Wan, Zihao Zhang, Jia Guo, and Changchun Wang*,
          Targeted Soft Biodegradable Glycine/PEG/RGDModified
          <br />
          Poly(methacrylic acid) Nanobubbles as Intelligent Theranostic Vehicles
          for Drug Delivery, ACS Applied Materials <br />
          Interfaces, 2017, 9, 35604-35612.
        </p>
        <div id="flex-row">
          <img
            src={require('./photos/发表文章.jpg')}
            style={{ width: '200px' }}
          />
        </div>
      </div>
    );
  }
}
class English extends Component {
  render() {
    return <div>this page is not finished.</div>;
  }
}
class Main extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Title />
          <Route path="/" component={HomePage} exact />
          <Route path="/leaderteam" component={LeaderTeam} />
          <Route path="/teamnews" component={TeamNews} />
          <Route path="/studentshow" component={StudentShow} />
          <Route path="/researchtarget" component={ResearchTarget} />
          <Route path="/resoursedownload" component={ResourseDownload} />
          <Route path="/articalpublished" component={ArticalPublished} />
          <Route path="/english" component={English} />
        </Router>
        <Bottom />
      </div>
    );
  }
}

export default Main;
