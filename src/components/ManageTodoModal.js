import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { TodoPriorities, TodoStatuses } from "../constants/appConstant";

const initialFormValue = {
    task: '',
    priority: TodoPriorities.Low,
    status: TodoStatuses.ToDo,
    progress: 0
}

const ManageTodoModal = (props) => {
    const { modal, toggle, isEditMode, selectedTodo, handleFormSubmit } = props;
    const [formvalue, setFormValue] = useState(initialFormValue);

    useEffect(() => {
        if(isEditMode) {
            setFormValue(selectedTodo);
        }
    }, [selectedTodo, isEditMode])

    const handleSubmit = () => {
        if(!!formvalue.task === false || !!formvalue.priority === false) {
            alert("form values are invalid");
            return false;
        }
        handleFormSubmit(formvalue);
        setFormValue(initialFormValue);
    }

    const handlePriotity = (priorityVal) => {
        setFormValue({
            ...formvalue,
            priority: priorityVal
        })
    }
    
    return (
        <Modal
            isOpen={modal}
            toggle={toggle}
        >
            <ModalHeader toggle={toggle}>{isEditMode ? 'Edit Task' : 'Add Task'}</ModalHeader>
            <ModalBody>
                <form>
                    <div className="mb-3">
                        <label htmlFor="taskname" className="form-label text-muted">Task</label>
                        <input type="text" placeholder="Type your task here" className="form-control" id="taskname" value={formvalue.task} onChange={(e) => setFormValue({
                            ...formvalue,
                            task: e.target.value
                        }) } />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="priority" className="form-label text-muted">Priority</label>
                        <div className="priority-btns d-flex align-items-center">
                            <Button className="text-end me-2" type="submit" color="danger" outline={formvalue.priority !== TodoPriorities.High} onClick={(e) => {
                                e.preventDefault();
                                handlePriotity(TodoPriorities.High)
                            }}>
                                High
                            </Button>
                            <Button className="text-end me-2" type="submit" color="warning" outline={formvalue.priority !== TodoPriorities.Medium} onClick={(e) => {
                                e.preventDefault();
                                handlePriotity(TodoPriorities.Medium)
                            }}>
                                Medium
                            </Button>
                            <Button className="text-end" type="submit" color="success" outline={formvalue.priority !== TodoPriorities.Low} onClick={(e) => {
                                e.preventDefault();
                                handlePriotity(TodoPriorities.Low)
                            }}>
                                Low
                            </Button>
                        </div>
                    </div>

                    <div className="text-end">
                        <Button className="text-end" type="submit" color="primary" onClick={(e) => {
                            e.preventDefault();
                            handleSubmit()
                        }}>
                            {isEditMode ? 'Edit' : 'Add'}
                        </Button>
                    </div>    
                </form>    
            </ModalBody>
        </Modal>
    )
}

export default ManageTodoModal;