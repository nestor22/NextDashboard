import Image from 'next/image';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { Chart } from '@common/Chart';
const PRODUCT_LIMIT = 5;
const PRODUCT_OFFET = 5;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFET));

  const categoryName = products?.map((product) =>product.category)

  const categoryCount = categoryName?.map((category) => category.name)

  const countOcurrences = (arr) => arr.reduce((prev, curr)=>((prev[curr] = ++prev[curr]|| 1), prev), {})

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#f2ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart chartData={data} className="mb-8 mt-2" />
     
    </>
  );
}
