"use client";
import Header from './header.js';
import Movie_row from  './movie-row';
import {movies} from './data.js'
import { useState } from "react";
const Page = () => {    
    const [data,setData]=useState(movies)
    return (
        <div className="main_page">
            <Header />
            {data.map((item)=>
               <div key={item.id}>
                  <Movie_row 
                     movie={item} setData={setData}
                     
                     
                  />
               </div>
            )}
        </div>
    
    );
};

export default Page;



