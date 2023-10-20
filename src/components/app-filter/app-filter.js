import "./app-filter.css";
import nextId from "react-id-generator";

const AppFilter = (props) => {
    const buttonsData = [
            {name: 'all', label: 'All employees'},
            {name: 'advance', label: 'On advance'},
            {name: 'salary', label: 'Salary greater than 1000$'}
        ],
        {onUpdate, filterBy} = props;

    const filterButtons = buttonsData.map(({name, label}) => {

        const clazz = name === filterBy ? "btn-light" : "btn-outline-light";

        return <button
            key={nextId()}
            className={`btn ${clazz}`}
            onClick={() => onUpdate({filterBy: name})}
            name={name}>{label}
        </button>
    });

    return (
        <div className="btn-group">
            {filterButtons}
        </div>
    )
}

export default AppFilter;