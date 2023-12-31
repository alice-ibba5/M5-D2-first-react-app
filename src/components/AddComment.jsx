import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Bearer } from '../Bearer'

const AddComment = ({ asin, getAllComments }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: Bearer,
          },
        }
      )
      if (response.ok) {

        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
        window.location.reload();
        toast.success('Recensione inviata!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      toast.warn(error)
    }
  }


  return (
    <div className="my-3">
      <Form onSubmit={sendComment} >
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" getAllComments={getAllComments}>
          Invia
        </Button>
      </Form>
    </div>
  );
}

export default AddComment