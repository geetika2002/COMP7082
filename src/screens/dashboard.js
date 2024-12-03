// Importing the Sidebar component and the CSS for styling the dashboard
import Sidebar from '../components/sidebar';
import '../styles/dashboard.css';

// Importing React hooks for state management and lifecycle methods
import { useState } from 'react';
import { useEffect } from 'react';

// Defining the Dashboard functional component
export function Dashboard() {
  // useState hook to manage the user's name state
  const [userName, setUserName] = useState('');

  // useEffect hook to fetch and set user name from localStorage when the component mounts
  useEffect(() => {
    // Retrieve the first name and last name from localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    // If both names are available, update the userName state
    if (firstName && lastName) {
      setUserName(`${firstName} ${lastName}`);
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    // Wrapper for the entire dashboard layout
    <div className="dashboard-wrapper">
      {/* Sidebar component for navigation or additional features */}
      <Sidebar />
      <div className="dashboard-container">
        {/* Displaying a progress card with dynamic content */}
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="https://picsum.photos/800/600?image=1041" alt="Progress visualization" />
            <div className="projcard-textbox">
              <div className="projcard-title">Progress this Week</div>
              <div className="projcard-description">
                <p>This week you answered 4 questions, attended 1 interview, and checked out 7 different articles.</p>
                <p className="titledescription">Out of the Goals you Set:</p>
                <p className="answerdescription">7 Questions, 3 Interviews, and 10 Articles</p>
                <p className="titledescription">Some Things You Can Work on Today:</p>
                <p className="answerdescription">Question of the Day.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles section displaying resources and tasks */}
        <section className="articles">
          {/* Article card for "Question of the Day" */}
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1011/800/450" alt="Question of the Day" />
              </figure>
              <div className="article-body">
                <h2>Question of the Day</h2>
                <p>Partition array such that maximum difference is k?</p>
                <a href="https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/description/" className="read-more">
                  Try Now!
                </a>
              </div>
            </div>
          </article>

          {/* Article card for AI roadmap */}
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1005/800/450" alt="AI Roadmap" />
              </figure>
              <div className="article-body">
                <h2>Roadmap to Learn AI in 2024</h2>
                <p>So, you want to learn AI? But you don’t know how or where to get started?</p>
                <a href="https://medium.com/bitgrit-data-science-publication/a-roadmap-to-learn-ai-in-2024-cc30c6aa6e16" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </article>

          {/* Article card for trending repository */}
          <article>
            <div className="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/103/800/450" alt="Trending Repository" />
              </figure>
              <div className="article-body">
                <h2>Trending Repository</h2>
                <p>The lazier way to manage everything using Docker</p>
                <a href="https://github.com/jesseduffield/lazydocker" className="read-more">
                  Check It Out
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}