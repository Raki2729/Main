
import './App.css';
import { StudentFooter } from './components/StudentFooter';
import { StudentHeader } from './components/StudentHeader';
import { StudentInfo } from './components/StudentInfo';

function App() {
  const isStudentInfo = true;
  const isSpringBreak = false;
  const isSummerBreak = true;
  return (
    <div className="App">
      Hello from student-info-ui
      <StudentHeader
      isStudentInfo={isStudentInfo}
      isSpringBreak={isSpringBreak}
      isSummerBreak={isSummerBreak}/>
      <StudentInfo
      isSpringBreak={isSpringBreak}
      isSummerBreak={isSummerBreak}/>
      <StudentFooter
      isStudentInfo={isStudentInfo}
      isSpringBreak={isSpringBreak}
      isSummerBreak={isSummerBreak}/>
    </div>
  );
}

export default App;
// to render the three components in the web page or parent component(App.js)