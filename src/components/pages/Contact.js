import React from 'react';

function Contact() {
    return (
        <>
            <form action="/action_page.php" style={contForm}>
                <label style={labStyle}>First Name</label>
                <input style={inputField} type="text" id="fname" name="firstname" placeholder="First Name" />
                <label style={labStyle}>Last Name</label>
                <input style={inputField} type="text" id="lname" name="lastname" placeholder="Last Name" />


                <label style={labStyle}>Email</label>
                <input style={inputField} type="email" id="email" name="email" placeholder="Email" />


                <label style={labStyle}>Message</label>
                <textarea style={textArea} id="subject" name="subject" placeholder="Message"></textarea>
                <input style={inputField} type="submit" value="Submit" />
            </form>
        </>
    )
}

const labStyle = {
    fontSize: '20px'
}

const textArea = {
    height: '5rem',
    width: '15rem',
    textAlign: 'center'
}

const inputField = {
    padding: '5px',
    textAlign: 'center'
}

const contForm = {
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
    margin: '5rem auto',
    textAlign: 'center'
}

export default Contact;