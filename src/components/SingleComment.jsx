import { Button, ListGroup } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Trash } from 'react-bootstrap-icons';

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YTMxOWU3NDZhMDAwMTQ4MTQzMjUiLCJpYXQiOjE2OTg2Nzg3MTEsImV4cCI6MTY5OTg4ODMxMX0.3N1a0TPRxchA1e5X9r5YkLcwsWGNk7Z8R6n4NYrD53k',
          },
        }
      )
      if (response.ok) {
        toast.success('La recensione è stata eliminata!')
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
