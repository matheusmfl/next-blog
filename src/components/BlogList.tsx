'use client'

import urlFor from "@/lib/urlFor"
import Image from "next/image"
import category from "../../schemas/category"

type props = {
    posts: Post[]
}

export default function BlogList({ posts }: props) {
    console.log(posts.length)

    return (
        <>
            <div>
                <hr className="border-[#f7AB0A] mb-10" />

                <div>
                    {posts.map(post => {
                        return (
                            <div key={post._id} className="flex flex-col group cursor-pointer">
                                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                    <Image className=" rounded-lg object-cover object-left lg:object-center" src={urlFor(post.mainImage).url()} alt={post.title} fill />

                                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                        <div>
                                            <p className="font-bold">{post.title}</p>
                                            <p>
                                                {new Date(post._createdAt).toLocaleDateString("pt-BR", {
                                                    day: "numeric",
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </p>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center ">
                                            {post.categories.map((category, index) => {
                                                return (
                                                    <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                                        <p>{category.title}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 flex-1">
                                    <p className="underline text-lg font-bold">{post.title}</p>
                                    <p className="text-gray-500 line-clamp-2">{post.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}