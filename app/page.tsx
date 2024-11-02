"use client"

import React, { useState } from 'react';
import ProductDetail from '../components/ProductDetails/ProductDetail';
import OptionsSelector from '../components/ProductDetails/OptionsSelector';
import Reviews from '../components/ProductDetails/Reviews';
import AddReview from '../components/ProductDetails/AddReview';

enum OptionsTypeEnum {
  COLOR = "COLOR",
  BUTTON = "BUTTON",
}

const Home: React.FC = () => {


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
  }

  const [product, setProducts] = useState<ProductDetailProps>({
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
      "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
    ],
    sku: 'WH1000XM4',
    title: 'Premium Wireless Headphones',
    price: 399.99,
    discount: 20,
    description: 'Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.',
    features: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      'Touch sensor controls',
      'Speak-to-chat technology'
    ],
    options: [
      {
        type: OptionsTypeEnum.COLOR,
        data: ["#0D1B2A", "#E0E1DD", "#AF1740"]
      },
      {
        type: OptionsTypeEnum.BUTTON,
        data: ["Small", "Medium", "Large"]
      }
    ],
    comments: {
      count: 120,
      avg_rate: 4,
      reviews: [
        {
          id: 101,
          user: {
            id: 1,
            avatar: "https://pagedone.io/asset/uploads/1710237485.png",
            name: "Danial Harrison"
          },
          rate: 4,
          like: 50,
          time: "5 Day ago",
          description: "Malesuada rhoncus senectus amet dui tincidunt. Porttitor lectus diam sit sit pellentesque ultrices. Molestie libero ac odio at tristique sapien est venenatis. Egestas vitae velit vestibulum egestas felis euismod. Morbi ac vel scelerisque morbi eu nisi gravida tellus. Pulvinar orci at elementum massa morbi pellentesque non nulla. Elementum faucibus urna est mattis. Non aliquet in molestie id nisl. Bibendum mauris dolor nisl elit ut eu viverra. Ut facilisi turpis neque eu risus etiam senectus vel. Orci pharetra ornare amet massa. Tempus orci vestibulum pulvinar tincidunt amet dictum sit tempor."
        },
        {
          id: 102,
          user: {
            id: 2,
            avatar: "https://pagedone.io/asset/uploads/1710225753.png",
            name: "John smith"
          },
          rate: 4,
          like: 34,
          time: "4 Day ago",
          description: "Malesuada rhoncus senectus amet dui tincidunt. Porttitor lectus diam sit sit pellentesque ultrices. Molestie libero ac odio at tristique sapien est venenatis. Egestas vitae velit vestibulum egestas felis euismod. Morbi ac vel scelerisque morbi eu nisi gravida tellus. Pulvinar orci at elementum massa morbi pellentesque non nulla. Elementum faucibus urna est mattis. Non aliquet in molestie id nisl. Bibendum mauris dolor nisl elit ut eu viverra. Ut facilisi turpis neque eu risus etiam senectus vel. Orci pharetra ornare amet massa. Tempus orci vestibulum pulvinar tincidunt amet dictum sit tempor."
        },
        {
          id: 103,
          user: {
            id: 3,
            avatar: "https://pagedone.io/asset/uploads/1710238051.png",
            name: "Emma Davis"
          },
          rate: 4,
          like: 21,
          time: "5 Hour ago",
          description: "Malesuada rhoncus senectus amet dui tincidunt. Porttitor lectus diam sit sit pellentesque ultrices. Molestie libero ac odio at tristique sapien est venenatis. Egestas vitae velit vestibulum egestas felis euismod. Morbi ac vel scelerisque morbi eu nisi gravida tellus. Pulvinar orci at elementum massa morbi pellentesque non nulla. Elementum faucibus urna est mattis. Non aliquet in molestie id nisl. Bibendum mauris dolor nisl elit ut eu viverra. Ut facilisi turpis neque eu risus etiam senectus vel. Orci pharetra ornare amet massa. Tempus orci vestibulum pulvinar tincidunt amet dictum sit tempor."
        }
      ],
    }
  });


  const handleAddReview = (data: ProductDetailReviewsProps) => {
    setProducts((prevProduct) => ({
      ...prevProduct,
      comments: {
        ...prevProduct.comments,
        reviews: [...prevProduct.comments.reviews, data]
      }
    }));
  };

  return (
    <div className="mx-auto">
      <ProductDetail product={product} />
      <Reviews reviews={product.comments.reviews} />
      <AddReview onAdd={handleAddReview} />
    </div>
  );
};

export default Home;