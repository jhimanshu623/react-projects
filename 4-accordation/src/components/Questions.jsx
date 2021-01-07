import React ,{useState} from "react";
import data from "../data";
import Question from "./Question";

function Questions() {
  const [questions, setQuestions] = useState(data);

  return (
    <section>
      {questions.map((ques) => {
        return <Question key={ques.id} {...ques}/>;
      })}
    </section>
  );
}

export default Questions;