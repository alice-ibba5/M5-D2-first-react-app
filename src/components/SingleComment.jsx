import { Button, ListGroup, Form, Card } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import { Bearer } from '../Bearer';
import React, { useState, useCallback, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';

const SingleComment = ({
  id,
  comment,
  setComments
}) => {
  const [loading, setLoading] = useState(true);
  const [editingComment, setEditingComment] = useState(null);
  const [rateValue, setRateValue] = useState(false);
  const [description, setDescription] = useState(comment.comment);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const deleteComment = (asin, getAllComments) => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        method: 'DELETE',
        headers: {
          Authorization: Bearer,
        },
      }
    )
      .then((r) => {
        if (r.ok) {
          window.location.reload();
          toast.success('Comment deleted successfully!');

        } else {
          throw new Error('Something went wrong!')
        }

      })

      .catch((e) => console.error(e));
  };



  const changeComment = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      comment: description,
      rate: rateValue,
      elementID: id,
    };
    try {
      fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: Bearer,
          },
          body: JSON.stringify(formData),
        }
      )
        .then((r) => {
          if (r.ok) {
            window.location.reload();
            toast.success("Comment updated successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });

          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })
        .then(() => {
          setEditingComment(null);

        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setEditingComment(null);
  };



  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <h6>{comment.comment} - {comment.rate}</h6>
      <div>
        <Button
          variant="warning"
          className="ms-2 rounded-circle"
          onClick={handleShow}
        >
          <PencilSquare />
        </Button>


        <Button
          variant="danger"
          className="ms-2 rounded-circle"
          onClick={() => deleteComment(comment._id)}
        >
          <Trash />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={changeComment}>
          <Card.Title className="d-flex justify-content-center">
            Change the comment:
          </Card.Title>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control

              as="textarea"
              rows={3}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Come valuteresti il libro?</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={comment.rate.value}
            onChange={(e) => setRateValue(e.target.value)}
          >
            <option>Valutazione...</option>
            <option value="5">Eccellente</option>
            <option value="4">Molto buono</option>
            <option value="3">Nella media</option>
            <option value="2">Scarso</option>
            <option value="1">Pessimo</option>
          </Form.Select>
          <Form.Group className="d-flex justify-content-end py-4 gap-2">
            <Button variant="success" className="me-2" type="submit">
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <ToastContainer />
          </Form.Group>
        </Form>
      </Modal>




    </ListGroup.Item>
  )
}

export default SingleComment
