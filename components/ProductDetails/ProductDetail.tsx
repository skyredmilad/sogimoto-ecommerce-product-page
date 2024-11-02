import React, { useState } from 'react';
import OptionsSelector from './OptionsSelector';


enum OptionsTypeEnum {
    COLOR = "COLOR",
    BUTTON = "BUTTON",
}

interface OptionsDetailsSelector {
    type: OptionsTypeEnum,
    data: string[];
}

interface ProductDetailReviewsProps {
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

interface ProductDetailProps {
    product: {
        images: string[];
        sku: string;
        title: string;
        price: number;
        discount: number;
        description: string;
        features: string[]
        options: OptionsDetailsSelector[]
        comments: {
            count: number,
            avg_rate: number,
            reviews: ProductDetailReviewsProps[]
        }
    };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {

    const [mainImage, setMainImage] = useState<string>(product.images[0])

    return (

        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img src={mainImage} alt="Product"
                            className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
                        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                            {product.images.map((elem, index) => {
                                return (
                                    <img key={index} src={elem} alt="Thumbnail 1"
                                        className={`size-16 sm:size-20 object-cover rounded-md cursor-pointer ${mainImage == elem ? "opacity-100" : "opacity-60"} hover:opacity-100 transition duration-300`}
                                        onClick={() => setMainImage(elem)}
                                    />
                                )

                            })}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-3xl text-gray-900 font-bold mb-2">{product.title}</h2>
                        <p className="text-gray-800 mb-4">SKU: {product.sku}</p>
                        <div className="mb-4">
                            <span className="text-2xl text-gray-800 font-bold mr-2">${product.price - (product.price * (product.discount / 100))}</span>
                            <span className="text-gray-500 line-through">${product.price}</span>
                        </div>
                        <div className="flex items-center mb-4">

                            {Array.from(Array(product.comments.avg_rate).keys()).map((index) => {
                                return (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="size-6 text-yellow-500">
                                        <path fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                            clipRule="evenodd" />
                                    </svg>
                                )
                            })}

                            <span className="ml-2 text-gray-600">{product.comments.avg_rate} ({product.comments.count} reviews)</span>
                        </div>
                        <p className="text-gray-700 mb-2">{product.description}</p>

                        <ul className="list-disc list-inside text-gray-700">
                            {product.features.map((elem, index) => {
                                return (
                                    <li key={index}>{elem}</li>
                                )
                            })}
                        </ul>

                        <OptionsSelector options={product.options} onOptionSelect={(option) => console.log(option)} />

                        <div className="mb-6">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" min={1} defaultValue={1}
                                className="w-12 text-center text-gray-600 rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </div>

                        <div className="flex space-x-4 mb-6">
                            <button
                                className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                                Add to Cart
                            </button>
                            <button
                                className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
