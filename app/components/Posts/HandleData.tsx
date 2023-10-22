'use client'

import { useState } from 'react';
import CardLists from './CardLists';
import ViewUserButton from './ViewUserButton';

interface handleDataProps {
    posts: Post[]
}

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const HandleData: React.FC<handleDataProps> = ({ posts }: handleDataProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: any) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <div className="flex items-center my-12">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="simple-search" onChange={handleSearch} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search title name..." autoComplete='off' required />
                </div>
                <button type="button" className="hidden p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full my-6">
                {posts.filter((item) =>
                    searchTerm !== '' ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) : item
                ).map((post, index) => (
                    <CardLists key={post.id}>
                        <div className="mb-2">
                            <h1 className='font-bold uppercase'>{post.title}</h1>
                            <p className='text-xs'>{post.body}</p>
                        </div>
                        <ViewUserButton userId={post.userId} />
                    </CardLists>
                ))}
            </div>
        </>
    )
}

export default HandleData