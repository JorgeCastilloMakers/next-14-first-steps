import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'About page description',
    keywords: ['About page', 'next', 'información']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-3xl">About Page</span>
        </>
    )
};
