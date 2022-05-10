import React, { useState } from 'react'
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import {SEARCH_TODO} from '../../redux/actions/filter'


const { Search } = Input;

const Search_Filter = () => {

    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value)
        dispatch(SEARCH_TODO(
            e.target.value
        ))
    }


    let body = (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                >
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
            </Col>
        </Row>
    );

    return (
        <div>
            {body}
        </div>
    )
}

export default Search_Filter