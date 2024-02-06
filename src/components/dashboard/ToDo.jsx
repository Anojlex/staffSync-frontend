import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../Utils/axiosInstance';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../Utils/employeeSlice';
import useFetchEmployee from '../Hooks/useFetchEmployee';
import LoadingSpinner from '../Spinner';
import { set } from 'react-hook-form';


const ToDo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [id, setId] = useState(null);
    const [isOpen, setIsOpen] = useState(null);
    const dispatch = useDispatch();


    const userId = useSelector((state => state.admin?.data?.user?._id))

    const employee = useSelector((state => state.employee?.data)) || [];
    let user;
    user = employee.find((emp) => emp._id === userId);
    const [todos, setTodos] = useState(user?.todo || []);


    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };
    const handleAddTodo = async () => {
        if (newTitle.trim() !== '') {
            if (editIndex !== null) {

                const response = await axiosInstance.post("/users/update-todo", {
                    todo: {
                        title: newTitle,
                        description: newDescription
                    },
                    todoId: id,
                    employeeId: user._id
                }).then((response) => {
                    dispatch(addEmployee(response.data));
                })
                    .catch((error) => {
                        console.log(error);
                    });

                setEditIndex(null);
            } else {

                const response = await axiosInstance.post("/users/add-todo", {
                    todo: {
                        title: newTitle,
                        description: newDescription
                    },
                    employeeId: user._id,
                }).then((response) => {
                    dispatch(addEmployee(response.data));
                }).catch((error) => {
                    console.log(error);
                });
            }
            setNewTitle('');
            setNewDescription('');
        }
    };

    const handleEditTodo = (index, id) => {
        setNewTitle(todos[index].title);
        setNewDescription(todos[index].description);
        setEditIndex(index);
        setId(id);

    }
    const handleDeleteTodo = async (id) => {
        const response = await axiosInstance.post("/users/delete-todo", {
            todoId: id,
            employeeId: user._id,
        }).then((response) => {
            dispatch(addEmployee(response.data));
        }).catch((error) => {
            console.log(error);
        });
    };


    return (
        <>

            {
                isLoading ? (
                    <div className='flex justify-center pr-36 ' > <LoadingSpinner /></div >
                ) : user ? (
                    < div className='bg-white rounded-xl shadow-sm w-[100%] sm:w-[30%] h-[500px] p-2 mt-3 ml-3' >
                        <div className='flex justify-center h-10 text-[#64728c] pt-2' >
                            <div className='w-20 flex justify-center'>To Do</div>
                        </div >
                        <div
                            className='bg-white h-[280px] p-2 overflow-y-auto max-h-[calc(100vh-14rem)]'
                            style={{
                                scrollbarWidth: 'none',
                            }}
                        >
                            <ul>
                                {todos.map((todo, index) => (
                                    <>
                                        <li onClick={() => handleToggle(index)} key={index}
                                            className='flex items-center h-10 justify-between
                                               p-2 bg-slate-200 mt-1 rounded-md  cursor-pointer text-xs' >
                                            <div>
                                                <div className='cursor-pointer text-blue-500'>
                                                    {index + 1}.{todo.title}
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() => handleEditTodo(index, todo._id)} className='mr-2 text-blue-500'>
                                                    <img className="w-4 h-4 " src='https://img.icons8.com/material/24/737373/edit--v1.png' alt='' />
                                                </button>
                                                <button onClick={() => handleDeleteTodo(todo._id)} className='text-red-500'>
                                                    <img className="w-4 h-4" src="https://img.icons8.com/material-sharp/24/737373/delete.png" alt="" />
                                                </button>
                                            </div>
                                        </li>

                                        {isOpen === index &&
                                            <div className=' min-h-10 text-xs text-green-400 bg-slate-100 p-2 '>
                                                <p>{todo.description}</p>
                                            </div>}
                                    </>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col mt-1'>
                            <input
                                type='text'
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className='border rounded p-1 mb-2 outline-none'
                                placeholder='Title...'
                            />
                            <textarea
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                className='border rounded p-1 mb-2 outline-none resize-none'
                                placeholder='Description...'
                            />
                            <button onClick={handleAddTodo}
                                className='bg-orange-400 hover:bg-orange-500 text-white px-2 rounded h-10' >
                                {editIndex !== null ? 'Save' : 'Add'}
                            </button>
                        </div>
                    </div >
                ) : (
                    <div className='flex justify-center pr-36 ' > <LoadingSpinner /></div >
                )
            }
        </>
    );
};
export default ToDo;
