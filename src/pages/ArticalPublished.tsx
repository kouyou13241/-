import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import { OmitProps } from 'antd/lib/transfer/ListBody';
function ArticalShow(props: { row: any; })
{
    const [res, setRes] = useState<any>();
    const [page, setPage] = useState(1);
    
    useEffect(() => {
      fetch('/platform-scientific/api/sci/paper/filter/detail?page='+page+'&rows='+props.row).then(async (response) => {
        setRes(await response.json());
      });
    }, [page]);

    let count=res?res.data.count:NaN;
    let pages=Math.ceil(count/props.row);
    function Fliptool()
    {
      return( <div className="fliptool">
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
      <div >
          {res.data.value.map((item: any)=>(
            <GetArticalFliter reference={item.reference} cover={item.cover}></GetArticalFliter>
          ))}
        <Fliptool/>
      </div>
    ):(
       <p>isLoading...</p>
    );
       
    
  }
    
     
    
  
  function GetArticalFliter(props: { cover:string ;reference: any; })
  {
    return(
      <div>
    <p id="flex-row">
   {props.reference}
  </p>
  <div id="flex-row">
    <img
      src={props.cover}
      style={{ width: '200px' }}
    />
  </div>
  </div>
    );
  }
  function ArticalPublished()
  { 

    return (
      <div className="content-articalpublished">
        <div className='topnav-articalpublished'>
          <h2 style={{margin:'20px'}}>2019年</h2>
          <h2 style={{margin:'20px'}}>2018年</h2>
          <h2 style={{margin:'20px'}}>2017年</h2>
          <h2 style={{margin:'20px'}}>2016年</h2>
          <h2 style={{margin:'20px'}}>2015年</h2>
          <h2 style={{margin:'20px'}}>2014年</h2>
        </div>
        <ArticalShow row='2'/>
        

      </div>
    );
  }

export default ArticalPublished;