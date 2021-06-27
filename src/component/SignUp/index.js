import React,{Component,createRef} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.name = createRef()
        this.age = createRef()
    }
    render() { 
        const submithandle = (e)=>{
            e.preventDefault();
            console.log(this.name.current.value, this.name)
        }
        return (  
            <form onSubmit={this.submithandle}>
                <div className="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" ref ={this.name}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">age</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="age" ref ={this.age}/>
                </div>
                <div className="form-group form-check">
                    <input type="submit" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>

            </form>
        );
    }
}
 
export default SignUp;