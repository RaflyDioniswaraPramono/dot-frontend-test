import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
import { subnavbarLinks } from "./subnavar.links";
import { usePathname } from "next/navigation";

const SubNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="py-3">
      <Container>
        <div className="border-b border-zinc-300 pb-12">
          <p className="text-sm mb-4 text-zinc-500 font-semibold tracking-wide">Kategori Produk</p>
          <div className="flex justify-between items-center gap-12">
            {subnavbarLinks.map((links) => {
              const { id, linkName, href, imageSrc, imageAlt } = links;

              return (
                <Link
                  href={href}
                  key={id}
                  className={`${href === pathname ? "text-primary shadow-md" : "text-zinc-500 hover:text-primary hover:shadow-md"} border border-zinc-300 transition-colors duration-150 w-full flex flex-col justify-center items-center bg-white p-5 rounded-lg`}>
                  <Image src={imageSrc} alt={imageAlt} width={64} height={64} className="mb-5" />
                  <p className="text-sm text-center">{linkName}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubNavbar;
