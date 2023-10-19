import "./employees-add-form.css";
import {Component} from "react";

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: []
        }
    }

    validateForm = () => {
        const {name, salary} = this.state,
            errorNameMessage = 'Name length must be greater then 3 characters',
            errorSalaryMessage = 'Amount of salary must be greater than 100$',
            newErrors = [];
        if(name < 3) newErrors.push({name: errorNameMessage});
        if(Number.parseInt(salary) < 100) newErrors.push({salary: errorSalaryMessage});
        this.setState({
            errors: newErrors
        });
    }

    onValueChange = (e) => {
        this.validateForm();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const {addItem} = this.props,
            {name, salary, errors} = this.state;
        if (errors.length === 0) {
            addItem({name: name, salary: salary});
            this.setState({
                name: '',
                salary: ''
            });
        }
    }

    render() {

        const {name, salary, errors} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form method="POST"
                      onSubmit={(e) => this.onSubmitForm(e)}
                      className="add-form d-flex">
                    <div className="form-wrapper">
                        <input type="text"
                               className="form-control new-post-label"
                               placeholder="What is his name?"
                               name="name"
                               value={name}
                               onChange={this.onValueChange}
                        />
                        <p className={"message-text error" + (errors ? " visible" : "")}></p>
                    </div>
                    <div className="form-wrap">
                        <input type="number"
                               className="form-control new-post-label"
                               placeholder="Salary in $?"
                               name="salary"
                               value={salary}
                               onChange={this.onValueChange}
                        />
                        <p className={"message-text error" + (errors ? " visible" : "")}>n</p>
                    </div>

                    <button type="submit"
                            className="btn btn-outline-light">Create
                    </button>
                </form>
            </div>
        )
    }
}


export default EmployeesAddForm;