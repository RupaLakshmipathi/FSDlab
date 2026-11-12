//src/App.jsx
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


//src/App.css
.container {
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
}

//src/App.scss
$color: purple;

.student {
  color: $color;
  font-size: 20px;
  padding: 5px;

  &:hover {
    background-color: lightgray;
  }
}
