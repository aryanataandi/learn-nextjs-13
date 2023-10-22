import Image from 'next/image'
import styles from './postPage.module.css'

export default function About() {
    return (
        <div className='min-h-screen flex'>
            <div className="m-auto px-24">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">About <span className={styles.gradientText}>Page</span>.</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">This is about page.</p>
            </div>
        </div>
    )
}
