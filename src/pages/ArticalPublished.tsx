import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { Select } from 'antd';
const { Option } = Select;
function ArticalShow(props: { value: any; })
{
    


   

    return  (
      <div>
      <div >
          {
          props.value.map((item: any)=>(
            <GetArticalFliter reference={item.reference} cover={item.cover}></GetArticalFliter>
          ))}
      </div>
      
        </div>
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
    
    const [res, setRes] = useState<any>();
    const [year, setYear] = useState<any>('2015');
    const [page,setPage]=useState<any>(1);
    let strgmt1=new String(new Date(year).getTime());
    let strgmt2=new String(new Date(year+1).getTime());

    useEffect(() => {
      fetch('/platform-scientific/api/sci/paper/filter/detail?publishTimeFrom='+strgmt1+'&publishTimeTo='+strgmt2+'&page='+page+'&rows=3').then(async (response) => {
        setRes(await response.json());
      });
    }, [year,page]);
    return res?.data?.value? (
      <div className="content-articalpublished" >
        <div className='topnav-articalpublished'>
        <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    defaultValue='2015'
    onSelect={(response)=>(setYear(response))}
  >
    <Option value="2020">2020年</Option>
    <Option value="2019">2019年</Option>
    <Option value="2018">2018年</Option>
    <Option value="2015">2015年</Option>
  </Select>
        </div>
        <ArticalShow value={res.data.value}/>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
       <Pagination defaultCurrent={1} total={res.data.count} pageSize={3} onChange={(page)=>(setPage(page))}/>
       </div> 

      </div>
    ):(<p>isLoading...</p>)
  }

export default ArticalPublished;