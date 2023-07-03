import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
    
        
        
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false
        }
    }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=db0a263ff18f4c329bf81cc6ed197b4b";
    let data=await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3 ' >
       <h1 className='text-center' >Top Headlines 📰</h1>
      
       <div className='row'>
       {this.state.articles.map((element)=>{
       return(
       <div className='col-md-4' key={element.url}>
       <Newsitems  title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url}/>
       </div>
       )
       })}
       </div>
       
      </div>
    )
  }
}

export default News
