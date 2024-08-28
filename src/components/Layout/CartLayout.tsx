import { ICartLayoutProps } from "@/interfaces/components.interface";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const CartLayout = ({ children }: ICartLayoutProps) => {
  return (
    <div>
      <div className="py-4 mb-3">
        <Navbar />
      </div>
      <div className="mb-12">
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CartLayout;
