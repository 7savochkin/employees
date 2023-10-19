import './app-info.css';


const AppInfo = ({getNumberOfEmployees, countBonuses}) =>{

    return (
        <div className="app-info">
            <h1>Employee accounting in the N company</h1>
            <h2>Summary numbers of employees: {getNumberOfEmployees()}</h2>
            <h2>Bonus gets: {countBonuses()}</h2>
        </div>
    )
}

export default AppInfo;