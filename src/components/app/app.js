import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './app.css';

function App() {

    const data = [
        {
            id: 1,
            name: "Oleg S.",
            salary: 5000,
        },
        {
            id: 2,
            name: "Vlad L.",
            salary: 9000,
        },
        {
            id: 3,
            name: "Sergio N.",
            salary: 7000,
        },
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;