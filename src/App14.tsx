import { useState } from "react"
import { questions } from "./data/questions"
import { QuestionItem } from "./components/QuestionsItem"
import { Results } from "./components/Results"

const Page = () => {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const title = 'Quiz de Culinária'
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handlesAnswer = (answer: number) => {
    setAnswers([ ...answers, answer ])
    loadNextQuestion()
  }

  const handleRestartButton = () => {
   setAnswers([])
   setCurrentQuestion(0)
   setShowResult(false)
  }
  
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-3xl border-b border-black-300 flex justify-center">
          {title}
        </div>
        <div className="p-5">
          {!showResult &&
          <QuestionItem 
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handlesAnswer}
          />
          }
          {showResult &&
            <Results 
              questions={questions}
              answers={answers}
            />
          }
        </div>
        <div className="p-5 border-t border-black-300 text-center">
          {!showResult && 
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-2 rounded-md bg-gray-700 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page