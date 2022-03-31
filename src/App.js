import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import Header from './components/UI/Header'
import FeedbackList from './components/feedback/FeedbackList'
import FeedbackStats from './components/feedback/FeedbackStats'
import FeedbackFrom from './components/feedback/FeedbackFrom'
import About from './pages/AboutPage'
import AboutIconLink from './components/UI/AboutIconLink'

import FeedbackData from './data/FeedbackData.json'
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
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<FeedbackFrom handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList
									feedback={feedback}
									handleDelete={deleteFeedback}
								/>
							</>
						}
					></Route>

					<Route path='/about' element={<About />}>
						About
					</Route>
				</Routes>
			</div>
			<AboutIconLink />
		</Router>
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
}

Header.propTypes = {
	text: PropTypes.string,
}

export default App
