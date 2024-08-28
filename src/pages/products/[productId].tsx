import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useLoadingState } from "@/hooks/useLoadingState";
import { getProductById } from "@/services/product.services";
import { Container, Layout } from "@/components";
import { NextPageWithLayout } from "../_app";

interface IProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
}

const DetailProduct: NextPageWithLayout = () => {
  const { query } = useRouter();

  const [productData, setProductData] = useState<IProductData>();

  const { setIsLoading } = useLoadingState();

  const fetchProduct = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await getProductById(query?.productId);

      setProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [query?.productId, setIsLoading]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-12 shadow-md p-6 rounded-lg border">
          <div className="col-span-1 flex justify-center">
            <Image
              src={productData?.image || ""}
              alt="Product Image"
              width={256}
              height={256}
              className="w-full h-auto max-w-48 object-cover"
            />
          </div>

          <div className="col-span-2 flex lg:block flex-col justify-center items-center">
            <h1 className="text-xl font-bold tracking-wide mb-2 text-center lg:text-start">{productData?.title}</h1>
            <p className="text-xs w-2/3 text-zinc-500 mb-6 text-center lg:text-start">{productData?.description}</p>

            <div className="mb-2">
              <p className="mb-1 text-sm text-center lg:text-start text-zinc-500">Harga Produk</p>
              <p className="mb-1 text-sm text-center lg:text-start font-medium">$ {productData?.price}</p>
            </div>

            <div className="mb-2">
              <p className="mb-1 text-sm text-center lg:text-start text-zinc-500">Kategori Produk</p>
              <p className="mb-1 text-sm text-center lg:text-start font-medium">{productData?.category}</p>
            </div>

            <div className="mb-2">
              <p className="mb-1 text-sm text-center lg:text-start text-zinc-500">Rating</p>
              <p className="mb-1 text-sm text-center lg:text-start font-medium">
                {productData?.rating?.rate} / {productData?.rating?.count}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

DetailProduct.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default DetailProduct;
