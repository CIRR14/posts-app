import styles from "./PostForm.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const PostForm = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <form>
      <textarea className={styles.formContent}></textarea>
      <PrimaryButton onClick={onClick} label="Add New Post" />
    </form>
  );
};

export default PostForm;
