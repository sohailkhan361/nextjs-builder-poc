import { BuilderElement } from '@builder.io/sdk';
import Image from 'next/image';
import React from 'react';

type Book = {
    title: string;
    description?: string;
    author: string;
    rank: number;
    cover: string;
    releaseDate: string;
};

type ProductsGridProps = {
    books: Book[] | BuilderElement[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ books }) => {
    return (
        <div className='grid grid-cols-3'>
            {books.map((product, index) => (
                <div key={index} className='flex justify-center p-2 rounded-md'>
                    {isBook(product) ? (
                        <>
                            <h1 className='text-lg'>{product.title}</h1>
                            <Image
                                height={100}
                                width={200}
                                alt='Book Cover'
                                src={product.cover}
                            />
                            <h4>Author: {product.author}</h4>
                        </>
                    ) : (
                        <p>Handle BuilderElement case here</p>
                    )}
                </div>
            ))}
        </div>
    );
};

// Helper function to check if an object is of type Book
function isBook(obj: any): obj is Book {
    return 'title' in obj && 'author' in obj && 'cover' in obj;
}

export default ProductsGrid;