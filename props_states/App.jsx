import { useState } from 'react';

function Student(props) {
  const [marks, setMarks] = useState(80);

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Marks: {marks}</h3>
      <button onClick={() => setMarks(marks + 5)}>
        Increase Marks
      </button>
    </div>
  );
}

function App() {
  return <Student name="Rupa" />;
}

export default App;
