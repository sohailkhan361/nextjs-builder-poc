import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {

  const navListData = await builder.getAll('navbar', {
    query: {
      name: 'NavList1',
    },
  });

  const navItems = navListData[0]?.data?.list || [];

  console.log(navItems)

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar list={navItems} />
      <Footer list={[]} />
    </main>
  )
}
