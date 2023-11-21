import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    // console.log(props.news)
    const { _id, title, details, image_url, author } = news;

    return (
        <div className='mt-5'>
            <Card className=" mb-5">
                <Card.Header>
                    <Image src={author.img} roundedCircle />
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</>
                            : <>{details.split(' ').slice(0, 50).join(' ')}...<Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;