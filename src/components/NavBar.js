import React, { Component } from 'react'


export class NavBar extends Component {
  

  render() {
    return (
      <div>
      <nav class="navbar navbar-expend-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DailyNews</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="https://economictimes.indiatimes.com/?from=mdr">Economic Times</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://zeenews.india.com/">Zee News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.ndtv.com/">NDTV</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default NavBar
