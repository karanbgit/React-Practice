import React from 'react'

function Card({ username , btnText}) {

    console.log(username);

    return (
        <>
            <div className="max-w-sm my-4 rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src="https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg" alt="Card image" />
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2 text-gray-800">{username}</h2>
                    <p className="text-gray-700 text-base">
                        This is a sample card component using Tailwind CSS. You can replace the content and style it as you need.
                    </p>
                </div>
                <div className="px-6 py-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">#Category</span>
                    <a href="#" className="text-blue-500 hover:underline">{btnText}</a>
                </div>
            </div>
        </>
    )
}

export default Card