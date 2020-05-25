import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList/index";
import API from "../utils/API";


class SearchResultContainer extends Component {

    state = {
        results: [],
        search: "",
    };
   
    searchBook = query => {
        API.search(query)
        .then(res => {
          console.log(res);
          const results = res.data.items;
          this.setState({ results})
          console.log(results);
        })
        .catch(err => console.log(err));
        
    };

    handleInputChange = event => {
      const value = event.target.value;
      this.setState({ search: value });
    };
   
      // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      this.searchBook(this.state.search);
    };  
      

      render(){
        return(
            <div>
              <SearchForm
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              
              {this.state.results.map(result => (
                <ResultList 
                  id={result.id}
                  title={result.volumeInfo.title}
                  author={result.volumeInfo.authors}
                  description={result.volumeInfo.description}
                  image={result.volumeInfo.imageLinks.smallThumbnail}
                  link={result.volumeInfo.infoLink}
                />
              ))}
          
            </div> 
        )
      }
};

export default SearchResultContainer;