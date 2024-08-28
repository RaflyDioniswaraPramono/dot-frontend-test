import Link from "next/link";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import { CartLayout, Container } from "@/components";
import { getCartByUser } from "@/services/cart.services";
import { customDate } from "@/utils/date";
import { useLoadingState } from "@/hooks/useLoadingState";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

interface Product {
  productId: string;
  quantity: number;
}

interface CartData {
  id: string;
  date: string;
  products: Product[];
}

const Carts: NextPageWithLayout = () => {
  const router = useRouter();

  const [cartDatas, setCartDatas] = useState([]);
  
  const { setIsLoading } = useLoadingState();

  const fetchCarts = useCallback(async () => {
    try {
      setIsLoading(true);

      const users = localStorage.getItem("users");

      if (users) {
        const { sub } = JSON.parse(users);

        const response = await getCartByUser(sub);

        setCartDatas(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    fetchCarts();
  }, [fetchCarts]);


  useEffect(() => {
    const users = localStorage.getItem("users");

    if (!users) {
      router.push("/signin")
    }
  }, []);

  return (
    <div>
      <Container>
        <Link href="/" className="flex justify-start items-center gap-3 text-sm underline text-blue-500 mb-4">
          <ArrowBack fontSize="small" />
          Kembali
        </Link>
        {cartDatas?.map((carts) => {
          const { id, date, products } = carts;

          return (
            <div key={id} className="mb-12">
              <p className="text-sm mb-3">{customDate(date)}</p>
              <table className="w-full">
                <thead>
                  <th className="p-2 border border-zinc-300 text-center text-sm">Produk ID</th>
                  <th className="p-2 border border-zinc-300 text-center text-sm">Jumlah</th>
                </thead>
                <tbody>
                  {products.map((product: any, index: number) => {
                    const { productId, quantity } = product;

                    return (
                      <tr key={index}>
                        <td className="p-2 border border-zinc-300 text-center text-sm">{productId}</td>
                        <td className="p-2 border border-zinc-300 text-center text-sm">{quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

Carts.getLayout = (page: ReactElement) => {
  return <CartLayout>{page}</CartLayout>;
};

export default Carts;
