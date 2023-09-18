import { Facebook, Twitter } from "lucide-react";

export default function ShareLink({ title, slug }) {
  return (
    <div className="flex items-center mt-2 space-x-6">
      <a
        href={`https://www.facebook.com/sharer.php?u=${route(
          "book.show",
          slug
        )}`}
        className="flex items-center space-x-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
        <p className="font-medium">Facebook</p>
      </a>
      <a
        href={`https://twitter.com/share?text=${encodeURIComponent(
          title
        )}&url=${route("book.show", slug)}`}
        className="flex items-center space-x-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
        <p className="font-medium">Twitter</p>
      </a>
    </div>
  );
}
