import React, { useState, useEffect } from 'react'

import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData ()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://github.com/users/karanbgit')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4
         bg-gray-600 text-white 
         p-4 text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={200} />
        </div>

    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/karanbgit')
    return res.json()
}