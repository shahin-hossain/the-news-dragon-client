//যদি আমরা Specific কোনো Category তে Click করে তাহল ঐ্টার data এই পেজের মধ্যে দেখাবে।

import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { id } = useParams(); //route এর dynamic id টা পাওয়ার জন্য।
    return (
        <div>
            <h2>This is Category :{id}</h2>
        </div>
    );
};

export default Category;