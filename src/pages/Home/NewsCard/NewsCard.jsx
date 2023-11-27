import moment from 'moment/moment';
import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareNodes, FaStar } from 'react-icons/fa6'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const NewsCard = ({ news }) => {
    // console.log(props.news)
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
        <div className='mt-5'>
            <Card className=" mb-5">
                <Card.Header className='d-flex align-items-center'>

                    <Image style={{ width: '45px', height: '45px' }} src={author?.img} roundedCircle />
                    <div className='ms-3 flex-grow-1'>
                        <p className='mb-0 fw-bold'>{author?.name}</p>
                        <p className='mb-0'>{moment(author?.published_date).format('MMMM-D-YY')}</p>
                    </div>

                    <div>
                        <FaRegBookmark /> <FaShareNodes />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</>
                            : <>{details.split(' ').slice(0, 50).join(' ')}...<Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1 d-flex'>
                        {/* Rating দেওয়ার জন্য rating placeholder use করা হয়েছে। */}

                        <Rating
                            style={{ maxWidth: 100, width: '100%' }}
                            value={rating?.number}
                            readOnly
                        />


                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-1' /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;