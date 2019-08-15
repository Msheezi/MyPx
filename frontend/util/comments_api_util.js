export const createComment = (comment) => {


    return (

        $.ajax({
            method: 'post',
            url: 'api/comments',
            data: {comment}
        })
    )
}

export const fetchComment = (id) => {


    return (

        $.ajax({
            method: 'get',
            url: `api/comments/${id}`
            
        })
    )
}

export const fetchComments = (id) => {


    return (

        $.ajax({
            method: 'get',
            url: `api/posts/${id}/comments`

        })
    )
}