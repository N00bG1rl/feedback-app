import { useState } from 'react'
import PropTypes from 'prop-types'

import FeedbackData from './data/FeedbackData.json'

import Header from './components/UI/Header'
import FeedbackList from './components/feedback/FeedbackList'
import FeedbackStats from './components/feedback/FeedbackStats'
import FeedbackFrom from './components/feedback/FeedbackFrom'

const initialState = FeedbackData

function App() {
	const [feedback, setFeedback] = useState(initialState)

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter(item => item.id !== id))
		}
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackFrom />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
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
