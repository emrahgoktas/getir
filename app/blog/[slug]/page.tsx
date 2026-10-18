import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallCtas } from "@/components/CallCtas";
import { Breadcrumb } from "@/components/Chrome";
import { findPost, getAllPostSlugs, isPublishedPost, posts, wordCount } from "@/data/posts";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      locale: "tr_TR",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post || !isPublishedPost(post)) notFound();

  const others = posts.filter((item) => item.slug !== post.slug && isPublishedPost(item));
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: wordCount(post),
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: pageUrl,
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { href: "/", label: "Ana Sayfa" },
              { href: "/blog", label: "Blog" },
              { label: post.title },
            ]}
          />
        </div>
        <article className="hero wrap">
          <p className="hero__kicker">
            {post.date} · {wordCount(post)} kelime
          </p>
          <h1>{post.title}</h1>
          <div className="article-body">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <CallCtas />
        </article>
        <section className="section wrap">
          <h2>Diğer yazılar — size en yakın çilingir rehberi</h2>
          <ul className="neighbor-list">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
