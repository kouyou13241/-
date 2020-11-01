import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import { Pagination } from 'antd';
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
   

    return res?.data?.value ?(
      <div >
          {res.data.value.map((item: any)=>(
            <GetArticalFliter reference={item.reference} cover={item.cover}></GetArticalFliter>
          ))}
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
        <Pagination defaultCurrent={1} total={count} pageSize={props.row} onChange={(page)=>(setPage(page))}/>
        </div>
      </div>
    ):(
       <p>isLoading...</p>
    );
       
    
  }
    
     
    
  
  function GetArticalFliter(props: { cover:string ;reference: any; })
  {
    return(
      <div>
    <p id="flex-row" style={{width:'800px',marginLeft:'auto',marginRight:'auto',marginBottom:'30px'}}>
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
        <ArticalShow row='3'/>
        

      </div>
    );
  }

export default ArticalPublished;