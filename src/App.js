import React, {Component} from 'react';
import './App.css';
import CSVReader from 'react-csv-reader'
// access the csv file from input type
// parse the information into arrays
// display information on the page
// make a button that displays next 10 clients
// dispaly more button




class App extends Component {
  constructor(){
    super();
    this.state = {
      dataCategory: [],
      dataContent: []
    }
  }

  showMore = (e) => {
    this.setState({
      dataContent: this.state.dataContent.push(11, 21)

    })
    console.log(this.state.dataContent);
  }

  render() {
    return (
      <div>
        <CSVReader
          cssClass="csv-reader-input"
          label="Input CSV File"
          onFileLoaded={data => {
            this.setState({
              dataContent: data.slice(1, 11),
              dataCategory: data[0]
            });
            return <button onClick={this.showMore}>Show More</button>;
          }}
          onError={data => {
            console.log(data);
          }}
          inputId="ObiWan"
          inputStyle={{ color: "blue" }}
        />

        <section className="information">
          <div className="categories">
            {this.state.dataCategory.map((value, key) => {
              console.log(value, key);
              return <p key={key}>{value}</p>;
            })}
          </div>
          {this.state.dataContent.map((value, index) => {
            return (
              <div className="clientInformation">
                {value.map(info => (
                  <p>{info}</p>
                ))}
              </div>
            );
          })}
          <button onClick={this.showMore}>Next</button>
        </section>
      </div>
    );
      
  }
}

export default App;
