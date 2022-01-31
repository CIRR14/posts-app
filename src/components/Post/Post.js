import styles from "./Post.module.scss";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Post = ({ content, date, likes }) => {
  return (
    <>
      <p className={styles.postsContent}> {content}</p>
      <ul className={styles.postsMeta}>
        <li className={styles.postsMetaData}>
          <FaHeart />
          {likes}
        </li>
        <li className={styles.postsMetaData}>
          <FaShareAlt />
          Share
        </li>
        <li className={styles.postsMetaData}>{date}</li>
      </ul>
    </>
  );
};

export default Post;
