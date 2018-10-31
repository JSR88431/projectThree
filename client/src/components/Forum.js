import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Forum extends React.Component {
    state = {
        results: [],
        inCategory: false
        // currentLevel: "Forum"
    };

    componentDidMount() {
        // after component loads, get all products from db
        axios.get("/api/categories/all").then((response) => {
            console.log(response)
            this.setState({
                results: response.data
            });
        });

    }

    // handleLevelChange = level => {
    //     this.setState({ currentLevel: level})
    // }

    loadCat = (e) => {
        e.preventDefault();
        this.setState({ inCategory: true });
        // make a put request to subtract one from quantity
        axios.get(`/api/topics/all`).then((response) => {
            // update state object with newest data
            this.setState({
                results: response.data
            });
        });
    };

    // renderLevel = () => {
    //     if (this.state.currentPage === "Home") {
    //         return <Home />;
    //       } else if (this.state.currentPage === "About") {
    //         return <About />;
    //       } else if (this.state.currentPage === "Blog") {
    //         return <Blog />;
    //       } else {
    //         return <Contact />;
    //       }
    // }

    upOneLevel = (e) => {
        e.preventDefault();
        if (this.state.inCategory === true) {
            axios.get("/api/categories/all").then((response) => {
                console.log(response)
                this.setState({
                    results: response.data,
                    inCategory: false
                });
            });
        }
    };

    render() {
        console.log(this.state.results)

        const inCategory = this.state.inCategory;
        let section;

        if (inCategory) {
            section = this.state.results.map((item) => {
                    // create a route-able link for each item
                    return (
                        <li className="list-group-item" key={item.id}>
                            <a><h1>{item.title}</h1></a>
                            <p>Original Poster: {item.owner}</p>
                            <p>Number of Posts in Thread: {item.postNumber}</p>
                            <p>Last Post At: {item.updatedAt}</p>
                        </li>
                    );
                })
        } else {

            section = this.state.results.map((item) => {
                // create a route-able link for each item
                return (
                    <li className="list-group-item" key={item.id}>
                        <a href="/forum" onClick={this.loadCat}><h1>{item.title}</h1></a>
                        <p>{item.description}</p>
                    </li>
                );
            })
        }



        return (
            <div>
                <ul className="list-group">
                    {section}
                </ul>
                <button onClick={this.upOneLevel}>Up One Level</button>
            </div>
        );
    }
}

export default Forum;

