import "./search-panel.css"
import {Component} from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    searchByValue = (e) => {
        const {onUpdate} = this.props,
            term = e.target.value;

        this.setState({term})
        onUpdate({term});
    }

    render() {

        const {term} = this.state;

        return (
            <input
                type="text"
                className="form-control"
                placeholder="Find employee"
                value={term}
                onChange={this.searchByValue}
            />
        )
    }
}

export default SearchPanel;