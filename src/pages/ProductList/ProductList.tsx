import { useQuery } from "@tanstack/react-query";
import AsideFilter from "./AsideFilter";
import Product from "./Product/Product";
import SortProductList from "./SortProductList";
import useQueryParams from "src/hooks/useQueryParams";
import productApi from "src/apis/product.api";

export default function ProductList() {
  const queryParams = useQueryParams()
  const {data} = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })
  console.log(data)
  return <div className="bg-gray-200 py-6">
    <div className="container">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <AsideFilter/>
        </div>
        <div className="col-span-9">
          <SortProductList/>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {Array(30)
            .fill(0).map((_,index) => (
              <Product key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
}
