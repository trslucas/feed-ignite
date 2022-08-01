import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

//post
//author: {avatar_url: "", name: "", role: ""}
//publishedAt: date
//post content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/trslucas.png",
      name: "Lucas Trindade",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 galeraa 👋",
      },

      { type: "link", content: "jane.design/doctorcare" },

      // <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
      // <a href="">#rocketseat</a>
    ],

    publishedAt: new Date('2022-06-23 10:29:57')
  },


  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator at @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 galeraa 👋",
      },

      { type: "link", content: "jane.design/doctorcare" },

      // <a href=""></a> <a href="">#nlw</a>{" "}
      // <a href="">#rocketseat</a>
    ],

    publishedAt: new Date('2022-06-18 01:15:57')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=> {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
