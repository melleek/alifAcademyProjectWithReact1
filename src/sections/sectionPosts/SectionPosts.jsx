import { posts } from "../../api/api";
import { HeaderDescription } from "../../ui/headerDescription/HeaderDescription";
import { HeaderTitle } from "../../ui/headerTitle/HeaderTitle";
import { InBanner } from "../../ui/inBanner/InBanner";
import { PostCards } from "./components/PostCards";

export const SectionPosts = () => {
  return (
    <main className="sectionPosts">
      <div className="headerContainer">
        <InBanner title="Blog" />
        <div className="headerforText">
          <div>
            <HeaderTitle title="Latest posts" />
            <HeaderDescription description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis ornare dui in ornare." />
          </div>
          <button className="viewAllButtom">View all</button>
        </div>
      </div>

      <section className="postsContainer">
        {posts.map((elem) => {
          return <PostCards {...elem} key={elem.id} />;
        })}
      </section>
    </main>
  );
};
