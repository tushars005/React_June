import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

const Grid = () => {
    const path = process.env.PUBLIC_URL
    return ( 

    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Heading</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to={`${path}/`}  className="nav-link">
                        Menu
                    </Link>
                    
                </li>
                <li className="nav-item">
                <Link to={`${path}/about`} className="nav-link">
                        About
                    </Link>
                </li>

                <li className="nav-item">
                <Link to={`${path}/contact`}  className="nav-link">
                        Contact
                    </Link>
                </li>

                <li className="nav-item">
                <Link to={`${path}/cart`} className="nav-link">
                        Cart
                    </Link>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>


            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Ally.io</h1>
                <p className="lead">Page for shopping online</p>
            </div>
            </div>

        </div>
     );
}
 
export default Grid;





 {/* class parent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <button ></button></Fragment>></button>
                {this.state.child?<child/>:""}
            </Fragment>
        );
    }
}
 
export default parent;

class child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){

    }
    componentWillUnmount(){
        console.log("jdje");
    }
    render() { 

        return ( <h1>Child</h1>);
    }
}
 
export default child; */}