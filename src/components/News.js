import React, { useEffect ,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component"; // define of infinite scoll

const News =(props) => { // arrow function

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //initialisation of values which can be used as a props

  document.title = `${props.category}- NewsMonkey`;

   const updateNews=async()=> {
      props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a241c57733bc4064abb05193248ea166&page=${page}&pageSize=${props.pageSize}`;
   
    setLoading(true) // set loading as true
    let data = await fetch(url);
    props.setprogress(30);
    let parsedData = await data.json(); 
    props.setprogress(70);

    //initilization of all the variables
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setprogress(100);

  }
 useEffect(()=> {
   updateNews();
  } ,[])

// function to fetch the data from api for next page , that's why i used page+1
const fetchMoreData = async () => {
   

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a241c57733bc4064abb05193248ea166&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) // for next page
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
  };


 
    return (
      <>
        <h1 className="text-center" style={{color:"yellow",margin:'35px 0px' , marginTop:'90px'}}>
          <b>
         
            DailyNews - Top<i> Headlines on {props.category}</i>
          </b>
        </h1>
        {/* if state is true then show spinner else not*/}
        {loading &&<Spinner/>}



        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          { /* */}
            <div className="container"> 
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title} description={element.description} imageurl={element.urlToImage}
                  newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      
      </>
    );
  
}

// syntax is :- function name.proptypes , props is defined in bottom for function base components
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  
};


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
