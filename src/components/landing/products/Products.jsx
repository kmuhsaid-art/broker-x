import ProductCard from "./ProductCard";
import { products } from "./productsData";

export default function Products() {
  return (
    <section className="py-24 bg-[#0B1120]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-500 text-sm">
            Products
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Trade Every Global Market
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            One account gives you access to Crypto,
            Forex, Stocks, Indices,
            Metals and Commodities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}