function App() {
  function showMessage() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>React Events</h1>
      <button onClick={showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default App;
