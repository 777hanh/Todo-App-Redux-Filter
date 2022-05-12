import React, { useState } from 'react'
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import Todo from '../Todo/index';
import { ADD_TODO } from '../../redux/actions/todo';

const TodoList = () => {

    const dispatch = useDispatch();
    const searchText = useSelector((state) => state.filter.search);
    const searchStatus = useSelector((state) => state.filter.status);
    const searchPriority = useSelector((state) => state.filter.priority);
    //List Todo filterd by searchText (lowercase)
    const listTodo = useSelector((state) => {
        const todoListFilter = state.todo.todo.filter(item => {
            if (searchStatus === 'All') {
                return (searchPriority.length ?
                    (item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.priority.toLowerCase().includes(searchText.toLowerCase())) &&
                    searchPriority.includes(item.priority)
                    :
                    (item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                        item.priority.toLowerCase().includes(searchText.toLowerCase())))
            }
            else {
                return (searchPriority.length ?
                    (searchPriority.includes(item.priority) &&
                        (item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            item.priority.toLowerCase().includes(searchText.toLowerCase())) &&
                        (searchStatus === 'Completed' ? item.compeleted : !item.compeleted)) : (
                        (item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                            item.priority.toLowerCase().includes(searchText.toLowerCase())) &&
                        (searchStatus === 'Completed' ? item.compeleted : !item.compeleted))
                )
            }
        })
        return todoListFilter
    });
    // console.log(searchText);

    const [dataForm, setDataForm] = useState({
        id: uuidv4(),
        name: '',
        priority: 'Medium',
        compeleted: false,
    });

    const onChangeInput = event => setDataForm({
        ...dataForm,
        name: event.target.value
    })

    const onChangePriority = (value) => {
        setDataForm({
            ...dataForm,
            priority: value
        })
    }

    const clear = () => {
        setDataForm({
            id: uuidv4(),
            name: '',
            priority: 'Medium',
            compeleted: false,
        })
    }

    const handleAddButton = () => {
        if (dataForm.name !== '') {
            dispatch(ADD_TODO({
                dataForm
            }));
            clear();
        }
        else {

        }
    }
    return (
        <Row >
            <Col className='body-column' span={24} style={{ overflowY: 'auto' }}>
                {/* <Todo name='haha' priority='Meidum'/> */}
                {listTodo.length ?
                    listTodo.map((todo) =>
                        <div key={todo.id} ><Todo id={todo.id} name={todo.name} priority={todo.priority} compeleted={todo.compeleted} />
                            <hr />
                        </div>) :
                    <div className="Empty">
                        <p>Empty Todo</p>
                    </div>
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    {/* input todo name */}
                    <Input name='name' value={dataForm.name} onChange={onChangeInput} placeholder='Todo Name' />
                    {/* select priority */}
                    <Select placement='topLeft' defaultValue={dataForm.priority} value={dataForm.priority} onChange={onChangePriority} style={{ width: '30%', textAlign: 'center' }}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    {/* button submit */}
                    <Button disabled={dataForm.name === ''} type='primary' onClick={handleAddButton}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}

export default TodoList