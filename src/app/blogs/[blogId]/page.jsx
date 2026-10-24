import React from 'react';

const blogs = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        slug: "getting-started-with-nextjs",
        description: "Learn how to build modern web applications using Next.js.",
        author: "Rakib Hasan",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        publishedAt: "2026-10-20",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "Mastering JavaScript Basics",
        slug: "mastering-javascript-basics",
        description: "Explore essential JavaScript concepts for beginners.",
        author: "John Doe",
        category: "JavaScript",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        publishedAt: "2026-10-18",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "A Guide to Responsive Web Design",
        slug: "responsive-web-design-guide",
        description: "Create beautiful websites that work on every screen size.",
        author: "Jane Smith",
        category: "CSS",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
        publishedAt: "2026-10-15",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "Understanding React Hooks",
        slug: "understanding-react-hooks",
        description: "Discover how useState and useEffect make React development easier.",
        author: "Alex Martin",
        category: "React",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        publishedAt: "2026-10-12",
        readTime: "8 min read",
    },
];


const BlogDetailPage = async ({ params }) => {

    const { blogId } = await params;

    const blog = blogs.find(blog => blog.id === parseInt(blogId))

    console.log('show me params', blog)

    return (
        <div>
            <h4 className='text-3xl'>Blog detail coming soon</h4>

            {
                blog && <div>
                    <h2 className='text-4xl font-bold mb-2'>{blog.title}</h2>
                    <p>{blog.description}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;