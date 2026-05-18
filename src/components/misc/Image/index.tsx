import clsx from "clsx";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

export const Image = ({
  image,
  className,
  alt,
  loading = "lazy",
  decoding = "async",
  ...props
}: ImageProps) => {
  const imageURL =
    !image || image.startsWith("http://") || image.startsWith("https://")
      ? image
      : new URL(`../../../assets/${image}`, import.meta.url).href;
  return (
    <img
      src={imageURL}
      className={clsx(className, "block max-w-full h-auto")}
      loading={loading}
      decoding={decoding}
      {...props}
      alt={alt}
    />
  );
};

export default Image;
