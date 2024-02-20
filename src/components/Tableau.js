import React, { useEffect, useRef } from 'react';
const {tableau} = window;

export const TableauEmbed = () =>{
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/AIRBNB_16893447000850/Dashboard2";

    function initViz() {
        new tableau.Viz(ref.current, url);
    }
    useEffect(()=>{
        initViz();
    }, []);

    return(
        <div className="tableauPlaceholder" style={{position:'relative'}}>
            <p>Dashboard</p>
            <div ref={ref} />

        </div>
    
    )

    
}