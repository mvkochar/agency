type TPost = {
    id: number
    image: string
    category: string
    title: string
    date: string
}

const PostsList: TPost[] = [
    {
        id: 1,
        image: "/images/blog/1.png",
        category: "Stories",
        title: "Agency is a business you hire to outsource",
        date: "5 Nov, 2021"
    },

    {
        id: 2,
        image: "/images/blog/2.png",
        category: "Design",
        title: "Outsource your digital marketing efforts",
        date: "29 Oct, 2021"
    },

    {
        id: 3,
        image: "/images/blog/3.png",
        category: "Marketing",
        title: "Your business with a variety of digital",
        date: "21 Oct, 2021"
    },

    {
        id: 4,
        image: "/images/blog/4.png",
        category: "Design",
        title: "Analytics to track and report on results",
        date: "17 Nov, 2021"
    },

    {
        id: 5,
        image: "/images/blog/5.png",
        category: "Branding",
        title: "The most well known performance",
        date: "12 Oct, 2021"
    },

    {
        id: 6,
        image: "/images/blog/6.png",
        category: "Stories",
        title: "Marketing channels native advertising",
        date: "9 Oct, 2021"
    }
]

export default PostsList