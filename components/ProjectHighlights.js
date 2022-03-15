import { Swirl, InvSwirl } from "./Swirl"
import PostOverview from "./PostOverview"
import styles from "../styles/project_highlights.module.scss"

const ProjectHighlights = ({posts}) => {
  return (
    <>
          <Swirl/>
      <div id="projects" className={styles.alt_bg}>
        <h2 className={styles.title + ' center_h2'}>Project Highlights</h2>
        <p></p>
        <PostOverview posts={posts} numberOfBlogs={3}/>
      </div>
      <InvSwirl/>
    </>
  )
}

export default ProjectHighlights