import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FeedbackProvider } from './context/FeedbackContext'

import Header from './components/UI/Header'
import FeedbackList from './components/feedback/FeedbackList'
import FeedbackStats from './components/feedback/FeedbackStats'
import FeedbackFrom from './components/feedback/FeedbackFrom'
import About from './pages/AboutPage'
import AboutIconLink from './components/UI/AboutIconLink'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackFrom />
									<FeedbackStats />
									<FeedbackList />
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
		</FeedbackProvider>
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
}

Header.propTypes = {
	text: PropTypes.string,
}

export default App
