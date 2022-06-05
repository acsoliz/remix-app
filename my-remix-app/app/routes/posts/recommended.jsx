import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  //esto es la respuesta de la db
  const data = {
    posts: [
      {
        id: 3,
        title: "Post 4",
        content: "Loren ipsun dolor sit amet, consectuter...",
      },
    ],
  };
  return data;
};

export default function Recommended() {
  const { posts } = useLoaderData();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h4>{post.title}</h4>
          <small>{post.content}</small>
        </li>
      ))}
    </ul>
  );
}
