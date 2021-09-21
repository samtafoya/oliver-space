import React, { Component } from 'react';
import '/Users/sammitafoya/oliver-take-home/src/Styles/Reviews.css';

class AllReviews extends Component {

    // Initialize state
    state = {
        reviews: []
    }

    componentDidMount() {
        let url = "http://localhost:3004/reviews";
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                let reviews = data.map((reviews, index) => {
                    // ideally I would get the product using the actual product id but I ran out of time
                    return (
                        <div key={index} >
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="ml-2">
                                            <div class="h5 m-0">{reviews.headline}</div>
                                            <div class="h7 text-muted">{reviews.author}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{reviews.body}</p>
                            </div>
                            <div class="card-footer">
                                <div class="h7 text-muted">{reviews.star_rating} / 5 Stars</div>
                                <div class="h7 text-muted">Product Reviewed: {reviews.productId}</div>
                            </div>
                            <br />
                            <br />
                        </div>
                    )
                    /*
                    return (
                        <div key={index}>
                            <h3>{reviews.headline}</h3>
                            <h3>{star} / 5 stars</h3>
                            <p>Written by: {reviews.author}</p>
                            <p>{reviews.body}</p>
                        </div>
                    )
                    */
                })
                this.setState({ reviews: reviews });
            })

    }



    render() {

        return (
            <div>
                <h1>Product Reviews</h1>
                {this.state.reviews}
            </div>
        );
    }
}

export default AllReviews;