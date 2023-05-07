import React from 'react';
import './ColorPiker.css';

class ColorPiker extends React.Component {
        render() {
                return (
                <div className='ColorPiker'>
                <h2 className='ColorPicker__title'>Color Piker</h2>
                <div>{this.props.options.map(({ label, color }) => (
                        <span
                                key={label}
                                className='ColorPiker__option'
                                style={{ backgroundColor: color }}></span>
                ))}</div>
                        </div>   
            )
    }    
}


export default ColorPiker;