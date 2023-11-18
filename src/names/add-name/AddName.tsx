import {Component, SyntheticEvent} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class AddName extends Component<any, any> {
    data: string = 'initial value';
    // cross-browser wrapper
    addNameHandler(event: SyntheticEvent) {
        event.preventDefault();
    }
    nameChangeHandler = (event: SyntheticEvent) => {
        this.data = (event.target as HTMLInputElement).value;
        this.forceUpdate();
    }
    // one-way binding: model changes -> view changes
    // two-way binding: model changes <-> view changes
    render() {
        return <form onSubmit={this.addNameHandler} className="form-group">
            <input onChange={this.nameChangeHandler} value={this.data} className="form-control" type="text"/>
            <button className="btn btn-dark">Add</button>
        </form>
    }
}
export default AddName;