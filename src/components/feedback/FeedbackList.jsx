import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import FeedbackContext from '../../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import Spinner from '../UI/Spinner'

function FeedbackList() {
	const { feedback, isLoading } = useContext(FeedbackContext)

	if (!isLoading && (!feedback || !feedback.length)) {
		return <p>No feedbacks yet. Add an feedback...</p>
	}

	return isLoading ? (
		<Spinner />
	) : (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map(item => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default FeedbackList

//import PropTypes from 'prop-types'

// FeedbackList.propTypes = {
// 	feedback: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// 			text: PropTypes.string.isRequired,
// 			rating: PropTypes.number.isRequired,
// 		})
// 	),
// }
