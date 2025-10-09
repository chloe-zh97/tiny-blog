import Link from "next/link";

export default function PostCard({
  post,
}: {
  post: {
    title: string;
    summary: string;
    date: string;
    slug: string;
  };
}) {
  return (
    <div className="border rounded-lg p-4 mb-4 hover:shadow-lg transition">
      <Link href={`/post/${post.slug}`}>
        <h2 className="text-xl font-semibold">{post.title}</h2>
      </Link>
      <p className="text-gray-600 text-sm">{new Date(post.date).toLocaleDateString()}</p>
      <p className="mt-2">{post.summary}</p>
    </div>
  );
}
