import React from "react";
import logo from '../Image/logo.png'

const SubBar = ()=>{
    return(
        <div  className='subbar'>
            <img src={logo} alt="" />
            <div  className='subbarin'>
                <div style={{padding:'0px 20px'}}>BUY {' >'}</div>
                <div  className='subbarm'>
                    <div>HOME</div>
                    <div>PLOTS</div>
                    <div>COMMERCAIL</div>

                    <div className="subm">
                        <div>RENT</div>
                        <div>AGENTS</div>
                        <div>NEW PROJECTS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBar