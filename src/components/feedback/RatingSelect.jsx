import { useState } from 'react'

function RatingSelect({ select }) {
	const [selected, setSelected] = useState(10)

	const handleChange = event => {
		setSelected(+event.currentTarget.value)
		select(+event.currentTarget.value)
	}

	return (
		<ul className='rating'>
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type='radio'
						id={`num${i + 1}`}
						name='rating'
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>

		/* const radioButtons = [1,2,3,4,5,6,7,8,9,10]

		<ul className='rating'>
            {radioButtons.map((num, index) => (
                <li key={index}>
                    <input 
                    type='radio'
                    id={`num${num}`}
                    name='rating'
                    value={`${num}`}
                    onChange={handleChange}
                    checked={selected === num}
                    />
                    <label htmlFor={`num${num}`}>{`${num}`}</label>
                </li>
            ))}
        </ul> */

		/*     <ul className='rating'>
      <li>
        <input type='radio'
        id='num1'
        name='rating'
        value='1'
        onChange={handleChange}
        checked={selected === 1}
        />
      </li>
      <li>
        <input type='radio'
        id='num2'
        name='rating'
        value='2'
        onChange={handleChange}
        checked={selected === 2}
        />
      </li>
    </ul> */
	)
}

export default RatingSelect
