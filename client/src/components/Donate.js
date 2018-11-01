import React from "react";
import axios from "axios";


class Donate extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get("/carrie/allDonate").then((response) => {
      console.log(response.data);
      this.setState({
        results: response.data
      });
      console.log(this.state.results);
    });
  }


  render() {
    return (
      <div className="topMargin">
        {this.state.results.map(item => {
            return (
            <div className="container py-3">
              <div className="card">
                <div className="row ">
                  <div className="col-md-4">
                    <img src="https://placeholdit.imgix.net/~text?txtsize=38&txt=400%C3%97400&w=400&h=400" className="w-100"></img>
                  </div>
                  <div className="col-md-8 px-3">
                    <div className="card-block px-3 mt-3">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.address}.</p>
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