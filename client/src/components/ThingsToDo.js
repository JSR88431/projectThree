import React from "react";
import axios from "axios";
import Nav from "./Nav.js";
import MapContainer from './MapContainer.js'

class ThingsToDo extends React.Component {
    state = {
      results: []
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/john/allLaCurbed").then((response) => {
          console.log(response.data);
          this.setState({
            results: response.data
          });
        });
      }
      render() {
       
        return (
          <div>
          <MapContainer />
          
          <ul className="list-group">
            {
              this.state.results.map((item) => {
                // create a route-able link for each product
                return (
                  <li className="list-group-item" value={item.id}>
                  <h2>{item.title}</h2>
                    {item.phone}
                      <strong>{item.description}</strong>
                        <br />
                         <strong>{item.descriptionTwo}</strong> 
                            <br />
                          <div id='address' value={item.id}>{item.address}</div>
                           <br />
                          {item.link}
                  </li>
                );
              })
            }
          </ul>
          </div>
        );
      }
}
export default ThingsToDo;




// render() {
//   return (
//     <div className="topMargin">
//       {this.state.results.map(item => {
//           return (
//           <div className="container py-3">
//             <div className="card">
//               <div className="row ">
//                 <div className="col-md-4">
//                   <img src={item.image} className="w-100"></img>
//                 </div>
//                 <div className="col-md-8 px-3">
//                   <div className="card-block px-3 mt-3">
//                     <h4 className="card-title">{item.title}</h4>
//                     <p className="card-text">{item.description}.</p>
//                     <a href={item.link} className="btn btn-primary" target="_blank">More Info</a>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//           );
//         })}
//     </div>
//   );
// }
// }
// export default Classes;