import Image from "next/image";
import Container from "../Container/Container";

const Banner = () => {
  return (
    <Container>
      <Image src="/images/banner.jpg" alt="Banner Image" width={5252} height={1308} className="w-full h-auto rounded-2xl shadow-md" />
    </Container>
  );
};

export default Banner;
