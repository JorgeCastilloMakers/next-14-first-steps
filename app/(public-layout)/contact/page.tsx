import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact page description',
    keywords: ['Contact page', 'next', 'información']
};

export default function ContactPage() {
    return (
        <>
        <span className="text-3xl">Contact Page</span>
        </>
    )
}