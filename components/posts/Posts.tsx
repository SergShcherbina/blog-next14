'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { IArticleFields } from '@/contentful';
import { usePosts } from '@/store/postsStore';

import s from './posts.module.scss';

export const Posts = () => {
    const [posts, getPosts] = usePosts(state => [state.posts, state.getPosts]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <ul>
            {posts.map((post: IArticleFields) => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className={s.link}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
