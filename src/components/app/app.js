import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

import nextId from "react-id-generator";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: nextId(), name: "Oleg S.", increase: true, like: true, salary: 5000,},
                {id: nextId(), name: "Vlad L.", increase: false, like: false, salary: 9000,},
                {id: nextId(), name: "Sergio N.", increase: false, like: false, salary: 7000,},
            ],
            term: '',
            filterBy: 'all'
        }
    }

    addItem = (newItem) => {
        newItem.id = nextId();
        newItem.increase = false;
        newItem.like = false;
        const newData = [...this.state.data, newItem];
        this.setState({
            data: newData
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }));
    }

    onUpdate = (obj) => {
        this.setState(obj)
    }

    getNumberOfEmployees = () => {
        return this.state.data.length;
    }

    countBonuses = () => {
        const {data} = this.state;
        return data.filter(item => item.increase).length;
    }

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    }

    filterItems = (items, filterBy) => {
        switch (filterBy) {
            case 'advance':
                return items.filter(item => item.increase);
            case 'salary':
                return items.filter(item => item.salary >= 1000);
            default:
                return items
        }
    }

    render() {

        const {data, term, filterBy} = this.state,
            visibleData = this.searchItem(this.filterItems(data, filterBy), term);

        return (
            <div className="app">
                <AppInfo
                    getNumberOfEmployees={this.getNumberOfEmployees}
                    countBonuses={this.countBonuses}
                />

                <div className="search-panel">
                    <SearchPanel
                        onUpdate={this.onUpdate}
                    />
                    <AppFilter
                        onUpdate={this.onUpdate}
                        filterBy={filterBy}
                    />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    addItem={this.addItem}
                />
            </div>
        )
    }
}

export default App;