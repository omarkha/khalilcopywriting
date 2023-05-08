import React from "react";
import survey from "../media/survey.jpg";
import awai from "../media/awai.jpg";
import alison from "../media/alison.avif";
import bootcamp from "../media/bootcamp.png";
import coding from "../media/coding.jpg";
import banner from "../media/banner.jpg";
import books from "../media/books.jpg";
import award from "../media/award.png";
import alisoncertificate from "../media/alison-certificate.png";
import { AiFillCheckCircle } from "react-icons/ai";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import { Bounce, Fade, Flip, Zoom } from "react-reveal";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <Zoom>
        <div
          id="landingpage-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="container">
            <div className="landingpage-logo">
              <div style={{ backgroundImage: `url(${logo})` }}></div>
              <h1>Khalil's Marketing</h1>

              <h2 className="headline h1">
                This Modern Copywriter is Trained and Certified to Sell For You
                So That You Make Money While You Eat and Sleep
              </h2>
              <h3>..Scroll Down for More..</h3>
            </div>
          </div>
        </div>
      </Zoom>
      <div className="container">
        <section className="copy">
          <br />
          <br />
          <div>
            <Fade left>
              <br />
              <br />
              <h2 className="h3">
                <u>
                  Multiply Your Budget With Modern Marketing Methods That Makes
                  You Happier Every Time You Get Order Notifications Streaming
                  To Your Account!
                </u>
              </h2>
            </Fade>
            <br />
            <br />
            <Fade left>
              <p className="h1 text-dark">
                You stopped beating around the books, you’ve got your magical
                idea, and not only that but you also worked hard and created a
                product or service which you can't help but sit back, look at
                and marvel over. Now you’re ready to start a new business. At
                last, It's happening. <br />
                <br />
                Now you're at the stage of trying to figure out how to get those
                initial sales.
                <br />
                <br />
                The main problems you're facing now are an unfruitful web
                presence, lack of time, and LACK OF FUNDS.
                <br />
                <br />
                There's a secret to solving all of these worrisome problems,
                once and for all, which can be described in just one word.
                <br />
                <br />
                Copywriter.
                <br />
                <br />
                Just like an engineer fueling up one of those sci-fi looking
                fighter jets that are ready for battle, a trained copywriter can
                help prepare your business, fuel it with revenue and launch your
                business from the grounds up.
                <br />
                <br />
                The other important secret here is to NOT just get ANY
                copywriter to take care of your business before taking off.
                Instead employ a well trained one!
                <br />
                <br />
                My name is Omar Khalil and my job is to get you all that you
                need for your business to succeed. Everthing Marketing related.
                From sales, leads, testimonials, surveys and more, I will take
                care of all those things for you, so that from this point on you
                can comfortably spend your time on perfecting your products
                instead of exhausting your energy inefficiently. Let's make the
                market a YES-fly Zone for your business!
              </p>
            </Fade>
            <br />
            <Fade left>
              <article>
                <img src={survey} alt="survey picture" />
                <p className="h1 text-dark">
                  <h3 className=" text-dark h1">
                    The Story of My First Marketing Experience
                  </h3>
                  <br />
                  Like most kids, my ambitions were big. But when I grew up, I
                  didn't lose my drive. <br />
                  <br />
                  at 18 years old, my ambitions were higher than the horizon.
                  Therefore, I move from my small, little town in upstate New
                  York to Colorado, to reach the stars.
                  <br />
                  <br />I got on the plane from New York to Colorado with just a
                  phone, my drivers license and a luggage bag containing my
                  clothes, aside from about $600.
                  <br />
                  <br /> So, as soon as I got there, I hammered away with
                  fulltime jobs to secure my stay.
                  <br />
                  <br />I was a driven young man with an abundance of energy and
                  a knack for adventure. Yet, my first job was not ideal for me
                  at the time. <br />
                  <br /> I worked as a Salesman for The Kirby Company selling
                  high-end Vacuum Cleaners but I did not have the sales
                  expertise necessary to secure a sufficient income. So, after
                  three weeks, I moved on, in search of a job with a stable
                  wage.
                  <br />
                  <br />
                  That's when I was hired at a marketing company called Black
                  Diamond Outreach, where I went canvassing on the field,
                  outside going from door-to-door with tablet that had a map and
                  pinpoints of the locations I was assigned to survey.
                  <br />
                  <br />
                  As a communicative person, the one thing in Colorado Springs
                  that made me about 99 times happier at work was the
                  opportunity to interview about 99 people each day. I chatted
                  up people while giving them surveys about political issues,
                  then collecting their names and email addresses. That was very
                  easy for me, and I enjoyed it and excelled at it. Splendid.
                  <br />
                  <br />
                </p>
              </article>
            </Fade>
            <Fade right>
              <article>
                <img src={award} alt="survey picture" />
                <h3 className=" text-dark h1">
                  My First 3 Awards as a Marketer
                </h3>
                <p className="h1 text-dark">
                  When I started working I wanted to do my best and prove my
                  capabilities, and, indeed, I was Awarded Best Employee for 3
                  days in a row, in an office of over 30 people. On the fourth
                  day, I finally took my finger off the tablet and slowed down a
                  bit to let others get awarded as well and as to not demoralize
                  my colleagues. Because others need their smoothies too.
                  <br />
                  <br />
                  With my marketing experience and ability to interview people
                  effectively, I can provide you with testimonials, customized
                  surveys and qualified leads. In doing so, you close sales as
                  you put your finger on the pulse of your market, understand
                  your business better and have leads for followup marketing. By
                  having that better understanding of your business and market ,
                  you can, also, improve your product or service and harvest
                  better business.
                  <br />
                  <br />
                  You can find more about me in the by clicking on 'about me' in
                  the navigation bar, up top.
                </p>
              </article>
            </Fade>
            <br />
            <Bounce bottom>
              <div className="quote text-light">
                “My experience with Omar in my work as a restaurant owner has
                been full of achievement. He was very helpful in my marketing
                efforts where he took professional pictures of the food and the
                restaurant. I’ve noticed that Omar helps the business owner
                reach his/her customers in an excellent way and easily.“
                <br />
                <span className="text-muted">
                  {" "}
                  - Amal A. Maseer, New Paltz, NY. Owner of Amals Cusine.
                </span>
              </div>{" "}
            </Bounce>
            <Fade left>
              <p className="h1 text-dark">
                <h3 className=" text-dark h1 ">
                  As an Ambivert, I Can Work In Teams, Alone or One-on-One
                </h3>{" "}
                <br />
                From when I was a salesman driving in a van with a team of
                salesmen for The Kirby Company selling high-end Vacuum Cleaners
                in Colorado Springs at the age of 18 years old, to collaborating
                on software engineering projects via Slack with fellow software
                developers more recently, There were many situations when I had
                to work, on a regular basis, in a team environment and
                collaborate with team members. <br />
                <br />
                I am social and love networking with people. I'm easy-going,
                funny, yet professional and can properly communicate and have
                excellent people skills. Like the Good Guy Greg of copywriting,
                I treat every business acquaintance as a human being. I
                genuinely want your business to succeed and reach its fullest
                potential and your success matter to me. With a vast amount of
                social experience, a peaceful mindset, and a friendly attitude,
                you will enjoy your business operations more.
                <br />
                <br />
              </p>
            </Fade>
            <a href="https://alison.com/user/pdf/4698/1" target="_blank">
              <Bounce>
                <div
                  className="certificate"
                  target="_blank"
                  id="alisoncertificate"
                  style={{ backgroundImage: `url(${alisoncertificate})` }}
                ></div>
              </Bounce>
            </a>{" "}
            <Fade bottom>
              <p className="h1 text-dark">
                <br />
                <h3 className=" h1 text-dark">
                  Taught and Certified with CPD (Continuing Professional
                  Development) Accreditation
                </h3>{" "}
                <br />
                While I have read many books on Marketing and it’s great to read
                the best copywriting books of all-time, Knowing how to put this
                information to practice is the most important thing.
                <br />
                <br />
                As a copywriter I have completed over 4 courses on Copywriting
                and Marketing. And I am certified for partaking in Copywriting
                courses.
                <br />
                <br />
                <br />
                <br />
                The courses that I’ve currently have completed are:
                <br />
                <br />
                <ul>
                  <li>
                    <strong>
                      Basic Concepts and Techniques For Copywriting
                    </strong>{" "}
                    by Marcia Yudkin
                  </li>
                  <li>
                    <strong>Conversion Copywriting 101</strong> by Copyhackers
                  </li>
                  <li>
                    <strong>Advanced Copywriting Skills and Techniques</strong>{" "}
                    by Marcia Yudkin
                  </li>
                  <li>
                    <strong>Kopywriting Korse</strong> by Neville Medhora
                  </li>
                </ul>
              </p>
            </Fade>
            <br />
            <article>
              <Bounce>
                <img src={books} alt="image of some books I've read" />
              </Bounce>
              <br />
              <br />
              <Fade bottom>
                <p className="h1 text-dark">
                  <h3 className=" text-dark h1">Well-Read On Copywriting</h3>{" "}
                  <br />
                  Most copywriters fail because they lack dedication, knowledge
                  and passion. In the past 4 years{" "}
                  <u>
                    <strong>I’ve read</strong> about <strong>49 books.</strong>
                  </u>{" "}
                  About <strong>15 books on Copywriting</strong>, some others
                  were about <strong>Marketing</strong> in general and others
                  were mostly self-help books.
                  <br />
                  <br />
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
                      <strong>Breakthrough Advertising</strong> by Eugene
                      Schwartz
                    </li>
                    <li>
                      <strong>and more.</strong>
                    </li>
                  </ul>
                </p>
              </Fade>
            </article>
            <article>
              <p className="h1 text-dark">
                <Fade left>
                  <br />
                  <br />
                  <h3 className=" text-dark h1 ">
                    Optimize Your Business Marketing With a Tech Savvy Software
                    Developer
                  </h3>
                  <img
                    src={coding}
                    style={{ float: "left" }}
                    alt="Coding bootcamp image"
                  />
                </Fade>
                <Zoom>
                  <br />
                  <br />
                  Technology is getting out of hands. So isn't it best to work
                  with a modern Copywriter who knows tech?
                  <br />
                  <br />
                  I started engineering software since 14 years old by
                  self-teaching. Then, I took Computer Science classes at New
                  Paltz High School, to learn even more about software
                  engineering.
                  <br />
                  <br />
                  In 2022, I’ve completed General Assembly’s Software
                  Engineering Bootcamp, and you're free to check out my{" "}
                  <a href="https://omarkhalil.netlify.app/" target="_blank">
                    portfolio website
                  </a>{" "}
                  for software applications I’ve developed.
                  <br />
                  <br />
                  I orient my software development learning around
                  entrepreneurship and I'm consistently learning new
                  technologies and development techniques, practicing my skills
                  and improving my software development abilities.
                  <br />
                  <br />
                </Zoom>
                <Bounce>
                  <img src={bootcamp} alt="Coding bootcamp image" />
                </Bounce>
                <Fade bottom>
                  <br />
                  <br />
                  Being a Full Stack Software Engineer, I can develop for the
                  Client-Side and Server-Side of a website. I know how to design
                  the websites layout, graphics and client-side of the
                  application as well as the behind the scenes functionality of
                  the website. And I can also create databases and much more.
                  <br />
                  <br />
                  Even this website is created by me!
                  <br />
                  <br />
                  When you work with such a tech savvy copywriter you can rest
                  easy knowing they understand the technical mechanics of your
                  online business to make marketing operations run smoother. As
                  well as helping you build a smarter, more effective marketing
                  campaign that matches the best in the industry.
                </Fade>
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
