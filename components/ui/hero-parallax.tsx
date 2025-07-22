"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";



export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1.5], [-200, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [400, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );


  return (
    <div
      ref={ref}
      className="hidden xl:flex bg-black-100 h-[150vh] lg:h-[200vh] my-10 py-40 overflow-hidden  antialiased relative flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] w-full font-cremisse"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="px-50"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-3xl md:text-7xl font-bold text-white">
        Mes récents Projets
      </h1>
      <p className="max-w-2xl text-2xl mt-8 text-neutral-200">
        Découvrez une liste de mes récents projets.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[10rem] w-[10rem] lg:h-96 lg:w-[35rem] relative shrink-0 shadow-[0_0_15px_#a855f7]/50"
    >
    <div className="relative h-full w-full p-[3px] overflow-hidden">
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] z-0 rounded-3xl" />
        <div className="relative z-10 h-full w-full bg-black border border-gray-600 dark:border-purple-400">
            <a
            href={product.link}
            className="block group-hover/product:shadow-2xl "
            >
            <img
            src={product.thumbnail}
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={product.title}
            />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute text-3xl bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
      </div>
    </div>
    </motion.div>
  );
};
