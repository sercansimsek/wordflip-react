import { Button, Form, Input, Label } from "reactstrap";
import "./App.css";
import DisplayRandomWords from "./components/DisplayRandomWords";
import { useState } from "react";

const RandomWordsInput = ({ numberOfWords, setNumberOfWords }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="wordsInput">Enter the number of the words</Label>
      <Input
        type="number"
        name="wordsInput"
        min={1}
        value={numberOfWords}
        onChange={(e) => setNumberOfWords(Number(e.target.value))}
      ></Input>
      <Button type="submit">Apply</Button>
    </Form>
  );
};

function App() {
  const [numberOfWords, setNumberOfWords] = useState(1);

  return (
    <>
      <RandomWordsInput
        numberOfWords={numberOfWords}
        setNumberOfWords={setNumberOfWords}
      />
      <DisplayRandomWords numberOfWords={numberOfWords} />
    </>
  );
}
export default App;
