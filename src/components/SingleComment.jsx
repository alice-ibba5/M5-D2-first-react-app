import { Button, ListGroup } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Trash } from 'react-bootstrap-icons';
import { Bearer } from '../Bearer';

const SingleComment = ({ comment, getAllComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: Bearer,
          },
        }
      )
      if (response.ok) {
        toast.success('La recensione è stata eliminata!');
        getAllComments();
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      toast.warn(error)
    }
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <h6>{comment.comment} - {comment.rate}</h6>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        <Trash />
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
