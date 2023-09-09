import { useState } from "react";
import Button from "./Button";

const messages = ["Learn React", "Apply for Jobs💼", "Invest Your Income 🤑"];

export default function App() {
  const [steps, setSteps] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(!isOpen);
  }

  function handlePrevious() {
    if (steps > 1) setSteps(steps - 1);
  }

  function handleNext() {
    if (steps < 3) setSteps(steps + 1);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage steps={steps}>
            {messages[steps - 1]}
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2" textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor="#7950f2" textColor="#fff"
              onClick={handleNext}
            >
              Next <span>👉</span> <span>🕺</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// : 

function StepMessage({ steps, children }) {

  return (

    <div className="message">
      <h3>
        Step {steps}
      </h3>
      {children}
    </div>
  )
}
