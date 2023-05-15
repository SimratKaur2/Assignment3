// pages/posts.js
import PostsPage from "../components/PostsPage";
import Image from "next/image";

export default function Posts() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "12px 0",
        }}
      >
        <Image
          src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-black-gel-icing-musings-marvelous-15.png"
          alt="Pokeball"
          height={100}
          width={140}
        />
        <h1>Pokéball Gallery</h1>
      </div>
      <PostsPage />
    </div>
  );
}
