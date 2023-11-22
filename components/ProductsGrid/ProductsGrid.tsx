import { BuilderElement } from '@builder.io/sdk';
import Image from 'next/image';
import React from 'react';

type Book = {
    book: {
        title: string;
        description?: string;
        author: string;
        rank: number;
        cover: string;
        releaseDate: string;
    };
};

type ProductsGridProps = {
    books: Book[] | BuilderElement[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ books }) => {
    return (
        <div className='grid grid-cols-3'>
            {books.map((product, index) => (
                <div key={index} className='flex flex-col justify-center p-2 m-2'>
                    {isBook(product) ? (
                        <div className='flex flex-col shadow-md rounded-lg'>
                            <h1 className='font-bold flex justify-center items-center p-2'>
                                {product.book.title}
                            </h1>
                            <div className='flex justify-center items-center p-1'>
                                <Image
                                    height={100}
                                    width={200}
                                    alt='Book Cover'
                                    src={product.book.cover}
                                />
                            </div>
                            <h4 className='text-sm p-4'>
                                Author: {product.book.author}
                            </h4>
                        </div>
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
    return 'book' in obj && typeof obj.book === 'object';
}

export default ProductsGrid;