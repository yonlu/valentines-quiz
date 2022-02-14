import React, { useState } from 'react';
import { questions } from "./utils/questions";

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<p>You scored {score} out of {questions.length}</p>
					{score <= 6 ? (
						<p>
							What a shame! You don’t know me at all.
							Better shape up and have more conversation with me.
							You own me an extra valentines gift!
						</p>
					) : score <= 12 ? (
						<p>You know me a little but you can improve. Take me to a date night at Sal’s and we will talk!</p>
					) : score <= 18 ? (
						<p>Wow impressive! You know me a lot. We should celebrate with a breakfast Bloody Mary on my next day off.</p>
					) : score <= 20 ? (
						<p>You’re definitely my soulmate. Just give me a kiss and call it a day.</p>
					) : null }
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
