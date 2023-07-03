import React, { Component } from 'react'


export class Newsitems extends Component {
 
  render() {
    let {title,description,imgurl,newsurl}=this.props;
      return(  
        <div className='newsitemss'>
      <div className='my-3'>
      <div className="card" style={{width: "3rem;"}}>
  <img src={!imgurl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YWVXMNZHBO4LP3OHF7MN7WDTRQ_size-normalized.jpg&w=1440":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary btn-dark">Read More</a>
  </div>
</div>
        
      </div>
      </div>
      )
  }
}

export default Newsitems
