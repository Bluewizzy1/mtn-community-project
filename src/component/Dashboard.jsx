import React from 'react';
import FSAVE from '../assets/FSAVE.png';
import dashboard from '../assets/dashboard.png';
import Business from '../assets/Business.png';
import Doctor from '../assets/Doctor.png';
import Lawyer from '../assets/Lawyer.png';
import Sell from '../assets/Sell.png';
import Handshake from '../assets/Handshake.png';
import Giving from '../assets/Giving.png';
import Logout from '../assets/Logout.png';
import Back from '../assets/Back.png';
import Messanger from '../assets/Messenger.png';
import Notification from '../assets/Notification.png';
import Gear from '../assets/Gear.png';
import Sophia from '../assets/Sophia.png';
import Editing from '../assets/Editing.png';
import Location from '../assets/Location.png';
import Mail from '../assets/Mail.png';
import Phone from '../assets/Phone.png';
import Calender from '../assets/Calendar.png';
import Link from '../assets/Link.png';
import Ellipse1 from '../assets/Ellipse1.png';
import Ellipse2 from '../assets/Ellipse2.png';
import Ellipse3 from '../assets/Ellipse3.png';
import Circle from '../assets/Circle.png';
import Chat from '../assets/Chat.png';
import search from '../assets/search.png';
import Background from '../assets/Background.png';
import people from '../assets/people.png';
import More from '../assets/More.png';
import Photo from '../assets/Photo.png'
import Videocamera from '../assets/Videocamera.png';
import Folder from '../assets/Folder.png';
import Victoria from '../assets/Victoria.png';
import Heart from '../assets/Heart.png';
import comment from '../assets/comment.png';
import Share from '../assets/Share.png'
import Youtube from '../assets/Youtube.png'


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='first-bar'>
        <div className="top">
          <img src={FSAVE} alt="lOGO" />
          <p>My <span>Trust</span> Network</p>
        </div>
        <div className="list">
          <div list-btn>
            <li>
              <img src={dashboard} alt="dashboard" />
              <p>Dashboard</p>
            </li>
            <li>
              <img src={Business} alt="Business" />
              <p>Business Expert</p>
            </li>
            <li>
              <img src={Doctor} alt="Doctor" />
              <p> Trust Doctor</p>
            </li>
            <li>
              <img src={Lawyer} alt="Lawyer" />
              <p> Trust Lawyer</p>
            </li>
            <li>
              <img src={Sell} alt="Sell" />
              <p>Trust Market</p>
            </li>
            <li>
              <img src={Handshake} alt="Handshake" />
              <p>Trust Deal</p>
            </li>
            <li>
              <img src={Giving} alt="Giving" />
              <p>Trust Aid</p>
            </li>
            <li>
              <img src={Logout} alt="Logout" />
              <p>Logout</p>
            </li>
          </div>
        </div>
        <div className="end">
          <p>Do You Have any Technical Problem or Questions To Ask? Contact Our Customer Support.</p>
          <button className='contact-btn'>Contact Us</button>
        </div>
      </div>

      <div className='middle-bar'>

        <div className='search'>
          <div className='search-text'>
            <div>
              <p>Welcome Back,</p>
              <h3>Sophia Amaka</h3>
            </div>
          </div>
          <div className='search-bar'>
            <input placeholder='Search' />
            <img src={search} alt='Search' className='search-img' />
          </div>
        </div>

        <div className='first-container'>
          <div>
            <img src={Background} alt='background' className='background-img' />
          </div>
          <div className='background-text'>
            <h3>‘’Without community service, we<br /> would not have a strong quality of <br />liufe’’ Dorothy Height.</h3>
          </div>
          <div className='people'>
            <img src={people} alt='people' className='people-img' />
          </div>
          <div className='people-btn'>
            <button className='people-btnn'>Join Community</button>
            <button className='people-btnn'>Learn More</button>
          </div>
        </div>

        <div className='post'>
          <div className="createe">
            <h4>Create Post</h4>
            <div>
              <img src={More} alt='more' className='more' />
            </div>
          </div>
          <div className="create-input">
            <input placeholder='Whats on your mind?' className='mind-input' />
          </div>
          <div className="publish-btn">
            <div className="publish-img">
              <div className="photo1">
              <img src={Photo} alt='photo' className='photo' />
              </div>
              <div className="photo2">
                <img src={Videocamera} alt='Videocamera' className='videocamera' />
              </div>
              <div className="photo3">
                <img src={Folder} alt='Folder' className='folder' />
              </div>
            </div>
            <div className="publish-bttn">
              <button className="publish-btttn">Publish</button>
            </div>
          </div>
        </div>

        <div className='comment'>
          <div className='shares'>
            <div>
              <img src={Victoria} alt='victoria' className='victoria' />
            </div>
            <div className='vic-text'>
              <h4>Victoria Stones</h4>
              <p>20 Mins ago<span className='public'>Public</span></p>
            </div>
            <div>
              <img src={More} alt='more' className='moree' />
            </div>
          </div>
          <div className='stones'>
            <h4>Hi! I am Victoria Stones from the USA. I would like to connect and interact to learn more about this community services. I would like that my  company take a new turn in its financial crisis currently. I need a counsel on this as soon as possible. I am glad to be here. Thank you.</h4>
          </div>
          <div className='love'>
            <div className='heart-div'>
              <img src={Heart} alt='heart' className='heart'/>
              <p>115 Likes</p>
            </div>
            <div className='comment-div'>
              <img src={comment} alt='comment' className='heart-one'/>
              <p>27 Comments</p>
            </div>
            <div className='share-div'>
              <img src={Share} alt='share' className='heart-one'/>
              <p>50 Shares</p>
            </div>
          </div>
        </div>

        <div className='youtube'>
        <div className='shares'>
            <div>
              <img src={Ellipse1} alt='Ellipse1' className='victoria' />
            </div>
            <div className='vic-text'>
              <h4>Bright Peters</h4>
              <p>20 Mins ago<span className='public'>Public</span></p>
            </div>
            <div>
              <img src={More} alt='more' className='moree' />
            </div>
          </div>

          <div className='youtube-container'>
            <div className='flex-youtube'>
              <div className="main-youtube">
                  <img src={Youtube} alt='youtube' className='youtube-img'/>
              </div>
              <div>
                <button className='youtube-btn'></button>
                <div>
                <button className='youtube-btnn'></button>
                </div>
              </div>
            </div>
          </div>

          <div className='lovee'>
            <div className='heart-div'>
              <img src={Heart} alt='heart' className='heart'/>
              <p>115 Likes</p>
            </div>
            <div className='comment-div'>
              <img src={comment} alt='comment' className='heart-one'/>
              <p>27 Comments</p>
            </div>
            <div className='share-div'>
              <img src={Share} alt='share' className='heart-one'/>
              <p>50 Shares</p>
            </div>
          </div>
        </div>

      </div>

      <div className='last-bar'>

        <div className='profile-div'>
          <img src={Back} alt='back' className='back' />
          <div className="set-icon">
            <div>
              <img src={Messanger} alt='messenger' />
            </div>
            <div>
              <img src={Notification} alt='notification' />
            </div>
            <div>
              <img src={Gear} alt='gear' />
            </div>
          </div>
        </div>

        <div className="sophia">
          <div className="sophia-img">
            <img src={Sophia} alt='sophia' />
            <p>Basic member</p>
          </div>
        </div>

        <div className='sophia-text'>
          <h4>Sophia Amaka</h4>
          <img src={Editing} alt='Editing' className='edit' />
        </div>

        <div className="update-btn">
          <button className='update-btn1'>Update Profile</button>
          <button className='update-btn2'>Request Call</button>
        </div>

        <div className='address'>
          <ul >
            <li className='lists'>
              <img src={Location} alt="location" className='last-bar-img' />
              <p>Lagos, Nigeria</p>
            </li>
            <li className='lists'>
              <img src={Mail} alt="Mail" className='last-bar-img' />
              <p>sophieaofficialgmail.com</p>
            </li>
            <li className='lists'>
              <img src={Phone} alt="Phone" className='last-bar-img' />
              <p>+234 80 5467 567 </p>
            </li>
            <li className='lists'>
              <img src={Calender} alt="Calender" className='last-bar-img' />
              <p>March 8, 1991</p>
            </li>
            <li className='lists'>
              <img src={Link} alt="Link" className='last-bar-img' />
              <p>Referral Link</p>
            </li>
          </ul>
        </div>

        <div className='account-balance'>
          <h3>Account Balance</h3>
          <div className='account-container'>
            <div className='account-container-one'>
              <div className='acct-text'>
                <h4 className='total'>Total Balance</h4>
                <h3 className='dollar'>$300</h3>
                <p className='para'>View</p>
              </div>
            </div>
            <div className='account-container-one'>
              <div className='acct-text'>
                <h4 className='total'>Total Balance</h4>
                <h3 className='dollar'>$300</h3>
                <p className='para'>View</p>
              </div>
            </div>
          </div>
        </div>
        <button className='withdraw'>Withdraw Money</button>

        <div className='recent'>
          <h3>Recent Activities</h3>
        </div>

        <div className='last-text'>
          <div className='last-input'>
            <div className="last-img">
              <img src={Ellipse1} alt='Ellipse1' className='Ellipse1' />
            </div>
            <div className="last-text">
              <h4>Valentine Bricks</h4>
              <p>Nice having you</p>
            </div>
          </div>
          <div className='last-input'>
            <div className="last-img">
              <img src={Ellipse1} alt='Ellipse1' className='Ellipse1' />
            </div>
            <div className="last-text">
              <h4>Victoria Stones</h4>
              <p>Hi. Good morning</p>
            </div>
          </div>
          <div className='last-input'>
            <div className="last-img">
              <img src={Ellipse2} alt='Ellipse2' className='Ellipse1' />
            </div>
            <div className="last-text">
              <h4>Blessed Vivian</h4>
              <p>Hello. can i meet you?</p>
            </div>
          </div>
          <div className='last-input'>
            <div className="last-img">
              <img src={Ellipse3} alt='Ellipse3' className='Ellipse0ne' />
            </div>
            <div className="last-text">
              <div className="adams-textt">
                <h4>Adams Kolade</h4>
                <p className='adams-text'>Tell me more about the terms</p>
              </div>
              <div className='circle-img'>
                <img src={Circle} alt='circle' className='circle' />
                <div className='chat-img'>
                  <img src={Chat} alt='chat' className='chat' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Dashboard;