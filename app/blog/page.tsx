import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Chrome";
import { publishedPosts, wordCount } from "@/data/posts";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const title = "Blog | Çilingir 15 Dk Kapıda | Getir Çilingir";
const description =
  "Acil çilingir hizmeti, nöbetçi çilingir, hasarsız kilit açma, gece çilingir ve size en yakın çilingir üzerine yazılar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/blog`,
    locale: "tr_TR",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main>
      <div className="wrap">
        <Breadcrumb
          items={[
            { href: "/", label: "Ana Sayfa" },
            { label: "Blog" },
          ]}
        />
      </div>
      <section className="hero wrap">
        <p className="hero__kicker">Getir Çilingir blog</p>
        <h1>Blog — acil çilingir hizmeti ve nöbetçi çilingir</h1>
        <p className="hero__lead">
          Çilingir 15 Dk Kapıda, hasarsız kilit açma, 7/24 çilingir ve size
          en yakın çilingir. Aktif ekibimiz sahada; yazılar da aynı hatta.
        </p>
      </section>
      <section className="section wrap">
        <h2>Makaleler</h2>
        <div className="blog-grid">
          {publishedPosts().map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="region-card"
            >
              <span className="region-card__time">
                {wordCount(post)} kelime · {post.readingMinutes} dk
              </span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <span className="region-card__go">Oku →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
