import React from 'react';
import Controls from 'components/Counter/Controls';
import Value from 'components/Counter/Value';

class Counter extends React.Component{
        // дефолт(по умолчанию) пропы (свойства)
        static defaultProps = {
        inishialValue: 0
        }

        // static propTypes = {
                
        // }

        //Состояния
        state = {
        value: this.props.inishialValue
        }
        
        //Методы кастомные (произвольный, сделанный на заказ, 
        //отличный от стандартного набора и созданный под конкретные типовые требования)
        handleIncrement = ()=> {        
       this.setState(prevState => ({value: prevState.value + 1}));
        }
        handleDecrement = () => {
        this.setState(prevState => ({value: prevState.value - 1}));      
        }
        //Рендер разметки
        render() {
                return <div className="Counter">
                        <Value
                        value={this.state.value}/>
            {/* <span className="Counter__value">{this.state.value}</span>     */}
                    <Controls
                            onIcrement={this.handleIncrement}
                            onDecrement={this.handleDecrement} />
               </div>
                 
      
 }
}


export default Counter;