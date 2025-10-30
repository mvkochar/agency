import classes from './BlogItem.module.css'

type BlogItemProps = {
    id: number
    image: string
    category: string
    title: string
    date: string
}

const BlogItem = ({id, image, category, title, date}: BlogItemProps) => {
  return (
    <div className={classes.blog_item}>
        <div><img src={image} alt={`blog${id}`} /></div>
        <p className={classes.blog_item_cat}>{category}</p>
        <h4 className={classes.blog_item_title}>{title}</h4>
        <p className={classes.blog_item_date}>{date}</p>
    </div>
  )
}

export default BlogItem