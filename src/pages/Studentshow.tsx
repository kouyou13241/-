import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
class StudentShow extends Component {
    render() {
      return (
        <div>
          <div className="student">
            <div className="news-discription">
              <div>
                <div>
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
                </div>
                <div id="student-bottom-font">
                  <p>XXXX 2016级 博士</p>
                </div>
              </div>
            </div>
            <div className="news-discription">
              <div>
                <div>
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
                </div>
                <div id="student-bottom-font">
                  <p>XXXX 2016级 博士</p>
                </div>
              </div>
            </div>
            <div className="news-discription">
              <div>
                <div>
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
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
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
                </div>
                <div id="student-bottom-font">
                  <p>XXXX 2016级 博士</p>
                </div>
              </div>
            </div>
            <div className="news-discription">
              <div>
                <div>
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
                </div>
                <div id="student-bottom-font">
                  <p>XXXX 2016级 博士</p>
                </div>
              </div>
            </div>
            <div className="news-discription">
              <div>
                <div>
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
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
  export default StudentShow;