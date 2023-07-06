import './App.css';
import { Application } from './components/Application';
import Counter from './components/Counter';
import Skills from './components/Skills';
import Users from './components/users/Users';

function App() {
  const skills = ['plumbing', 'wiring', 'cleaning', 'swimming']
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={skills} />
      {/* <Counter /> */}
      <Users />
    </div>
  );
}

export default App;
