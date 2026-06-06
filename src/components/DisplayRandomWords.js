import { Container } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import WordCard from "./WordCard";
import { fetchRandomWords } from "../utils/fetchRandomWords";
import { useEffect, useState } from "react";

const DisplayRandomWords = ({ numberOfWords = 1 }) => {
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    const loadWords = async () => {
      const dataFromServer = await fetchRandomWords(numberOfWords);
      setRandomWords(dataFromServer || []);
    };

    loadWords();
  }, [numberOfWords]);

  return (
    <Container>
      <ul>
        {randomWords.map((word) => {
          return (
            <li key={uuidv4()}>
              <WordCard word={word} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default DisplayRandomWords;
