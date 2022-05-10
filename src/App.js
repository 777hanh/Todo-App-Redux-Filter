import './App.css';
import { Typography, Divider } from 'antd';
import TodoList from './components/Todo-List';
import Search from './components/Search'

const {Title} = Typography;

function App() {
  return (
    <div className="App-body" >
     <Title className="Title">TODO APP</Title>
     <Search />
     <Divider />
     <TodoList />
    </div>
  );
}

export default App;
