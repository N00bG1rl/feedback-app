import { v4 as uuidv4 } from 'uuid'
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

	const addFeedback = newFeedback => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	const deleteFeedback = id => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter(item => item.id !== id))
		}
	}

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackFrom handleAdd={addFeedback} />
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
