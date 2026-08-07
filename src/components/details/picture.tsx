type PictureProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

/** jpg/png のとき同名 webp があれば使う */
export function Picture({
  src,
  alt,
  className,
  width,
  height
}: PictureProps) {
  const webp = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const hasWebp = webp !== src;
  return (
    <div class={className}>
      <picture>
        {hasWebp ? <source srcset={webp} type="image/webp" /> : null}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
}
