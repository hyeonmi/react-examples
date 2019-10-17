import React from 'react';
import { ColorConsumer } from '../contexts/color';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'vilolet'];

const SelectColor = () => {  
    return (
        <>
            <h2>색상을 선택하세요.</h2>
            <ColorConsumer>
                {({action}) => (
                    <div style={{display: 'flex'}}>
                        {colors.map(color => (
                            <div 
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => action.setColor(color)}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
        </>
    );
};

export default SelectColor;