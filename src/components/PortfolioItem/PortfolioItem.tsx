import classes from './PortfolioItem.module.css'

type PortfolioItemProps = {
    id: number
    image: string
    tag: string
    title: string
}

const PortfolioItem = ({image, tag, title}:PortfolioItemProps) => {
  return (
    <div className={classes.portfolio_item} style={{background: `url(${image}) no-repeat`}}>
        <p className={classes.portfolio_item_tag}>{tag}</p>
        <h3 className={classes.portfolio_item_title}>{title}</h3>
    </div>
  )
}

export default PortfolioItem