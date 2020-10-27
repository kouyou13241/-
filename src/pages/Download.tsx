import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
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
  export default ResourseDownload;