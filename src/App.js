import React, {Component} from 'react';
import './App.css';
import CSVReader from 'react-csv-reader'
// access the csv file from input type
// parse the information into arrays
// display information on the page
// make an option where user can choose how many they can display that displays next 10 clients
// Next/Previous button to display next array/set of clients
//display density




class App extends Component {
  constructor(){
    super();
    this.state = {
      dataCategory: [],
      dataContent: [],
      newData: [],
      index:1,
    }
  }



  //Next/Previous page button functionalities and error handling attempts.. 
  nextBtn = () => { 
    const increment = this.state.index
    this.setState({
      dataContent: this.state.newData.slice(increment + 10, increment + 20),
      index: increment + 10
    })
  }

  previousBtn = () => {
    const decrement = this.state.index
    this.setState({
      dataContent: this.state.newData.slice(decrement -10, decrement),
      index: decrement - 10
    })


    // Attempt at handling errors when clicking back too much and hitting negative index where it would display nothing

    // if(decrement <= 1 || decrement <= 0){
    //   this.setState({
    //     index: 1000
    //   })
    // } else {
    //   this.setState({
    //     index: 1
    //   })
    // } 
  }

  sortButton = (e) => {
    // Looking to get the sort function functional however I was unsure of how to approach putting it through code
    //My thought process:
    //Grabbing the value of the selected category(ID, date, email,etc)
    //Using e.target.value to grab the index of the category and if the category is selected sort the content within it
    //ie; if ID was selected it would sort the all the IDs from lowest-greatest vice versa
    //or if car make/country was selected it would then sort them from A-Z or Z-A
    
    
    //my initial approach was when the user clicks on the category button it would execute the function that ordered A-Z, Least to Greatest, etc however I got stumped on how to match the the index with the specific category and how to solely organize that array of items
    console.log(e.target.value);
    this.setState({
      dataContent: this.state.dataContent.reverse()
    })
  }

  render() {
    return (
      <section className="mainContent">
          <CSVReader
            cssClass="csv-reader-input"
            label="Upload a CSV File"
            onFileLoaded={(data) => {
              this.setState({
                dataCategory: data[0],
                dataContent: data.slice(this.state.index, this.state.index + 10),
                newData: data,
              });
            }}
            onError={data => {
              console.log(data);
            }}
            inputStyle={{ color: "blue" }}
          />
        <div className="tableContainer"> 
          <table>
            <thead className="categories">
              <tr>
              {this.state.dataCategory.map((value, key) => {
                return <th key={key}><button className="sortBtn" onClick={this.sortButton}>{value}</button></th>
              })}
              </tr>
            </thead>
            <tbody>
            {this.state.dataContent.map((value, key) => {
              return (
                <tr key={key} className="clientInformation">
                  {value.map((info,key) => ( <td key={key}>{info}</td> ))}
                </tr>
              );
            })}
            </tbody>
          </table>



          {/* 
          Attempt to only display the Page Buttons after data loaded

          thought process: 
          - when data is loaded then add the class of displayBtn if there is no data then leave activeBtn which has no opacity

          <button className={`${this.state.dataContent ? "displayBtn" : "activeBtn"}`} onClick={this.nextBtn}>Next</button>
          <button className={`${this.state.dataContent ? "displayBtn" : "activeBtn"}`} onClick={this.previousBtn}>Back</button> 
          
          */}

          <button className="activeBtn" onClick={this.nextBtn}>Next</button>
          <button className="activeBtn" onClick={this.previousBtn}>Back</button>
        </div> 

      </section>
    );
      
  }
}

export default App;
