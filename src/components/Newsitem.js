import React, { Component } from "react";

const Newsitem=(props)=> {
  
 
      let {title,description,imageurl,newsurl,author,date,source}=props;
    return (
      //bootstrap card code
      <>
        <div className="my-3">
          <div className="card">
            <img src= {!imageurl?"https://static01.nyt.com/images/2022/05/16/us/16econ-briefing-mcd-s-russia/16econ-briefing-mcd-s-russia-facebookJumbo.jpg":imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}  <span class="badge rounded-pill bg-success">{source}</span></h5>
              <p className="card-text">{description}
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p> {/* if author is null then set it unknown*/ }

                
              </p>
              <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-warning"> 
                READ MORE 
              </a>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default Newsitem;
