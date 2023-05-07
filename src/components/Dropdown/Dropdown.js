import React from 'react';
import './Dropdown.css'

class Dropdown extends React.Component{
        state = {
        visible: false
        }
        togle = () => {
                this.setState(prevState => ({
                        visible: !prevState.visible
                }))
        }
//         show=()=> {
//         this.setState({visible: true})
//         }
//         hide = () => {
//         this.setState({ visible: false})
// }

        render() {
                return (
                        <div className='Dropdown'>
                                <button onClick={this.togle}>{this.state.visible? 'Скрыть': 'Показать'}</button>
                                {/* <button onClick={this.hide}>Скрыть</button> */}
                                
                                {this.state.visible&&<div className='Dropdown__menu'>Выпадающее меню</div>}
                        </div>
                )
        }
}
export default Dropdown;
