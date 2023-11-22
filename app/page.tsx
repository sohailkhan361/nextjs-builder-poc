import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ProductView from '@/components/ProductView/ProductView';
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid';
import { BuilderElement, builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {

  const navListData = await builder.getAll('navbar', {
    query: {
      name: 'NavList1',
    },
  });

  const footListData = await builder.getAll('footer-list', {
    query: {
      name: 'List1',
    },
  });

  const bookData = await builder.getAll('book-details', {
    query: {
      name: 'Book1',
    },
  });

  const bookSeries = await builder.getAll('book-series', {
    query: {
      name: 'Series1',
    },
  });

  const navItems = navListData[0]?.data?.list || [];
  const footItems = footListData[0]?.data?.list || [];
  const bookItems = bookSeries[0].data?.list || [];
  const book = bookData[0]?.data;

  // console.log(bookSeries[0].data?.list);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar list={navItems} />
      {book && <ProductView {...book as BuilderElement} />}
      <div className='flex flex-col mt-10 border-t-2'>
        <div className='font-bold flex justify-center text-xl p-8'>Our Collection</div>
        <ProductsGrid books={bookItems} />
      </div>
      <Footer list={footItems} />
    </main>
  )
}
