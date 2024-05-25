import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'Pricing page description',
    keywords: ['Pricing page', 'next', 'información']
};

export default function PricingPage(){
    return (
        <>
        <span className="text-3xl">Pricing Page</span>
        </>
    )
}