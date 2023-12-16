import React from "react";
import "./contact.css";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img src="/icons8-js-50.png" alt="Loading" />
        </div>
        <ul>
          <Link href="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link href="/about">
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link href="/blog">
            {" "}
            <li>Blog</li>{" "}
          </Link>
          <Link href="/contact">
            {" "}
            <li>Contact</li>{" "}
          </Link>
        </ul>
      </nav>
      <section id="home">
        <div className="heading1">
          Punjab Emergency Service (Rescue1122) Faisalabad
        </div>
        <div className="para1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          accusamus animi, voluptas commodi consequatur perferendis aliquam fuga
          vero aspernatur numquam. Distinctio ipsum deleniti modi perferendis
          incidunt maiores consectetur illo error?
        </div>
        <div className="btn">
          <button>See More</button>
        </div>
      </section>
      <section id="ourservices">Our services</section>
      <section className="cards">
        <div className="flex-container">
          <div className="services">
            <img src="/fireman-38083_640.jpg" alt="" />

            <h1>Title: Ambulace Service</h1>
            <p>
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consaaaa aaaaa aaaa aaaaaaa aaaaaa aaaaa aaaaaa aaaaa aaaaa
              aaaaa aaaaa aaeq uuntur molestias in veniam ratione corporis fugit
              officia dolorem inventore ab
            </p>
          </div>

          <div className="services">
            <img src="/rescue-service-4975223_640.jpg" alt="" />

            <h1>Title: Ambulace Service</h1>
            <p>
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequuntur molestias in veniam ratione corporis fugit
              officia dolorem inventore ab
            </p>
          </div>

          <div className="services">
            <img src="/fire-in-houston-3252193_640.jpg" alt="" />
            <h1>Title: Rescue Service</h1>
            <p>
              Description: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Fugit placeat quis minima itaque sequi similique vel,
              accusantium excepturi at non!
            </p>
          </div>
          
          <div className="services">
          <Link href={"http://facebook.com"}>
            <img src="/fire-in-houston-3252193_640.jpg" alt="" />
            <h1>Title: Rescue Service</h1>
            <p>
              Description: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Fugit placeat quis minima itaque sequi similique vel,
              accusantium excepturi at non!
            </p>
            </Link>
          </div>
          
          
          <div className="services">
          <Link href={"http://google.com"}>
            <img src="/fire-in-houston-3252193_640.jpg" alt="" />
            <h1>Title: Rescue Service</h1>
            <p>
              Description: Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Fugit placeat quis minima itaque sequi similique vel,
              accusantium excepturi at non!
            </p>
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Contact;
