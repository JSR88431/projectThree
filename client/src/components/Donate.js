import React from "react";
import axios from "axios";
import donatePic from "./images/donatePic.png";
import Background from "./images/bg1.png";

var Bg = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  overflowX: 'hidden'

};

class Donate extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get("/carrie/allDonate").then((response) => {
      if (response.data.length === 0) {
          axios.get("/carrie/scrapeDonate").then((res) => {
            this.setState({
              results: res.data
            })
          })            
      }
      else {
      this.setState({ results: response.data})
      }

  })

  }


  render() {
    return (
      <div className="topMargin" style={Bg}>
        {this.state.results.map(item => {
            return (
            <div className="container py-3">
              <div className="card">
                <div className="row ">
                  <div className="col-md-4">
                    <img src={donatePic} width="300" className="w-100"></img>
                  </div>
                  <div className="col-md-8 px-3">
                    <div className="card-block px-3 mt-3">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.address}.</p>
                      {/* <p className="card-text">{item.description}.</p> */}
                      <a href={item.link} className="btn btn-primary" target="_blank">More Info</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            );
          })}
      </div>
    );
  }
}
export default Donate;