import { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from "reactstrap";
import classNames from 'classnames';
import { CircularProgressbar } from 'react-circular-progressbar';
import ManageTodoModal from "../components/ManageTodoModal";
import ConfirmModal from "../components/ConfirmModal";
import { OrderByValues, TodoListData, TodoPriorities, TodoStatuses } from "../constants/appConstant";

const Exerciseone = () => {

    const [todos, setTodos] = useState(TodoListData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState({});
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [orderByVal, setOrderByVal] = useState('By Order')

    const handleStatus = (todo) => {
        const { status } = todo;
        if(status === TodoStatuses.ToDo) {
            setTodos((prevTodo) => prevTodo.map(todoData => todoData.id === todo.id ? { ...todo, status: TodoStatuses.InProgress, progress: 50 } : todoData));
        } 
        
        if(status === TodoStatuses.InProgress) {
            setTodos((prevTodos) => prevTodos.map(todoData => todoData.id === todo.id ? { ...todo, status: TodoStatuses.Done, progress: 100 } : todoData));
        }
    }

    const handleConfirm = (index) => {
        const todoData = todos.slice();
        todoData.splice(index, 1);
        setTodos(todoData);
        setIsConfirmModalOpen(!isConfirmModalOpen);
    }

    const handleEditTodo = (selectTodoVal) => {
        setIsEditMode(true);
        setIsModalOpen(!isModalOpen);
        setSelectedTodo(selectTodoVal);
    }

    const toggle = () => setIsModalOpen(!isModalOpen);

    const handleConfirmModaltoggle = () => setIsConfirmModalOpen(!isConfirmModalOpen);

    const dropdownToggle = () => setDropdownOpen((prevState) => !prevState);

    // Add/Edit form submisssion handler
    const handleFormSubmit = (todoData) => {
        if(isEditMode) {
            setTodos((prevTodos) => prevTodos.map(todoDataVal => todoDataVal.id === todoData.id ? { ...todoData } : todoDataVal));
            toggle();
            setIsEditMode(false);
            setSelectedTodo({});
        } else {
            todoData.id = Math.floor(Math.random() * 10000);
            console.log(todoData)
            setTodos((prevTodos) => [todoData, ...prevTodos]);
            toggle();
            setIsEditMode(false);
            setSelectedTodo({});
        }
    }

    const handleOrderBy = (orderByvalue) => {
        setOrderByVal(orderByvalue);
        const sortedArray = [...todos].sort((a, b) => {
            return a[orderByvalue.toLowerCase()].localeCompare(b[orderByvalue.toLowerCase()])
        });
        setTodos(sortedArray)
    }

    return (
        <div className="container mt-5">
            <div className="table-header d-flex justify-content-between">
                <h3 className="headiing">Task List</h3>

                <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
                    <DropdownToggle caret>{orderByVal}</DropdownToggle>
                    <DropdownMenu>
                        {
                            OrderByValues.map((orderByValue, i) => {
                                return (
                                    <DropdownItem key={i} onClick={(e) => {
                                        e.preventDefault();
                                        handleOrderBy(orderByValue);
                                    }}>{orderByValue}</DropdownItem>
                                )
                            })
                        }
                    </DropdownMenu>
                </Dropdown>

                <Button color="primary" onClick={() => setIsModalOpen(!isModalOpen)}>
                    + Add Task
                </Button>
            </div>

            <div className="table-wrapper mt-4">
                <Table>
                    <thead></thead>
                    <tbody>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <tr className={classNames({ 
                                        'table-light': (index+1)%2 !== 0, 
                                        'table-info': (index+1)%2 === 0
                                    })} key={index}>
                                        <td className="text-start align-middle">
                                            <div className="text-muted mb-1">Task</div>
                                            <h6>{todo.task}</h6>
                                        </td>
                                        <td className="text-start align-middle">
                                            <div className="text-muted mb-1">Priority</div>
                                            <h6 className={classNames({ 
                                                'text-danger': todo.priority === TodoPriorities.High, 
                                                'text-warning': todo.priority === TodoPriorities.Medium, 
                                                'text-success': todo.priority === TodoPriorities.Low, 
                                            })}>{todo.priority}</h6>
                                        </td>
                                        <td className="text-center align-middle">
                                            <Button color="secondary" size="sm" onClick={() => handleStatus(todo)}>
                                                {todo.status}
                                            </Button>
                                        </td>
                                        <td className="text-start align-middle">
                                            <div style={{ width: 40, height: 40 }}>
                                                <CircularProgressbar strokeWidth="12" value={todo.progress} />
                                            </div>
                                        </td>
                                        <td className="text-start align-middle">
                                            <i className="cursor-pointer text-info fa-solid fa-pen-to-square" onClick={() => handleEditTodo(todo)}></i>
                                        </td>
                                        <td className="text-start align-middle">
                                            <i className="cursor-pointer text-danger fa-solid fa-trash" onClick={() => setIsConfirmModalOpen(!isConfirmModalOpen)}></i>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            
            {/* Common Modal to handle Add/Edit ToDo task */}
            <ManageTodoModal
                modal={isModalOpen}
                toggle={toggle}
                isEditMode={isEditMode}
                handleFormSubmit={handleFormSubmit}
                selectedTodo={selectedTodo}
            />

            {/* Confirmation Modal before deleting */}
            <ConfirmModal
                modal={isConfirmModalOpen}
                toggle={handleConfirmModaltoggle}
                handleConfirm={handleConfirm}
            />
        </div>
    )
}

export default Exerciseone;