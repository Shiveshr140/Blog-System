import Blogs from "../features/Blogs/Blogs";
import Header from "../ui/Header";

function Home() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px" }}>
        <Blogs />
      </div>
    </div>
  );
}

export default Home;
