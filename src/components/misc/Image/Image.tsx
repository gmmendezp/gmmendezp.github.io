import clsx from "clsx";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

export const Image = ({ image, className, alt, ...props }: ImageProps) => {
  const imageURL =
    !image || image.includes("http")
      ? image
      : new URL(`../../../assets/${image}`, import.meta.url).href;
  return (
    <img
      src={imageURL}
      className={clsx(className, "block max-w-full h-auto")}
      {...props}
      alt={alt}
    />
  );
};
