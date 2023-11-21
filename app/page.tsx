import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ProductView from '@/components/ProductView/ProductView';
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

  const navItems = navListData[0]?.data?.list || [];
  const footItems = footListData[0]?.data?.list || [];
  const book = bookData[0]?.data;

  console.log(book);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar list={navItems} />
      {book && <ProductView {...book as BuilderElement} />}
      <Footer list={footItems} />
    </main>
  )
}
