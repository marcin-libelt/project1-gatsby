import React from 'react';

const ContactForm = () => {

    return (
        <form>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="firstname">First name</label>
                    <input type="text" id="firstname" name="firstname"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" id="lastname" name="lastname"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="email">Email *</label>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="website">Website *</label>
                    <input type="text" id="website" name="website"/>
                </div>
            </div>

        </form>
    )
}

export default ContactForm;