import Link from "next/link";
import Container from "../Container/Container";
import { Logout, Person, ShoppingCart } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import { getUserById } from "@/services/user.services";
import { useRouter } from "next/router";
import { useToastState } from "@/hooks/useToastState";

interface IUserData {
  id: number;
  name: any;
  username: string;
  email: string;
}

const Navbar = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<IUserData>();

  const { showToast } = useToastState();

  const fetchUserData = useCallback(async () => {
    try {
      const user = localStorage.getItem("users");

      if (user) {
        const { sub } = JSON.parse(user);

        const response = await getUserById(sub);

        setUserData(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleLogout = () => {
    localStorage.clear();

    showToast("Logout berhasil!", "success", () => {
      router.push("/signin");
    });
  };

  return (
    <Container>
      <div className="grid grid-cols-2 items-center">
        <div>
          <Link href="/">
            <div className="flex justify-start items-center gap-2">
              <p className="text-2xl text-primary font-bold italic">DZION</p>
              <span className="text-secondary font-semibold text-2xl italic">Store</span>
            </div>
            <p className="text-zinc-400 text-xs italic">Belanja Cerdas, Hidup Lebih Mudah.</p>
          </Link>
        </div>
        <div className="col-span-1 flex items-center justify-end gap-3">
          <Link
            href="/carts"
            className="flex justify-center items-center border border-zinc-300 px-4 py-1 rounded-full text-xs gap-2">
            <ShoppingCart fontSize="small" />
          </Link>
          {userData ? (
            <button
              onClick={() => handleLogout()}
              className="flex justify-center items-center border border-zinc-300 px-4 py-1 rounded-full text-xs gap-2">
              <div>
                {userData?.name.firstname} {userData?.name.lastname}
              </div>
              <Logout fontSize="small" className="text-red-500" />
            </button>
          ) : (
            <Link
              href="/signin"
              className="flex justify-center items-center border border-zinc-300 px-4 py-1 rounded-full text-xs gap-2">
              <Person fontSize="small" />
              Sign in
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
