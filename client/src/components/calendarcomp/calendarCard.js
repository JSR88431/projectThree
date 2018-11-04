import React from "react";
import axios from "axios";

function CalendarCard(props){
  return (
    <div className="topMargin">
    <div className="container py-3">
           <div className="card">
             <div className="row ">
               <div className="col-md-4">
                 {/* <img src={this.props.image} className="w-100"></img> */}
               </div>
               <div className="col-md-8 px-3">
                 <div className="card-block px-3 mt-3">
                   <h4 className="card-title">{this.props.title}</h4>
                   <p className="card-text">item.date</p>
                         <br/>
                   <p className="card-text">{}.</p>
                   <a href={this.props.link} className="btn btn-primary" target="_blank">More Info</a>
                 </div>
               </div>

             </div>
           </div>
         </div>
   </div>
  );
}




export default CalendarCard;