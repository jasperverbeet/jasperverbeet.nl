import Image from "next/image";
import { forwardRef } from "react";

const MdxImage = forwardRef<HTMLImageElement, React.HTMLProps<HTMLImageElement>>(
  async ({ src, alt, ...props }, ref) => {
    if (!src) {
      throw new Error("Image src is required");
    }

    if (!alt) {
      throw new Error("Image alt is required");
    }

    return (
      <Image
        ref={ref}
        {...props}
        src={src}
        alt={alt}
        width={768}
        height={768}
        placeholder="empty"
      />
    );
  },
);

export default MdxImage;
