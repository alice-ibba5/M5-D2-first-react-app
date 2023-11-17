import { Button, ListGroup } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import { Bearer } from '../Bearer';
import React, { useState, useCallback } from "react";

const SingleComment = ({ id, comment, setComments }) => {
  const [loading, setLoading] = useState(true);
  const [editingComment, setEditingComment] = useState(null);

  const getComments = useCallback(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`,
    {
      method: 'GET',
      headers: {
        Authorization: Bearer,
      },
    })
      .then((r) => r.json())
      .then(setComments)
      .finally(() => {
        setLoading(false);
      });
  });

  const deleteComment = (asin) => {
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
        toast.success('La recensione è stata eliminata!');
        
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
      
    })
    .then(getComments())
    .catch((e) => console.error(e));
};

const changeComment = (asin) => {
  fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + asin,
      {
        method: 'PUT',
        headers: {
          Authorization: Bearer,
        },
      }
    )
    .then((r) => {
    if (r.ok) {
      toast.success('La recensione è stata modificata!');
      
    } else {
      throw new Error('La recensione non è stata modificata!')
    }
    
  })
  .then(getComments())
  .catch((e) => console.error(e));
};
  

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <h6>{comment.comment} - {comment.rate}</h6>
      <div>
      <Button
        variant="warning"
        className="ms-2 rounded-circle" 
        onClick={() => changeComment(comment._id)} 
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
    </ListGroup.Item>
  )
}

export default SingleComment
