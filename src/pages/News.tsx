import React, { Component, useEffect, useState } from 'react';
import '../asserts/App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Pagination } from 'antd';
import { useParams } from 'react-router';
function News()
{
const [res,setRes]=useState<any>();
   let {id}=useParams<any>();
   useEffect(() => {
    fetch('/platform-scientific/api/sci/news/filter/detail?id='+id).then(async (response) => {
      setRes(await response.json());
    });
  }, []);
  let value=res?res.data.value:NaN;
  console.log(value);
  return res?.data.value?(<NewsFlex gmtCreate={value[0].gmtCreate} title={value[0].title} />):(<p>isLoading...</p>)
  }
function NewsFlex(props: { gmtCreate: string | number | Date; title: React.ReactNode; })
{
    function Time()
{
    function Changetime(time: string | number | Date) {
        let outcome = new Date(time);
        let final = String(outcome);
        return final;
      }
  let a=Changetime(props.gmtCreate)
  let b=a.substring(4,16);
  return b;
}
     return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
       <div style={{fontSize:'50px'}}>{props.title}</div>
     <div style={{fontSize:'25px'}}><p>发表时间为:{Time()}</p></div>

    <div id="paragraph-small">this is an example of a news page</div>

        </div>
     );

}


export default News;