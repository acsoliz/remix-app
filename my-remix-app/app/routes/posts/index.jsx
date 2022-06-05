import { Link, Outlet, useLoaderData } from "@remix-run/react";

export const loader = () => {
  //esto es la respuesta de la db
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Loren ipsun dolor sit amet, consectuter...",
      },
      {
        id: 2,
        title: "Post 2",
        content: "Loren ipsun dolor sit amet, consectuter...",
      },
      {
        id: 3,
        title: "Post 3",
        content: "Loren ipsun dolor sit amet, consectuter...",
      },
    ],
  };
  return data;
};

export default function Index() {
  const { posts } = useLoaderData();
  return (
    <div>
      <h2>Lista de POSTSS</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about">Ir a About</Link>
          </li>
          <li>
            <Link to="/posts/create">Crear un post</Link>
          </li>
        </ul>
      </nav>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}

      <aside>
        <Outlet />
      </aside>
    </div>
  );
}
