import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown/Dropdown';
import ColorPiker from 'components/ColorPiker/ColorPiker';

const colorPikerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F5185' }
];


export const App = () =>  (
    <div>
      Состояние компонента
    

      <Counter />
      <Dropdown />
       <ColorPiker options={colorPikerOptions} />
    </div>
  );

