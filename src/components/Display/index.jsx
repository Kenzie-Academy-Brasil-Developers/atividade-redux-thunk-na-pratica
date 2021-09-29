import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentThunk } from '../../store/modules/user/thunks'

const Display = () => {
	const dispatch = useDispatch()
	const [comment, setComment] = useState('')
	const { user } = useSelector((store) => store.user)
	const comments = useSelector((store) => store.user.comments)

	return (
		<div>
			<div>{user}</div>
			<div>
				{comments.map((item, key) => {
					return <div key={key}>{item}</div>
				})}
			</div>
			<input
				placeholder='Comentário'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button onClick={() => dispatch(addCommentThunk(comment))}>
				Add Comment
			</button>
		</div>
	)
}

export default Display
