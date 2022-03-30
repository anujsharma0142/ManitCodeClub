import React, { useState } from 'react';
import './Contest.css';
export default function App() {
	const questions = [
		{
			questionText: 'HTML stands for',
			answerOptions: [
				{ answerText: 'HighText Machine Language', isCorrect: false },
				{ answerText: 'HyperText and links Markup Language', isCorrect: false },
				{ answerText: 'HyperText Markup Language', isCorrect: true },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
		{
			questionText: 'The correct sequence of HTML tags for starting a webpage is',
			answerOptions: [
				{ answerText: 'Head, Title, HTML, body', isCorrect: false },
				{ answerText: 'HTML, Body, Title, Head', isCorrect: false },
				{ answerText: 'HTML, Head, Body,Title', isCorrect: false },
				{ answerText: 'HTML, Head, Title, Body', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following tag is used for inserting the largest heading in HTML?',
			answerOptions: [
				{ answerText: '<h3>', isCorrect: false },
				{ answerText: '<h1>', isCorrect: true },
				{ answerText: '<h5>', isCorrect: false },
				{ answerText: '<h6>', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following element is responsible for making the text bold in HTML?',
			answerOptions: [
				{ answerText: '<pre>', isCorrect: false },
				{ answerText: '<a>', isCorrect: false },
				{ answerText: '<b>', isCorrect: true },
				{ answerText: '<br>', isCorrect: false },
			],
		},
	];

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
		<div className='app appbody'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
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
