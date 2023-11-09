import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YTMxOWU3NDZhMDAwMTQ4MTQzMjUiLCJpYXQiOjE2OTg2Nzg3MTEsImV4cCI6MTY5OTg4ODMxMX0.3N1a0TPRxchA1e5X9r5YkLcwsWGNk7Z8R6n4NYrD53k',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center mt-5 bg-white">
      {isLoading && <Loading />}
      {isError && <Error />}
      <h3>Add a comment:</h3>
      <AddComment asin={asin} />
      <h3>Comment list:</h3>
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
