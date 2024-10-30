
import { BlogHome } from "@/components/live/blog";
import Image from "next/image";

export default function Blogs() {

  return (
    <main id="blogs">
      <Image
        src={'/images/hero-bg.png'}
        alt="hero background"
        width={1000}
        height={1000}
        style={{
          position: 'absolute',
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'brightness(1) blur(20px)',
          zIndex: -1,
        }}
      />
      <BlogHome />
    </main>
  );
}
