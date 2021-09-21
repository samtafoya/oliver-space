import React, { Component } from 'react';
import '/Users/sammitafoya/oliver-take-home/src/Styles/AddReview.css';

class AddReview extends Component {

    // Initialize state
    state = {
        author: "",
        stars: 0,
        title: "",
        body: "",
        product: ""
    }

    componentDidMount() {

    }

    handleSubmit = async e => {
        console.log("Inside Blog.handleSubmit")
        e.preventDefault();

        var submitUrl = "http://localhost:3004/reviews";

        var data = {
            author: this.state.author,
            star_rating: this.state.stars,
            headline: this.state.title,
            body: this.state.body,
            productId: this.state.product
        };

        const response = await fetch(submitUrl, {
            method: 'POST',

            // need these headers for post
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data),
        });

        this.setState({
            title: ""
        });
        this.setState({
            author: ""
        });
        this.setState({
            stars: ""
        });
        this.setState({
            body: ""
        });
        this.setState({
            product: ""
        });

    };

    // handlers to set the state of each element
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeAuthor = (e) => {
        this.setState({
            author: e.target.value
        });
    }

    handleChangeBody = (e) => {
        this.setState({
            body: e.target.value
        });
    }

    handleChangeStars = (e) => {
        this.setState({
            stars: e.target.value
        });
    }

    handleChangeProduct = (e) => {
        this.setState({
            product: e.target.value
        });
    }


    render() {

        return (
            <div>
                <div class="form-style-2">
                    <div class="form-style-2-heading">Please Write A Review</div>
                    <form action="" method="post">
                        <label for="field1"><span>Author <span class="required">*</span></span><input type="text" class="input-field" name="field1" value={this.state.author} onChange={this.handleChangeAuthor} /></label>
                        <label for="field2"><span>Title <span class="required">*</span></span><input type="text" class="input-field" name="field2" value={this.state.title} onChange={this.handleChangeTitle} /></label>
                        <label for="field2"><span>Number of Stars <span class="required">*</span></span><input type="number" class="input-field" name="field2" value={this.state.stars} onChange={this.handleChangeStars} /></label>
                        <label for="field4"><span>Regarding</span><select name="field4" class="select-field" value={this.state.product} onChange={this.handleChangeProduct}>
                            <option value=""></option>
                            <option value="Velvet Sofa">Velvet Sofa</option>
                            <option value="Fancy Armchair">Fancy Armchair</option>
                            <option value="Plain Bed">Plain Bed</option>
                            <option value="Huge Rug">Huge Rug</option>
                        </select></label>
                        <label for="field5"><span>Review <span class="required">*</span></span><textarea name="field5" class="textarea-field" value={this.state.body} onChange={this.handleChangeBody}></textarea></label>

                        <label><span> </span><input type="submit" value="Submit" onClick={this.handleSubmit} /></label>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddReview;