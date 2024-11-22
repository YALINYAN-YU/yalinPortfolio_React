import './App.css';
import About from './components/About'; // 引入 About 组件
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello, I'm Yalin Yan!</h1>
      <h1>Welcome to my portfolio site.</h1>
      <About /> {/* 使用 About 组件 */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
