import React from 'react';
import './articlebody.css';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from 'reactstrap';
import close from './close.svg';

const ArticleBody = () => {
  return (
    <div className='main-card-text'>
      <Card className='article-body'>
        <Card className='close-button'>
          <svg
            width='42'
            height='42'
            viewBox='0 0 42 42'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M21.0027 27.9031L34.5966 41.0018C35.9603 42.3259 36.8475 42.3395 38.2362 41.0018L40.9636 38.3731C42.2998 37.086 42.3904 36.2411 40.9636 34.8662L26.5717 21.0005L40.965 7.13481C42.3129 5.83162 42.3392 4.95212 40.965 3.62669L38.2375 0.999305C36.8226 -0.364415 35.9485 -0.301417 34.5979 0.999305L21.0027 14.0979L7.40878 1.00054C6.05818 -0.300182 5.18404 -0.363179 3.76913 1.00054L1.04169 3.62792C-0.333844 4.95335 -0.308906 5.83285 1.04169 7.13604L15.4336 21.0005L1.04169 34.8662C-0.385032 36.2411 -0.308906 37.086 1.04169 38.3731L3.76782 41.0018C5.14466 42.3395 6.03193 42.3259 7.40747 41.0018L21.0027 27.9031Z'
              fill='#5086EC'
            />
          </svg>
        </Card>
        <CardImg
          className='article-img'
          width='1282px'
          height='319px'
          src='https://www.sciencenewsforstudents.org/wp-content/uploads/2020/04/1030_LL_trees-1028x579.png'
          alt='Article Image'
        />
        <CardBody>
          <CardTitle className='article-title' tag='h5'>
            Woodland scheme which offers rent to farmers closes 1 June
          </CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            <Container>
              <Row className='subtitle-row'>
                <Col className='article-published' xs='3'>
                  7 mins ago
                </Col>
                <Col xs='3' />
                <Col xs='3' />
                <Col className='article-readtime' xs='3'>
                  2 min read
                </Col>
              </Row>
            </Container>
          </CardSubtitle>
          <CardText className='Article'>
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build on the card title and make up the bulk of the cards
            Some quick example text to build.
          </CardText>
        </CardBody>
      </Card>
      <Container className='end-block' />
    </div>
  );
};

export default ArticleBody;
