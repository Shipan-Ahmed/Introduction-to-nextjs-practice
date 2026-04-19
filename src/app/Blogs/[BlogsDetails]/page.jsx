import React from 'react';

const BlogsDetails2 = async ({ params }) => {
    const res = await params;
    console.log("dynamic data id: ", res);


    const BlogsData = [
        {
            "id": 1,
            "title": "Getting Started with React for Beginners",
            "author": "Shipan Miah",
            "date": "2026-03-10",
            "category": "Frontend",
            "description": "A beginner-friendly guide to understanding React fundamentals, components, and how to build your first application.",
            "tags": ["React", "JavaScript", "Frontend"],
            "readTime": "5 min",
            "image": "https://i.ibb.co/6Jj5ZgF/tech.jpg"
        },
        {
            "id": 2,
            "title": "Understanding REST API and How It Works",
            "author": "Shipan Miah",
            "date": "2026-03-15",
            "category": "Backend",
            "description": "Learn how REST APIs work, HTTP methods, and how frontend and backend communicate in real-world applications.",
            "tags": ["API", "Backend", "HTTP"],
            "readTime": "6 min",
            "image": "https://i.ibb.co/Yy7K8wK/api.jpg"
        },
        {
            "id": 3,
            "title": "Top 5 Tips to Improve Your Coding Skills",
            "author": "Shipan Miah",
            "date": "2026-03-18",
            "category": "Programming",
            "description": "Practical tips and strategies to improve problem-solving skills, write cleaner code, and become a better developer.",
            "tags": ["Coding", "Tips", "DSA"],
            "readTime": "4 min",
            "image": "https://i.ibb.co/fG3f7Zy/coding.jpg"
        },
        {
            "id": 4,
            "title": "Introduction to MongoDB for Beginners",
            "author": "Shipan Miah",
            "date": "2026-03-20",
            "category": "Database",
            "description": "A simple introduction to MongoDB, NoSQL concepts, and how to store and manage data effectively.",
            "tags": ["MongoDB", "Database", "NoSQL"],
            "readTime": "5 min",
            "image": "https://i.ibb.co/0Jmshvb/mongodb.jpg"
        }
    ];

    const findData = BlogsData.find(item => item.id === parseInt(res.BlogsDetails) );
    console.log("find data: ", findData);
    return (
        <div className='max-w-11/12 mx-auto my-10 p-10'>
            <h1> {findData.author} </h1>
            <p> {findData.title} </p>
        </div>
    );
};

export default BlogsDetails2;