var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-6N6LFXXT.css";

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => [
  {
    rel: "stylesheet",
    href: global_default
  },
  {
    rel: "stylesheet",
    href: "https://cdn.simplecss.org/simple.min.css"
  }
];
function Layout() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h4", null, "Soy un header! "))), /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("small", null, "\xA9 derechos reservados")));
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "La pagina About"));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");
var loader = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Loren ipsun dolor sit amet, consectuter..."
      },
      {
        id: 2,
        title: "Post 2",
        content: "Loren ipsun dolor sit amet, consectuter..."
      },
      {
        id: 3,
        title: "Post 3",
        content: "Loren ipsun dolor sit amet, consectuter..."
      }
    ]
  };
  return data;
};
function Index() {
  const { posts } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome Yeahh!"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/about"
  }, "Ir a About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react3.Link, {
    to: "/posts/create"
  }, "Crear un post")))), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("h2", null, post.title), /* @__PURE__ */ React.createElement("p", null, post.content))));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Index2,
  loader: () => loader2
});
var import_react4 = require("@remix-run/react");
var loader2 = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Loren ipsun dolor sit amet, consectuter..."
      },
      {
        id: 2,
        title: "Post 2",
        content: "Loren ipsun dolor sit amet, consectuter..."
      },
      {
        id: 3,
        title: "Post 3",
        content: "Loren ipsun dolor sit amet, consectuter..."
      }
    ]
  };
  return data;
};
function Index2() {
  const { posts } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Lista de POSTSS"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/about"
  }, "Ir a About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/posts/create"
  }, "Crear un post"))), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement(import_react4.Outlet, null))), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("h2", null, post.title), /* @__PURE__ */ React.createElement("p", null, post.content))));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\posts\recommended.jsx
var recommended_exports = {};
__export(recommended_exports, {
  default: () => Recommended,
  loader: () => loader3
});
var import_react5 = require("@remix-run/react");
var loader3 = () => {
  const data = {
    posts: [
      {
        id: 3,
        title: "Post 4",
        content: "Loren ipsun dolor sit amet, consectuter..."
      }
    ]
  };
  return data;
};
function Recommended() {
  const { posts } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("h4", null, post.title), /* @__PURE__ */ React.createElement("small", null, post.content))));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\posts\$postId.jsx
var postId_exports = {};
__export(postId_exports, {
  default: () => SinglePost
});
var import_react6 = require("@remix-run/react");
function SinglePost() {
  const params = (0, import_react6.useParams)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, " Post Title of ", params.postId), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsun sit amet, consectas afdsfd sa"));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\posts\section.jsx
var section_exports = {};
__export(section_exports, {
  default: () => Section
});
var import_react7 = require("@remix-run/react");
function Section() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Section"), /* @__PURE__ */ React.createElement(import_react7.Outlet, null));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\posts\create.jsx
var create_exports = {};
__export(create_exports, {
  default: () => CreatePost
});
function CreatePost() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Create new Post"), /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "title"
  }, "Title"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "title",
    name: "title"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "content"
  }, "Content"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    type: "text",
    id: "content",
    name: "content"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add new Post ")));
}

// route:C:\Users\Alan\Documents\GitHub\remix-app\my-remix-app\app\routes\posts\index.jsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => Index3,
  loader: () => loader4
});
var import_react8 = require("@remix-run/react");
var loader4 = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Loren ipsun dolor sit amet, consectuter..."
      },
      {
        id: 2,
        title: "Post 2",
        content: "Loren ipsun dolor sit amet, consectuter..."
      },
      {
        id: 3,
        title: "Post 3",
        content: "Loren ipsun dolor sit amet, consectuter..."
      }
    ]
  };
  return data;
};
function Index3() {
  const { posts } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Lista de POSTSS"), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/about"
  }, "Ir a About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/posts/create"
  }, "Crear un post")))), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    key: post.id
  }, /* @__PURE__ */ React.createElement("h2", null, post.title), /* @__PURE__ */ React.createElement("p", null, post.content))), /* @__PURE__ */ React.createElement("aside", null, /* @__PURE__ */ React.createElement(import_react8.Outlet, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "042cb293", "entry": { "module": "/build/entry.client-BLISOE5M.js", "imports": ["/build/_shared/chunk-KLQPBTXC.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-USCXTPCA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-SNTUU526.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UL36BHCB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-R3HVIBBC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$postId": { "id": "routes/posts/$postId", "parentId": "routes/posts", "path": ":postId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$postId-XXNLDX56.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/create": { "id": "routes/posts/create", "parentId": "routes/posts", "path": "create", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/create-LHNEDP3R.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-HP57RPB7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/recommended": { "id": "routes/posts/recommended", "parentId": "routes/posts", "path": "recommended", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/recommended-XDJCN6OH.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/section": { "id": "routes/posts/section", "parentId": "routes/posts", "path": "section", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/section-DT4EO3SJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-042CB293.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/recommended": {
    id: "routes/posts/recommended",
    parentId: "routes/posts",
    path: "recommended",
    index: void 0,
    caseSensitive: void 0,
    module: recommended_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/section": {
    id: "routes/posts/section",
    parentId: "routes/posts",
    path: "section",
    index: void 0,
    caseSensitive: void 0,
    module: section_exports
  },
  "routes/posts/create": {
    id: "routes/posts/create",
    parentId: "routes/posts",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: create_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: posts_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
