import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6'
import EditorsInsights from '../EditorsInsights/EditorsInsights';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    useTitle('News Details')

    const { image_url, title, details, category_id } = news;

    return (
        <div>
            <Card className='mb-5'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`http://localhost:5173/category/${category_id}`} ><Button variant='danger'> <FaArrowLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            {/* নিউজ Details এর নিচের card */}
            <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;