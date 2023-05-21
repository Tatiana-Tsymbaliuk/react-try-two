import {useState} from 'react';
import styles from '../ColorPiker/ColorPiker.css';

export default function ColorPiker({options}){
const [activeOptionsIdx, setActiveOptionsIdx]= useState(0);

const makeOptionClassName = index =>{
        return index === activeOptionsIdx ? styles.activeOption : styles.option;
}
const {label} = options[activeOptionsIdx];

return (
        <div className={styles.container}>
        <h2 className={styles.title}>Color Piker</h2>
        <p>Выбран цвет: {label}</p>
        <div>{options.map(({ label, color }, index) => (
                <button
                        key={label}
                        className={makeOptionClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={()=> setActiveOptionsIdx(index)}>COLOR</button>
        ))}</div>
                </div>   
    )

}


// class OldColorPiker extends React.Component {
//         state = {
//         ActiveOptionsIdx:0
//         }
//         render() {
//                 return (
//                 <div className='ColorPiker'>
//                 <h2 className='ColorPicker__title'>Color Piker</h2>
//                 <div>{this.props.options.map(({ label, color }) => (
//                         <button
//                                 key={label}
//                                 className='ColorPiker__option'
//                                 style={{ backgroundColor: color }}></button>
//                 ))}</div>
//                         </div>   
//             )
//     }    
// }


// export default ColorPiker;