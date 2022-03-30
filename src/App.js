import { useState } from 'react'
import PropTypes from 'prop-types'

import FeedbackData from './data/FeedbackData.json'

import Header from './components/UI/Header'
import FeedbackList from './components/FeedbackList'

const initialState = FeedbackData.FeedbackData

function App() {
	const [feedback, setFeedback] = useState(initialState)

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackList feedback={feedback} />
			</div>
		</>
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
}

Header.propTypes = {
	text: PropTypes.string,
}

export default App
