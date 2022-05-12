import React from 'react'
import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_TODO, COMPLETED_TODO, } from '../../redux/actions/todo'
import { EditFilled } from '@ant-design/icons';


const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

const Todo = ({ name, priority, id, compeleted }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(compeleted);

    const toggleCheckbox = () => {
        setChecked(!checked);
        onChangeStatus()
    };

    const onChangeStatus = () => {
        // console.log('first')
        dispatch(COMPLETED_TODO(
            {
                id,
                name,
                priority,
                compeleted: !checked
            }
        ))
    }

    const handleDeleteButton = (e) => {
        e.stopPropagation(); // do not do event of Parent element
        dispatch(DELETE_TODO(
            { id: id }
        ))
    }

    const handleEditButton = (e) => {
        e.stopPropagation(); // do not do event of Parent element
        alert('Chưa làm Edit');
    }

    return (
        <Row
            justify='space-between'
            style={{
                marginBottom: 3,
                cursor: 'pointer',
            }}
            onClick={toggleCheckbox}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox} style={{ ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})}}>
                <label onClick={toggleCheckbox} style={{cursor:'pointer'}}>{name}</label>
            </Checkbox>
            <div>
                <Tag color={priorityColorMapping[priority]} style={{ margin: 0, ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}), cursor: 'pointer'  }}>
                    {priority}
                </Tag>
                <Button type="danger" shape="circle" icon={'X'} size='small' style={{ marginLeft: '20px', }} onClick={handleDeleteButton} />
                <Button shape="circle" icon={<EditFilled />} size='small' style={{ marginLeft: '10px', backgroundColor: '#28a745', color: 'white' }} onClick={handleEditButton} />
            </div>
        </Row>
    );
}

export default Todo