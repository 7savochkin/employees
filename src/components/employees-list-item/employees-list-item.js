import "./employees-list-item.css";
import {Component} from "react";


class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    toIncreaseSalary = () =>{
        this.setState(({increase}) =>({
            increase: !increase
        }));
    }

    likeUser = () =>{
        this.setState(({like}) => ({
           like: !like
        }));
    }

    render() {

        const {name, salary} = this.props,
            {increase, like} = this.state;

        let itemClass = "list-group-item d-flex justify-content-between";

        itemClass = itemClass + (increase ? " increase" : itemClass);
        itemClass = itemClass + (like ? " like" : itemClass);

        return (
            <li className={itemClass}>
                <span onClick={this.likeUser} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={this.toIncreaseSalary}
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;