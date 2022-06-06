import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { db } from "../../services/db.js";

export const loader = async () => {
  const posts = await db.post.findMany();

  return {
    posts,
  };
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
        <aside>
          <Outlet />
        </aside>
      </nav>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
