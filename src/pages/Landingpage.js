import React from "react";
import survey from "../media/survey.jpg";
import awai from "../media/awai.jpg";
import alison from "../media/alison.avif";
import bootcamp from "../media/bootcamp.png";
import coding from "../media/coding.jpg";
import banner from "../media/banner.jpg";
import books from "../media/books.jpg";
import alisoncertificate from "../media/alison-certificate.png";
import { AiFillCheckCircle } from "react-icons/ai";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <div className="container">
        <div
          id="landingpage-banner"
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <section className="copy">
          <div className="landingpage-logo">
            <div style={{ backgroundImage: `url(${logo})` }}></div>
            <h1>Khalil's Marketing</h1>
          </div>
          <br />
          <br />
          <div>
            <h2 className="headline h1">
              knowledgeable and experienced, I'm here to help you realize
              financial freedom
            </h2>
            <br />
            <br />
            <h2 className="h3">
              <u>
                Make the most out of your budget with copywriting that brings
                results
              </u>
            </h2>
            <br />
            <br />
            <p className="h1 text-dark">
              You’re starting a new business.. And you’ve got your idea, you
              produced the product or service, but you don’t know how to get the
              sales yet. <br />
              <br />
              Aside from that, as a new business owner you simultaneously
              struggle with a lack of time, ineffective web presence, and a{" "}
              <strong>lack of funds.</strong> <br />
              <br />
              You can use a copywriter to help you launch your business and get
              revenue coming in so you can finance and grow your business.
            </p>
            <br />
            <article>
              <img src={survey} alt="survey picture" />
              <p className="h1 text-dark">
                <h3 className=" text-dark h1">
                  Experienced Marketing Professional
                </h3>
                <br />
                Everyday, I had the pleasure of{" "}
                <strong>interviewing up to a 100 people,</strong> giving them
                surveys and collecting their names and email addresses. That was
                one of a couple of jobs I worked when I moved from New York to
                Colorado in the year 2016. I was working fulltime as a
                door-to-door canvasser for a marketing company called Black
                Diamond Outreach.
                <br />
                <br /> When I started working I wanted to do my best and prove
                my merit, and indeed I was{" "}
                <strong>Awarded Best Employee</strong> in the office of over 20
                people for 3 days in a row . I finally took my foot off the
                peddle on the fourth day to let others get awarded as well and
                not demoralize my team mates. <br />
                <br />
                With this sort of marketing experience and ability to interview
                people effectively,{" "}
                <strong>
                  I can provide you with excellent testimonials, surveys and
                  leads.
                </strong>{" "}
                That way you get knowledge on your market and business so you
                improve your business and achieve better results.
              </p>
            </article>
            <br />
            <div className="quote text-light">
              “My experience with Omar in my work as a restaurant owner has been
              full of achievement. He was very helpful in my marketing efforts
              where he took professional pictures of the food and the
              restaurant. I’ve noticed that Omar helps the business owner reach
              his/her customers in an excellent way and easily.“
              <span className="text-muted">
                {" "}
                - Amal A. Maseer, New Paltz, NY
              </span>
            </div>{" "}
            <p className="h1 text-dark">
              <h3 className=" text-dark h1 ">A Great Team Player</h3> <br />I
              have had, on a regular basis, worked in team environments and
              collaborated with other team members. From when I was a salesman
              working with a team selling high-end Vacuum Cleaners in Colorado
              Springs at the age of 18 years old.. To collaborating on software
              engineering projects with fellow developers in recent times.{" "}
              <br />
              <br />
              I am social, I love to network with people, and you can be
              confident that you're working with a professional who can properly
              communicate and has good people skills. Due to this, you will find
              me to be someone you feel comfortable working with.
              <br />
              <br />
            </p>
            <img
              className="certificate"
              src={alison}
              alt="alison dot com certificate"
            />{" "}
            <img
              className="certificate"
              src={awai}
              alt="Americans writers and artists institute copywriting certificate"
            />
            <p className="h1 text-dark">
              <br />
              <h3 className=" h1 text-dark">Taught and Certified</h3> <br />
              It’s great to read the best copywriting books in the market. But
              knowing how to put this information to practice is the most
              important thing.
              <br />
              <br />
              As a copywriter I have completed over 5 courses on Copywriting and
              Marketing. And I am certified by AWAI and Alison.com for partaking
              in Copywriting courses.
              <br />
              <br />
              <a href="https://alison.com/user/pdf/4698/1" target="_blank">
                <div
                  className="certificate"
                  target="_blank"
                  id="alisoncertificate"
                  style={{ backgroundImage: `url(${alisoncertificate})` }}
                ></div>
              </a>
              <br />
              <br />
              The most notable courses that I’ve completed are:
              <br />
              <br />
              <ul>
                <li>
                  <strong>AWAI Copywriting Method</strong>
                </li>
                <li>
                  <strong>Basic Concepts and Techniques For Copywriting</strong>{" "}
                  by Marcia Yudkin
                </li>
                <li>
                  <strong>Conversion Copywriting 101</strong> by Copyhackers
                </li>
                <li>
                  <strong>Advanced Copywriting Skills and Techniques</strong> by
                  Marcia Yudkin
                </li>
                <li>
                  <strong>Kopywriting Korse</strong> by Neville Medhora
                </li>
              </ul>
            </p>
            <br />
            <article>
              <p className="h1 text-dark">
                <h3 className=" text-dark h1">Well-Read On Copywriting</h3>{" "}
                <br />
                Most copywriters fail because they lack dedication, knowledge
                and passion. In the past 4 years{" "}
                <u>
                  <strong>I’ve read</strong> about <strong>49 books.</strong>
                </u>{" "}
                About <strong>15 books on Copywriting</strong>, some others were
                about <strong>Marketing</strong> in general and others were
                mostly self-help books.
                <br />
                <br />
                <img src={books} alt="image of some books I've read" />
                <h5 className="text-muted">Some books I've read</h5>
                <br />
                <br />
                You can expect me to apply my knowledge of the following
                all-time best marketing books in writing your copy:
                <br />
                <br />
                <ul>
                  <li>
                    <strong>Influence</strong> by Robert Cialdini
                  </li>
                  <li>
                    <strong>Tested Advertising Methods</strong> by John Caples
                  </li>
                  <li>
                    <strong>The Adweek Copywrting Handbook </strong>by Joseph
                    Sugarman
                  </li>
                  <li>
                    <strong>The Ultimate Sales Letter</strong> by Dan Kennedy
                  </li>
                  <li>
                    <strong>Scientific Advertising by</strong> Claude Hopkins
                  </li>
                  <li>
                    <strong>Cashvertising</strong> by Drew Whitman
                  </li>
                  <li>
                    <strong>Save The Cat</strong> by Blake Snyder
                  </li>
                  <li>
                    <strong>Breakthrough Advertising</strong> by Eugene Schwartz
                  </li>
                  <li>
                    <strong>and more.</strong>
                  </li>
                </ul>
              </p>
            </article>
            <article>
              <img src={coding} alt="Coding bootcamp image" />
              <p className="h1 text-dark">
                <br />
                <br />
                <h3 className=" text-dark h1 ">
                  Tech Savvy Software Developer
                </h3>
                <br />I understand technology. I’ve been software engineering
                since 14 years old. And,In the year 2022, I’ve completed General
                Assembly’s <u>Software Engineering Bootcamp.</u> I have a{" "}
                <a href="https://omarkhalil.netlify.app/" target="_blank">
                  portfolio website
                </a>{" "}
                for web applications I’ve developed. I consistently learn,
                practice and improve my software development skills.
                <br />
                <br />
                <img src={bootcamp} alt="Coding bootcamp image" />
                <br />
                <br />
                Being a Full Stack Software Engineer, I can develop for the
                Client-Side and Server-Side of a website. I orient my
                development learning around entrepreneurship. Having excellent
                engineering skills helps you build a smarter marketing campaign
                resulting in better results for your business.
              </p>
            </article>
            <br />
            <p className="h1 text-dark">
              <h3 className=" text-dark h1 ">Entrepreneurial Awareness</h3>{" "}
              <br />
              I mentioned that I’m also an entrepreneur. But ever since I found
              my calling, I’ve been very ambitious, optimistic, positive and
              driven in the years since deciding to be my own boss. I have 100s
              of business ideas. I’ve written copy for many businesses of mine
              and I can write copy for just about any business idea.
              <br />
              <br /> Robert Kiyosaki suggested in ‘Rich Dad, Poor Dad,’ that
              working for experience leads to more monetary success than working
              for money. So when I can make a positive impact on the success of
              your business, I gain valuable experience. Thus, whatever your
              business is about, I will go aboce and beyond to provide you with
              as much money as possible.
            </p>{" "}
            <br />
            <br />
            <p className="h1 text-dark">
              <h3 className="h1 subhead">Bilingual and Articulate</h3>
              <br />
              I read, write and speak English fluently. Not only English but
              also the Arabic language. It might be assumed that non-native
              English speakers are at a disadvantage. Yet, research shows that
              being bilingual comes with a bunch of unique strengths. <br />
              <br />
              bilingual individuals have been found to outperform monolinguals
              in problem solving and perceptual focusing. With more tools for
              self-expression and some unique capabilities, I can write
              immaculate copy that grabs more attention, inspires more interest,
              builds more desire and gets more prospects to take action.
            </p>
            <br />
          </div>
          <br />
          <div id="offer">
            <h3 className="subhead h1 text-success  ">
              I can work with any kind of budget
            </h3>
            <br />
            <p className="h1 text-dark">
              Startup business-owners will be taking advantage of my low-cost
              services..
              <br />
              <br /> ..So if you want converting copy, enter your name and email
              address to set up an appointment with me as soon as possible.
              <br />
              <br />
              I can work with all kinds of budgets. The most important thing is
              that you have an interesting product or service. If not we can fix
              that too!
              <br />
              <br />
              After submitting your name and email address, I will immediately
              reach back to you with a Questionnaire that helps me understand
              what your business is about. That way I can talk to you about what
              we can do in the short and longterm to maximize success. <br />
              <br />
              Then we can set up an appointment and I will personally get back
              to you in order to figure it out either with a phone call, video
              call, or any other communication method you prefer.
            </p>
            <br />

            <div>
              <h6 className=" text-dark h5 p-5">
                <strong>
                  What YOU Need To Do To Start Converting Prospects ASAP{" "}
                </strong>{" "}
                <br />
                <br />
                Take Your First Step by answering a few questions about your
                business idea.
                <br />
                <br /> Then we can start to build a mutually beneficial business
                relationship. <br />
                <br />
                Fill Out This Form and Click on the Submit Button, Now.
              </h6>
              <h3 className="h2 text-dark">Pricing</h3>
              <p className="h4 text-dark mb-5">
                The price of my copywriting services depends on the amount of
                words to be written. prices range from $50 up to $500.
              </p>
              <div id="specialoffer">
                <h5 className="subhead h4 text-dark">
                  If you sign up before <u>June, 1st 2023</u>
                  <br />
                  You can schedule a{" "}
                  <strong>
                    FREE consultaton with me
                    <br />
                  </strong>{" "}
                  discussing a plan of action.
                  <br />
                  usually costs <s className="text-danger">$19.99</s> but if you
                  act now you pay <u className="text-success">$0.</u> <br />
                  and no credit card required.
                </h5>
              </div>
            </div>
            <form>
              <h5 className="subhead h5 text-warning">
                Act Fast And Reserve an Appointment <br />
                before My schedule is fully booked
              </h5>
              <input type="text" placeholder="Your Full Name" />
              <input type="text" placeholder="Your Email Address" />
              <button type="submit" className="button-2">
                Send Questionnaire
              </button>
              <h8 className=" h6 text-warning">Your privacy is protected.</h8>
            </form>
            <br />
            <br />
          </div>
          <div className="benefits">
            <h3 className="text-dark">What do you get when working with me?</h3>
            <ul>
              <li>
                <AiFillCheckCircle color="yellowgreen" className="checkmark" />
                <strong>Certifications.</strong> Having multiple certificates
                guarantees you reliable copy
              </li>
              <li>
                <AiFillCheckCircle color="yellowgreen" className="checkmark" />
                <strong>Surveys.</strong> Experienced in Public Opinion
                Gathering I provide valueable market insights helping you
                navigate your industry with sharpness.
              </li>
              <li>
                <AiFillCheckCircle color="yellowgreen" className="checkmark" />
                <strong>Expertise.</strong> With thorough knowledge about
                marketing you get a never-ending stream of ideas to improve
                business.
              </li>
              <li>
                <AiFillCheckCircle color="yellowgreen" className="checkmark" />
                <strong>Modern Marketing.</strong> My knowledge and expertise in
                Software Development gives you an edge in modern maketing
              </li>
              <li>
                <AiFillCheckCircle color="yellowgreen" className="checkmark" />
                <strong>Highly Motivated.</strong> A Copywriter who's driven by
                the desire to improve by providing tangible results for you
              </li>
              <li>
                <AiFillCheckCircle color="yellowgreen" className="checkmark" />
                <strong>Negotiable Pricing.</strong> In the beginning of
                business every dollar counts. That's why you get to work with
                someone who understands your needs.{" "}
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;
