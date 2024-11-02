'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import dynamic from 'next/dynamic'

const StarRatings = dynamic(() => import('react-star-ratings'), {
    ssr: false
})




interface ReviewsDetialsProps {
    id: number,
    user: {
        id: number,
        avatar: string,
        name: string
    },
    rate: number,
    like: number,
    time: string,
    description: string
}

interface AddReviewProps {
    onAdd: (data: ReviewsDetialsProps) => void;
}

const AddReview: React.FC<AddReviewProps> = ({ onAdd }) => {

    const user = {
        id: 4,
        avatar: "https://pagedone.io/asset/uploads/1703590007.png",
        name: "Milad Motamedi Nia"
    }
    const [comment, setComment] = useState<ReviewsDetialsProps>({
        id: Math.random(),
        user: user,
        rate: 0,
        like: 0,
        time: Date.now().toString(),
        description: ""
    })

    const handleChange = (prop: keyof ReviewsDetialsProps) => (event: ChangeEvent<HTMLInputElement>) => {
        setComment({ ...comment, [prop]: event.target.value })
    }

    const handleStarChange = (prop: keyof ReviewsDetialsProps) => (rate: any) => {
        setComment({ ...comment, [prop]: rate })
    }

    const submitComment = (e: FormEvent) => {
        e.preventDefault()
        onAdd(comment)
        setComment({
            id: Math.random(),
            user: user,
            rate: 0,
            like: 0,
            time: Date.now().toString(),
            description: ""
        })
    }

    return (
        <section className="pb-24 bg-white relative">
            <div className='w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto'>
                <StarRatings
                    rating={comment.rate}
                    starRatedColor="#FFC300"
                    starHoverColor="#FFC300"
                    changeRating={handleStarChange("rate")}
                    numberOfStars={5}
                    starDimension="50px"
                    starSpacing="2px"
                    svgIconPath={"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"}
                    name='rating'
                />
                <div className="w-full relative flex justify-between gap-2">
                    <input type="text"
                        onChange={handleChange("description")}
                        className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                        placeholder="Leave a constructive comment..." />
                    <div className="absolute right-6 top-[18px] cursor-pointer" onClick={submitComment}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                            fill="none">
                            <g clipPath="url(#clip0_2063_2504)">
                                <path
                                    d="M10.0194 1.66699V5.6556C1.69526 5.6556 1.54178 14.4163 1.69573 18.3337C1.69573 16.4818 5.84659 10.0003 10.0194 10.6414V14.63L18.3332 8.14847L10.0194 1.66699Z"
                                    stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2063_2504">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default AddReview;
