import React from "react";
import axios from "axios";


class Dadhacks extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    // after component loads, get all products from db
    axios.get("/carrie/allRedTriHacks").then((response) => {
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
                    <img src={item.image} className="w-100"></img>
                  </div>
                  <div className="col-md-8 px-3">
                    <div className="card-block px-3 mt-3">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
export default Dadhacks;




// {
//   this.state.results.map((item) => {
//     // create a route-able link for each product
//     return (

//       <li className="list-group-item">
//         {item.title}
//         <br />
//         {item.phone}
//         <br />
//         {item.description}
//         <br />
//         {item.descriptionTwo}
//         <br />
//         {item.address}
//         <br />
//         {item.link}
//         {item.id}
//       </li>
//     );
//   })
// }