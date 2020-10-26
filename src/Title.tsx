import React, { Component, useEffect, useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
export default Title;
  