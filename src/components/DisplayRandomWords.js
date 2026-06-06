import { Container } from "reactstrap";

import WordCard from "./WordCard";
import { fetchRandomWords } from "../utils/fetchRandomWords";
import { useEffect, useState } from "react";

const DisplayRandomWords = () => {
  const [randomWords, setRandomWords] = useState([]);

  useEffect(() => {
    const loadWords = async () => {
      const dataFromServer = await fetchRandomWords();
      setRandomWords(dataFromServer || []);
    };

    loadWords();
  }, []);

  return (
    <Container>
      <ul>
        {randomWords.map((word) => {
          return (
            <li key={word.word}>
              <WordCard word={word} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default DisplayRandomWords;
