import React, {Component} from 'react';
import './App.css';
import CSVReader from 'react-csv-reader'
// access the csv file from input type
// parse the information into arrays
// display information on the page
// make an option where user can choose how many they can display that displays next 10 clients
// make a next/previous page button
// search option (name,car model,year, etc)




class App extends Component {
  constructor(){
    super();
    this.state = {
      dataCategory: [],
      dataContent: []
    }
  }

  nextBtn = (e) => {

    console.log(this.state.dataContent.push(10, 30));
  }

  componentDidMount(){
    

  }

  render() {
    return (
      <div>
        <CSVReader
          cssClass="csv-reader-input"
          label="Input CSV File"
          onFileLoaded={data => {
            this.setState({
              dataCategory: data[0],
              dataContent: data.slice(1, 11),
            });
          }}
          onError={data => {
            console.log(data);
          }}
          inputStyle={{ color: "blue" }}
        />
        <table>
          <thead className="categories">
            <tr>
            {this.state.dataCategory.map((value, key) => {
              return <th key={key}>{value}</th>
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
          <button onClick={this.nextBtn}>Next</button>
      </div>
    );
      
  }
}

export default App;
