import { DiscussionEmbed } from 'disqus-react';
import { CommentCount } from 'disqus-react';
import Script from 'next/script'
import Head from 'next/head'
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div className='container mt-3'>
            <Head>
                <title>Disqus Comment</title>
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <div className='d-flex justify-content-center'>
                <img src='https://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Comment-edit-icon.png' className={styles.comment_icon}></img>
            </div>
            <div className='text-center mb-4 font-weight-bold fs-30'>
                <CommentCount 
                    shortname='test-bedpxn50tg'
                    config={
                        {
                            url: "http://localhost:3000/",
                            identifier: "1",
                            title: "John",
                            language: 'en'
                        }
                    }
                />
            </div>
            <DiscussionEmbed className={styles.comment_section} shortname='test-bedpxn50tg'
                config={
                    {
                        url: "http://localhost:3000/",
                        identifier: "1",
                        title: "John",
                        language: 'en'
                    }
                }
            />
        </div>
    )
}
