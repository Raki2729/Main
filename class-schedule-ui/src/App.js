
import './App.css';
import { ClassFooter } from './components/ClassFooter';
import { ClassHeader } from './components/ClassHeader';
import { ClassSchedule } from './components/ClassSchedule';

function App() {
  return (
    <div className="App">
      Hello from class-schedule-ui
      <ClassHeader/> 
      <ClassSchedule/>
      <ClassFooter/> 
    </div>
  );
}

export default App;
