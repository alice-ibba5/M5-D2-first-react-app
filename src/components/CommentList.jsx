import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow, getAllComments }) => (
  <ListGroup style={{ color: 'black' }} className="mt-2 mb-5">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} getAllComments={getAllComments} />
    ))}
  </ListGroup>
)

export default CommentList
