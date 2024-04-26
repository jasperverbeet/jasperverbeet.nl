import Image from "next/image";
import path from "node:path";
import { forwardRef } from "react";
import sharp from "sharp";

const MdxImage = forwardRef<HTMLImageElement, React.HTMLProps<HTMLImageElement>>(
  async ({ src, alt, ...props }, ref) => {
    if (!src) {
      throw new Error("Image src is required");
    }

    if (!alt) {
      throw new Error("Image alt is required");
    }

    const rawImage = sharp(path.join(process.cwd(), "public", src.slice(1)));

    const { data: blurImageData, info: blurImageInfo } = await rawImage
      .clone()
      .resize(16)
      .blur(16)
      .toBuffer({ resolveWithObject: true });

    const { info } = await rawImage.toBuffer({ resolveWithObject: true });

    return (
      <Image
        ref={ref}
        {...props}
        src={src}
        alt={alt}
        width={info.width}
        height={info.height}
        placeholder="blur"
        blurDataURL={`data:image/${blurImageInfo.format};base64,${blurImageData.toString(
          "base64",
        )}`}
      />
    );
  },
);

export default MdxImage;
