import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
function Bottom() {
  const copyright='&copy Copyright 2019.All Right Reserve';
    return (
      <div className="bottom">
        <div className="bottom-left" > <div dangerouslySetInnerHTML={{__html:copyright}}></div></div>
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
  export default Bottom;