import React from "react";
import mypicture from "../media/mypic.jpg";
import survey from "../media/survey.jpg";
import awai from "../media/awai.jpg";
import alison from "../media/alison.avif";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container">
        <section className="intro">
          <div className="leftside">
            <div
              className="mypicture"
              style={{ backgroundImage: `url(${mypicture})` }}
            ></div>
            <div>
              <h1 className="myname">
                {" "}
                Omar S. Khalil -{" "}
                <span>Copywriter, Software Developer and Entrepreneur</span>
              </h1>
            </div>
          </div>
          <div className="myinfo">
            <h2 className="display-3 text-light">
              Top-Notch Copywriting For Your Brand New Business!
            </h2>
            <button className="button-2">Scroll Down For More Info</button>
          </div>
        </section>
        <section className="copy">
          <div>
            <h2 className="headline h1">
              knowledgeable and experienced, I'm here to help you realize
              financial freedom
            </h2>
            <br />
            <br />
            <h2>
              Make the most out of your budget with copywriting that brings
              results...
            </h2>
            <br />
            <br />
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
              Get someone to help you launch your business and get revenue
              coming in so you can finance and grow your business.
            </p>
            <br />
            <article>
              <img src={survey} alt="survey picture" />
              <p className="h1 text-dark">
                <h3 className="subhead h1">
                  Experienced Marketing Professional
                </h3>
                <br />I moved from NY to Colorado, in the year 2016. I was
                working as a door-to-door canvasser for a Colorado marketing
                company called Black Diamond Outreach. Everyday, I had the
                pleasure of <strong>interviewing up to a 100 people,</strong>{" "}
                giving them surveys and collecting their names and email
                addresses.
                <br />
                <br /> When I started working I wanted to do a good job and
                prove my merit, so I was{" "}
                <strong>
                  Awarded Best Employee of the Day for 3 days in a row
                </strong>
                . I finally took my foot off the peddle on the fourth day and
                let others get awarded as well. <br />
                <br />
                <strong>
                  With my marketing experience and ability to interview people
                  effectively, I can provide you with excellent testimonials,
                  surveys and leads. That way you get knowledge on your market
                  and business so you improve your business and achieve better
                  results.
                </strong>
              </p>
            </article>
            <br />
            <p className="h1 text-dark">
              <h3 className="subhead h1 ">A Great Team Player</h3> <br />
              I have extensive experience working in team environments and
              collaborating with team members regularly. From when I was a
              salesman in a team for high-end Vacuum Cleaners at the age of 18
              years old.. To collaborating on software engineering projects with
              team members recently. <br />
              <br />
              You can be confident that you're working with a professional who
              can properly communicate and has good people skills; Someone you
              can be comfortable working with.
              <br />
              <br />
            </p>
            <div className="quote text-warning">
              “My experience with Omar in my work as a restaurant owner has been
              full of achievement. He was very helpful in my marketing efforts
              where he took professional pictures of the food and the
              restaurant. I’ve noticed that Omar helps the business owner reach
              his/her customers in an excellent way and easily.“
              <span className="text-info">
                {" "}
                - Amal A. Maseer, New Paltz, NY
              </span>
            </div>{" "}
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
              <h3 className="subhead h1">Taught and Certified</h3> <br />
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
              The most notable courses that I’ve completed are:
              <br />
              <br />
              <ul>
                <li>AWAI Copywriting Method</li>
                <li>
                  Basic Concepts and Techniques For Copywriting by Marcia Yudkin
                </li>
                <li>Conversion Copywriting 101 by Copyhackers</li>
                <li>
                  Advanced Copywriting Skills and Techniques by Marcia Yudkin
                </li>
                <li>Kopywriting Korse by Neville Medhora</li>
              </ul>
            </p>
            <br />
            <p className="h1 text-dark">
              <h3 className="subhead h1">Well-Read On Copywriting</h3> <br />
              Most copywriters fail because they lack dedication, knowledge and
              passion. In the past 4 years{" "}
              <u>
                <strong>I’ve read</strong> about <strong>49 books.</strong>
              </u>{" "}
              About 15 of those books were <strong>on Copywriting</strong>, some
              others were about <strong>Marketing</strong> in general and others
              were mostly self-help books.
              <br />
              <br /> You can expect me to apply my knowledge of the following
              books in writing your copy:
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
            <p className="h1 text-dark">
              <br />
              <br />
              <h3 className="subhead h1 ">Tech Savvy Software Developer</h3>
              <br />I understand technology. I’ve been software engineering
              since 14 years old. And,In the year 2022, I’ve completed General
              Assembly’s <u>Software Engineering Bootcamp.</u> I have a{" "}
              <a href="#">portfolio website</a> for web applications I’ve
              developed. I consistently learn, practice and improve my software
              development skills.
              <br />
              <br />
              Being a Full Stack Software Engineer, I can develop for the
              Client-Side and Server-Side of a website. I orient my development
              learning around entrepreneurship. Having excellent engineering
              skills helps you build a smarter marketing campaign resulting in
              better results for your business.
            </p>
            <br />
            <p className="h1 text-dark">
              <h3 className="subhead h1 ">Entrepreneurial Awareness</h3> <br />
              I mentioned that I’m also an entrepreneur. But ever since I found
              my calling, I’ve been very ambitious, optimistic, positive and
              driven in the years since deciding to be my own boss. I have 100s
              of business ideas. I’ve written copy for many businesses of mine
              and I can write copy for just about any business idea.
              <br />
              <br /> Robert Kiyosaki suggested in ‘Rich Dad, Poor Dad,’ that
              working for experience leads to more monetary success than working
              for money. When I can make a positive impact on the success of
              your business, I gain valuable experience. So whatever your
              business is about, I will work to make you as much money as
              possible.
            </p>{" "}
            <br />
            <br />
            <p className="h1 text-dark">
              <h3 className="h1 subhead">
                Bilingual People Express Themselves Better
              </h3>
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
            <h3 className="subhead h1">All Budgets Accepted</h3>
            <br />
            <p className="h1 text-dark">
              Many clients are taking advantage of my low-cost services. So
              enter your name and email address to set up an appointment as soon
              as possible.
              <br />
              <br />
              I can work with all kinds of budgets. The most important thing is
              that you have an interesting product or service. If not we can fix
              that too!
              <br />
              <br />
              After submitting your name and email address, I will immediately
              reach back to you with a Questionnaire that helps me understand
              what your business is about, so that we can increase your business
              success. <br />
              <br />
              Then we can set up an appointment and I will personally get back
              to you in order to figure it out either with a phone call, video
              call, or any other communication method you prefer.
            </p>
            <br />
          </div>
          <div>
            <h6 className="subhead text-dark h6">
              <strong>Start Converting Prospects </strong> <br />
              <br />
              Your First Step is to answer a few questions about your business
              idea.
              <br />
              <br /> I'll then try to figure out a way to build a mutually
              beneficial business relationship between us. <br />
              <br />
              Fill Out This Form and Click on the Submit Button
            </h6>

            <h5 className="subhead h6 text-dark">
              If you sign up before <u>June, 1st 2023</u>
              <br />
              You can schedule a <strong>FREE consultaton with me</strong>{" "}
              discussing a plan of action.
              <br />
            </h5>
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
            <h8 className=" h6 text-dark">Your privacy is protected.</h8>
          </form>
          <br />
          <br />
          <div>
            <p className="PS text-dark">
              for any questions you can contact me at my personal email:
              omareldagestany@outlook.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
