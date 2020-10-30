import React, { Component, useEffect, useState } from 'react';
import '../asserts/App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
function NewsShow(props: { row: any; }) {
    
    const [res, setRes] = useState<any>();
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      fetch('/platform-scientific/api/sci/news/plus/time/desc?page='+page+'&rows='+props.row).then(async (response) => {
        setRes(await response.json());
      });
    }, [page]);
    
    let count=res?res.data.count:NaN;
    let pages=Math.ceil(count/props.row);
    function Fliptool()
    {
      return( 
      <div className="fliptool">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.615"
        height="18"
        viewBox="0 0 18.615 18"
        onClick={() => frontPage()}
      >
        <path
          id="Icon_material-first-page"
          data-name="Icon material-first-page"
          d="M27.615,24.885,20.73,18l6.885-6.885L25.5,9l-9,9,9,9ZM9,9h3V27H9Z"
          transform="translate(-9 -9)"
        />
      </svg>
  
      <div>首页</div>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="18"
        viewBox="0 0 9 18"
        onClick={() => previousPage()}
      >
        <path
          id="Icon_ionic-md-arrow-dropleft"
          data-name="Icon ionic-md-arrow-dropleft"
          d="M22.5,9l-9,9,9,9Z"
          transform="translate(-13.5 -9)"
        />
      </svg>
  
      <div>上一页</div>
      <div>{page}/{pages}</div>
      <div>下一页</div>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="18"
        viewBox="0 0 9 18"
        onClick={() => nextPage()}
      >
        <path
          id="Icon_ionic-md-arrow-dropright"
          data-name="Icon ionic-md-arrow-dropright"
          d="M13.5,9l9,9-9,9Z"
          transform="translate(-13.5 -9)"
        />
      </svg>
  
      <div>尾页</div>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.615"
        height="18"
        viewBox="0 0 18.615 18"
        onClick={() => lastPage()}
      >
        <path
          id="Icon_material-last-page"
          data-name="Icon material-last-page"
          d="M8.385,11.115,15.27,18,8.385,24.885,10.5,27l9-9-9-9ZM24,9h3V27H24Z"
          transform="translate(-8.385 -9)"
        />
      </svg>
    </div>);
    }

    function nextPage() {
      if (page < pages) setPage((page)=>page+1);
      else setPage((page)=>(pages));
    }
    function previousPage() {
      if (page > 1) setPage((page)=>(page - 1));
      else setPage((page)=>(1));
    }
    function lastPage() {
      setPage((page)=>(pages));
    }
    function frontPage() {
      setPage((page)=>(1));
    }
    return res?.data?.value ?(
      <div style={{marginLeft:'45px',width:'1000px'}}>
        
        
        <Row>
          
          {res.data.value.map((item: any)=>(
            <Col span={8} style={{display:'flex',justifyContent:'center'}}><Getnewsfliter title={item.title} gmtCreate={item.gmtCreate} userId={item.userId}></Getnewsfliter> </Col>
          ))}
        </Row>
          
        
        <Fliptool/>
      </div>
    ):(
       <p>isLoading...</p>
    );
       
    
  }
  function Changetime(time: string | number | Date) {
    let outcome = new Date(time);
    let final = String(outcome);
    return final;
  }
  function Getnewsfliter(props: { gmtCreate: string | number | Date; title: React.ReactNode; userId: React.ReactNode; })
  {
      
      function Time()
      {
        let a=Changetime(props.gmtCreate)
        let b=a.substring(4,16);
        return b;
      }
    return (
       <div className="newsOfresearchGroup">
    <div className="news-discription">
      <div>
        <div>
          <img
            id="nobel-picture"
            src={require('../asserts/homepage-nobel.jpg')}
          />
        </div>
        <div id="news-top-font">
        {props.title}
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
              <p id="news-font">{props.userId}</p>
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
              <p id="news-font">{Time()}</p>
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
 
  export default NewsShow;