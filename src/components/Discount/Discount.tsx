import Image from "next/image";
import Container from "../Container/Container";

const Discount = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Image src="/images/banner2.jpg" alt="Banner 2 Image" width={2155} height={744} className="rounded-xl shadow-md"/>
        <Image src="/images/banner3.jpg" alt="Banner 2 Image" width={2187} height={743} className="rounded-xl shadow-md"/>
      </div>
    </Container>
  );
};

export default Discount;
