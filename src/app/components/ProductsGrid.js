import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { getAllProductsDB } from '@/app/actions';

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <section>
      <Inner>
        <h2 className='pt-5 text-white text-center text-3xl'>Our products</h2>
        <div className='grid grid-cols-12'>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
}
