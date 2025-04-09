import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
  const [classes, setClasses] = useState(["Math", "Science", "History"]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="left-column">
          <Card>
            <h2>Classes</h2>
            {classes.map((name) => <p>{name}</p>)}
          </Card>
          <Card>
            <h2>Assignments</h2>
          </Card>
        </div>
        <Card>
          <h1>Welcome to BaconLMS</h1>
        </Card>
      </main>
    </div>
  )
};

export default App;