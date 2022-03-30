import PropTypes from 'prop-types'

import Header from './components/UI/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackItem />
			</div>
		</>
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
}

Header.PropTypes = {
	text: PropTypes.string,
}

export default App
