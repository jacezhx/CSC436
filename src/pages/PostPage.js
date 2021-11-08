import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import{ Link } from 'react-navi'
import ShowPost from '../post/ShowPost'


export default function PostPage ({ id }) {
    const [ post, getPost ] = useResource(() => ({
        url: `/posts/${id}`,
        method: 'get'
    }))

    useEffect(getPost, [id])

    return (
        <div>
            {(post && post.data)
                ? <ShowPost {...post.data} />
                : 'Loading...'
            }
            <hr/>
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}
