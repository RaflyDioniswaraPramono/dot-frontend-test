import Container from "../Container/Container";
import ContentTitle from "../ContentTitle/ContentTitle";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AddShoppingCart, Info } from "@mui/icons-material";
import { useLoadingState } from "@/hooks/useLoadingState";
import { getProductByCategory } from "@/services/product.services";

const Jewelry: React.FC = () => {
  const [jewelryDatas, setJewelryDatas] = useState([]);

  const { setIsLoading } = useLoadingState();

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await getProductByCategory("jewelery");

      setJewelryDatas(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container>
      <ContentTitle title="Produk Elektronik" description={`Produk elektronik total ${jewelryDatas.length} item`} />
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-7">
        {jewelryDatas.map((jewels) => {
          const { id, title, price, image } = jewels;

          return (
            <div key={id} className="p-6 bg-white shadow-md rounded-lg flex flex-col justify-between items-center">
              <p className="text-xs text-center text-zinc-500 mb-8">{title}</p>
              <div className="mb-12 flex flex-col justify-between items-center">
                <Image
                  src={image}
                  alt={title}
                  width={256}
                  height={256}
                  className="w-full h-auto max-w-32 max-h-32 object-cover"
                />
              </div>
              <div className="">
                <p className="text-sm text-center text-zinc-600 font-bold mb-6 px-5 py-1 border border-zinc-300 rounded-full">
                  $ {price}
                </p>
                <div className="flex justify-center items-center gap-3">
                  <Link
                    href={`/products/${id}`}
                    className="text-xs bg-tertiary hover:bg-tertiary-hover transition-colors duration-150 p-2 text-white rounded-full">
                    <AddShoppingCart fontSize="small" />
                  </Link>
                  <Link href={`/products/${id}`} className="text-xs bg-primary p-2 text-white rounded-full">
                    <Info fontSize="small" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Jewelry;
