'use client';

import React from 'react';
import { Button, ConfigProvider, Flex, Tooltip, Divider, Space } from 'antd';

const text = <span>prompt text</span>;

const buttonWidth = 80;

export default function TooltipPage () {

    const ComponentWithEvents: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => (
        <span {...props}>This text is inside a component with the necessary events exposed.</span>
    );

    const colors = [
        'pink',
        'red',
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',
    ];

    const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

    return (
        <div className='section'>
            <Tooltip title="prompt text">
                <ComponentWithEvents />
            </Tooltip>
            <br />
            <br />
            <hr />
            <br />
            <Divider orientation="left">Presets</Divider>
            <Space wrap>
            {colors.map((color) => (
                <Tooltip title="prompt text" color={color} key={color}>
                <Button>{color}</Button>
                </Tooltip>
            ))}
            </Space>
            <Divider orientation="left">Custom</Divider>
            <Space wrap>
            {customColors.map((color) => (
                <Tooltip title="prompt text" color={color} key={color}>
                <Button>{color}</Button>
                </Tooltip>
            ))}
            </Space>
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
                <Flex vertical justify="center" align="center" className="demo">
                <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
                    <Tooltip placement="topLeft" title={text}>
                    <Button>TL</Button>
                    </Tooltip>
                    <Tooltip placement="top" title={text}>
                    <Button>Top</Button>
                    </Tooltip>
                    <Tooltip placement="topRight" title={text}>
                    <Button>TR</Button>
                    </Tooltip>
                </Flex>
                <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
                    <Flex align="center" vertical>
                    <Tooltip placement="leftTop" title={text}>
                        <Button>LT</Button>
                    </Tooltip>
                    <Tooltip placement="left" title={text}>
                        <Button>Left</Button>
                    </Tooltip>
                    <Tooltip placement="leftBottom" title={text}>
                        <Button>LB</Button>
                    </Tooltip>
                    </Flex>
                    <Flex align="center" vertical>
                    <Tooltip placement="rightTop" title={text}>
                        <Button>RT</Button>
                    </Tooltip>
                    <Tooltip placement="right" title={text}>
                        <Button>Right</Button>
                    </Tooltip>
                    <Tooltip placement="rightBottom" title={text}>
                        <Button>RB</Button>
                    </Tooltip>
                    </Flex>
                </Flex>
                <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
                    <Tooltip placement="bottomLeft" title={text}>
                    <Button>BL</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" title={text}>
                    <Button>Bottom</Button>
                    </Tooltip>
                    <Tooltip placement="bottomRight" title={text}>
                    <Button>BR</Button>
                    </Tooltip>
                </Flex>
                </Flex>
            </ConfigProvider>
        </div>
    )
}