import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <>
  <h2>Responsive Form</h2>
  <p>
    Resize the browser window to see the effect. When the screen is less than
    600px wide, make the two columns stack on top of each other instead of next
    to each other.
  </p>
  <div className="container">
    <form action="/action_page.php">
      <div className="row">
        <div className="col-25">
          <label htmlFor="fname">First Name</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="lname">EMail</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your Email.."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="country">Country</label>
        </div>
        <div className="col-75">
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="col-75">
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: 200 }}
            defaultValue={""}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <input type="submit" defaultValue="Submit" />
      </div>
    </form>
  </div>
</>

  )
}

export default Form