import Sidebar from '../components/sidebar';
import '../styles/dashboard.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function Dashboard() {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get user name from localStorage
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (firstName && lastName) {
        setUserName(`${firstName} ${lastName}`);
    }
}, []);

    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="dashboard-container">
        
                <div class="projcard projcard-blue">
    <div class="projcard-innerbox">
      <img class="projcard-img" src="https://picsum.photos/800/600?image=1041" />
      <div class="projcard-textbox">
        <div class="projcard-title">Your progress this week</div>
        <div class="projcard-subtitle"></div>
        <div class="projcard-bar"></div>
        <div class="projcard-description">
          <p>This week you answered 4 questions, attended 1 interview, and checked out 7 different articles.</p>
          <p>Out of the goals you set: 7 questions, 3 interviews, and 10 articles.</p>
          <p>Here are some things you can work on today: Question of the day.</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
           
                <section className="articles">
                <article>
    <div class="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/1011/800/450" alt="" />
      </figure>
      <div class="article-body">
        <h2>Question of the day</h2>
        <p>
        partition array such that maximum difference is k
        </p>
        <a href="https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/description/" class="read-more"> Try now! <span class="sr-only"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/1005/800/450" alt="" />
      </figure>
      <div class="article-body">
        <h2>Roadmap to Learn AI in 2024</h2>
        <p>
        So, you want to learn AI? But you don’t know how or where to get started?
        </p>
        <a href="https://medium.com/bitgrit-data-science-publication/a-roadmap-to-learn-ai-in-2024-cc30c6aa6e16" class="read-more">
          Read more about AI in 2024
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div class="article-wrapper">
      <figure>
        <img src="https://picsum.photos/id/103/800/450" alt="" />
      </figure>
      <div class="article-body">
        <h2>Trending repository</h2>
        <p>
        The lazier way to manage everything docker
        </p>
        <a href="https://github.com/jesseduffield/lazydocker" class="read-more">
          Check it out here
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
                    
                </section>
            </div>
        </div>
    );
}

