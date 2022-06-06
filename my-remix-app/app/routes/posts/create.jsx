import { Form, useTransition, useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { db } from "../../services/db.js";

const badRequest = (data) => {
  return json(data, { status: 400 });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fieldErrors = {
    title: title.length < 3 ? "Title must be at least 3 characters" : null,
    body: body.length < 10 ? "Body must be at least 3 characters" : null,
  };

  const hasErrors = Object.values(fieldErrors).some(Boolean);
  const fields = { body, title };

  if (hasErrors) {
    return badRequest({ fieldErrors, fields });
  }

  const post = await db.post.create({ data: fields });

  return redirect(`/posts/${post.id}`);
};

export function ErrorBoundary() {
  return (
    <div>
      <strong>:( Algo salio mal </strong>
    </div>
  );
}

export default function CreatePost() {
  const { state } = useTransition();
  const actionData = useActionData();

  const { fieldErrors } = actionData ?? {};
  const { title: titleError, body: bodyError } = fieldErrors ?? {};

  const isSubmitting = state === "submitting";
  return (
    <>
      <h2>Create new Post</h2>
      <Form method="POST" disabled={isSubmitting}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            placeholder="Title of Post"
            type="text"
            id="title"
            name="title"
          />
          {titleError && (
            <p>
              <small style={{ color: "red" }}>{titleError}</small>
            </p>
          )}
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <br />
          <textarea
            placeholder="Content of Post"
            type="text"
            id="body"
            name="body"
          />
          {bodyError && (
            <p>
              <small style={{ color: "red" }}>{bodyError}</small>
            </p>
          )}
        </div>
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Wait for it..." : "Create Post"}
        </button>
      </Form>
    </>
  );
}
