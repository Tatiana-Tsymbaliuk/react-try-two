import React from 'react';
import './ColorPiker.css';

class ColorPiker extends React.Component {
        state = {
        ActiveOptionsIdx:0
        }
        render() {
                return (
                <div className='ColorPiker'>
                <h2 className='ColorPicker__title'>Color Piker</h2>
                <div>{this.props.options.map(({ label, color }) => (
                        <button
                                key={label}
                                className='ColorPiker__option'
                                style={{ backgroundColor: color }}></button>
                ))}</div>
                        </div>   
            )
    }    
}


export default ColorPiker;