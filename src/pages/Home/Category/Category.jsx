//যদি আমরা Specific কোনো Category তে Click করে তাহল ঐ্টার data এই পেজের মধ্যে দেখাবে।

import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams(); //route এর dynamic id টা পাওয়ার জন্য।
    const categoryNews = useLoaderData()
    // console.log(categoryNews)
    return (
        <div>
            {id && <h2>This Category News : {categoryNews.length}</h2>}
            <div>
                {categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)}
            </div>
        </div>
    );
};

export default Category;