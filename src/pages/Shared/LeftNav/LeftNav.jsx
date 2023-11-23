import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftNewsCard from '../../Home/LeftNewsCard/LeftNewsCard';

const LeftNav = () => {
    // loader/useLoader use করা যায় যদি Route change হয়।
    // যেহেতু LeftNav এ কোনো রাউট নেই তাই useState, useEffect use করতে হবে।

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, []) //যদি একবার লোড করা হয় তাহলে dependency empty array হবে।
    return (
        <div>
            <h2>All Category</h2>
            <div className='ms-4 my-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftNewsCard></LeftNewsCard>
        </div>
    );
};

export default LeftNav;