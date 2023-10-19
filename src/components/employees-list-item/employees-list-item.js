import "./employees-list-item.css";

const EmployeesListItem = (props) => {

    const {name, salary, increase, like, onDelete, onToggleProp} = props;

    let itemClass = "list-group-item d-flex justify-content-between";

    itemClass = itemClass + (increase ? " increase" : itemClass);
    itemClass = itemClass + (like ? " like" : itemClass);

    return (
        <li className={itemClass}>
            <span onClick={onToggleProp} data-toggle="like" className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        data-toggle="increase"
                        onClick={onToggleProp}
                        className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}
                >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;