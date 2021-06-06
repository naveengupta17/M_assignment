import React,{useState,useEffect} from 'react'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import data from "./data";


function Series() {
    const compare = (a,b)=>{
        if(a.title > b.title) return 1;
        else return -1;
    }
    const row_data = data.entries;
    const fillterd_data1 = row_data.filter((cur_data)=>{
        return (cur_data.releaseYear>= 2010 && cur_data.programType === "series");
    })
    const filterd_data2 = fillterd_data1.slice(0,21);
    const filterd_data3 = filterd_data2.sort(compare);
     
    
    return (
        <div>
        <Header/>
        <Content title="Popular Series" data={filterd_data3}/>
        <Footer/>
    </div>
    )
}

export default Series
