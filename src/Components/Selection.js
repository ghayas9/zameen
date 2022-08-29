import React from "react";

const Selection = ()=>{
    const city= [
        'Islamabad',
        'peshawar',
        'lahore',
        'karachi'
    ]
    return(
        <div className="container-fluid bck">
            <div className="row">
                <div className="col-8 dc">
                    <div style={{fontSize:'24px'}}>Search properties for sale and to rent in Pakistan</div>
                    <div className="buttons">
                        <button>BUY</button>
                        <button>RENT</button>
                        <button>PROJECTS</button>
                    </div>
                    <div className="selection  d-flex align-items-center justify-content-center">
                       <div className="col-8 bll align-items-center">
                            <div className="row align-items-center" style={{alignItems:'center'}}>
                            <div className="col-3 ">
                                <div className="pd bl">
                                <div className="tt ">city</div>
                                <div class="dropdown">
                                    <div class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Islamabad
                                    </div>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><div class="dropdown-item" >Action</div></li>
                                        <li><div class="dropdown-item" >Another action</div></li>
                                        <li><div class="dropdown-item" >Something else here</div></li>
                                    </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pd bl">
                                <div className="tt">
                                    LOCATION
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="pd" style={{backgroundColor:'green'}}>
                                FIND
                            </div>
                        </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="cng">
                        <div className="til">
                            Popular Cities
                        </div>
                        <div className="wspace">
                            icn
                        </div>
                        <div className="citylist">

                        </div>
                        <div className="wspace">
                            icn
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Selection