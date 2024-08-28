import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#1a145a] py-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex justify-start items-center gap-2 mb-8">
              <Image src="/images/logo.png" alt="Logo" width={64} height={64} />
              <div>
                <p className="flex justify-start items-center gap-2 text-2xl text-primary font-bold italic">
                  DZION<span className="text-secondary font-semibold">Store</span>
                </p>
                <p className="text-secondary text-xs italic">Belanja Cerdas, Hidup Lebih Mudah.</p>
              </div>
            </Link>
            <div className="flex justify-start items-center gap-5 mb-8">
              <Link href="https://www.instagram.com/rafly_dionn" target="_blank">
                <Image src="/icons/instagram.png" alt="Logo" width={64} height={64} className="w-full h-auto max-w-8" />
              </Link>
              <Link href="https://www.linkedin.com/in/rafly-dioniswara-pramono-177984221/" target="_blank">
                <Image src="/icons/linkedin.png" alt="Logo" width={64} height={64} className="w-full h-auto max-w-8" />
              </Link>
              <Link
                href="https://github.com/RaflyDioniswaraPramono?tab=repositories"
                target="_blank"
                className="bg-white rounded-md">
                <Image src="/icons/github.png" alt="Logo" width={64} height={64} className="w-full h-auto max-w-8" />
              </Link>
            </div>
            <p className="text-xs text-white w-2/3">
              Jln. Juwet RT 02 RW 06 Dusun Krajan II, Kuoterenon, Kec. Sukodono, Kab. Lumajang, Jawa Timur.
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="text-lg font-semibold tracking-wide text-white mb-4">Kategori Produk</h1>
            <ul className="list-disc pl-4 text-white text-sm">
              <li className="mb-3">
                <Link href="/elektronik" className="hover:text-primary transition-colors duration-150 hover:underline">
                  Elektronik
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/perhiasan" className="hover:text-primary transition-colors duration-150 hover:underline">
                  Perhiasan
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/pakaian/pria"
                  className="hover:text-primary transition-colors duration-150 hover:underline">
                  Pakaian Pria
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href="/pakaian/wanita"
                  className="hover:text-primary transition-colors duration-150 hover:underline">
                  Pakaian Wanita
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h1 className="text-lg font-semibold tracking-wide text-white mb-4">Fitur</h1>
            <ul className="list-disc pl-4 text-white text-sm">
              <li className="mb-3">
                <Link href="/signin" className="hover:text-primary transition-colors duration-150 hover:underline">
                  Sign In
                </Link>
              </li>
              <li className="mb-3">
                <Link href="/carts" className="hover:text-primary transition-colors duration-150 hover:underline">
                  Keranjang
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
