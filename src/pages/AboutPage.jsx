import { Link } from 'react-router-dom'
import Card from '../components/UI/Card'

function About() {
	return (
		<Card>
			<div className='about'>
				<h1>About this project</h1>
				<p>This is a React app to leave feedback for a product or service</p>
				<p>Version: 1.0.0</p>
				<p>
					<Link
						to={{
							pathname: '/',
							search: '?sort=name',
							hash: '#trying-stuff',
						}}
					>
						Back to homepage
					</Link>
				</p>
			</div>
		</Card>
	)
}

export default About
