import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Albizia Woods — Premium Furniture & Woodworking",
  description = "Premium furniture and woodworking inspired by Costa Rican roots, timeless craftsmanship, and architectural aesthetics.",
  url = "https://www.albiziawoods.com",
  image = "https://www.albiziawoods.com/og-image.jpg"
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
