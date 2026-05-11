import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="background"></div>

        <div className="card">
          <div className="glow"></div>

          <p className="tag">🚀 React + Jenkins + Docker</p>

          <h1 className="title">
            My First <span>CI Pipeline</span> Setup
          </h1>

          <p className="subtitle">
            Automated build and deployment workflow using modern DevOps tools.
          </p>

          <button className="btn">Pipeline Running</button>
        </div>
      </div>
    </>
  );
}

export default App;