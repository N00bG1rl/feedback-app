import {
	useParams,
	Navigate,
	useNavigate,
	Routes,
	Route,
} from 'react-router-dom'

export default function Post() {
	const params = useParams()
	const status = 200

	const navigate = useNavigate()

	if (status === 404) {
		return <Navigate to='/notFoundPage' />
	}

	const handleClick = () => {
		console.log('Hello')
		navigate('/about')
	}

	return (
		<div>
			<h1>Post {params.id}</h1>
			<h1>Name {params.name}</h1>
			<button onClick={handleClick}>Click</button>
			<Routes>
				<Route path='/show' element={<h1>Nested path</h1>}></Route>
			</Routes>
		</div>
	)
}
// http://localhost:3000/post/5/Brad
