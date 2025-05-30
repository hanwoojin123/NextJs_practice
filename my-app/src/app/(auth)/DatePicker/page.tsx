'use client';

import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

export default function DatePickerPage() {
    return (
        <div className='section'>
            <Space direction="vertical">
                <DatePicker onChange={onChange} />
                <DatePicker onChange={onChange} picker="week" />
                <DatePicker onChange={onChange} picker="month" />
                <DatePicker onChange={onChange} picker="quarter" />
                <DatePicker onChange={onChange} picker="year" />
            </Space>
        </div>
    )
}