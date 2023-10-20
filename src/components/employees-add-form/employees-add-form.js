import "./employees-add-form.css";
import {Component} from "react";

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 100,
            errors: {},
            exceptions: false
        }
    }

    validateForm = ()=>{

        const errorNameMessage = 'Name must be greater than 3 characters',
              errorSalaryMessage = 'Salary must be greater than 100$';

        this.setState(({name, salary, errors})=>{
            const newError = {...errors};

            (name.length < 3) ? newError.name = errorNameMessage : delete newError.name;
            (salary.length < 3) ? newError.salary = errorSalaryMessage : delete newError.salary;

            return {
                errors : newError,
                exceptions: !Object.keys(newError).length
            }

        });
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.validateForm();
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const {addItem} = this.props,
            {name, salary, exceptions, errors} = this.state;
        this.validateForm()
        if (Object.keys(errors).length === 0 && exceptions) {
            addItem({name: name, salary: salary});
            this.setState({
                name: '',
                salary: 100,
                exceptions: false
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
                        {errors.name && <p className="message-text error visible">{errors.name}</p>}
                    </div>
                    <div className="form-wrap">
                        <input type="number"
                               className="form-control new-post-label"
                               placeholder="Salary in $?"
                               name="salary"
                               value={salary}
                               onChange={this.onValueChange}
                        />
                        {errors.salary && <p className="message-text error visible">{errors.salary}</p>}
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