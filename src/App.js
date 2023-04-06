import logo from './assets/images/logo.svg';
import retropc from './assets/images/image-retro-pcs.jpg';
import topten from './assets/images/image-top-laptops.jpg';
import gaming from './assets/images/image-gaming-growth.jpg';
import './App.scss';

function App() {
  return (
    <section className='newspage'>
      <nav className='newspage-navbar'>
        <section className='logo'>
          <img src={logo} alt='logo'/>
        </section>
        <section className='navlinks'>
          <ul>
            <li> <a href='/'>Home</a> </li>
            <li> <a href='/'>New</a> </li>
            <li> <a href='/'>Popular</a> </li>
            <li> <a href='/'>Trending</a> </li>
            <li> <a href='/'>Categories</a> </li>
          </ul>
        </section>
      </nav>
      <section className='newspage-main'>
        <article className='np-news'>
          <div className='np-news-bg'>

          </div>
          <div className='np-news-h'>
            <h1>The Bright Future of Web 3.0?</h1>
            <div className='np-news-p'>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button>Read more</button>
            </div>
          </div>
        </article>

        <sidebar className='np-sidebar'>
          <h1>New</h1> 
          <h2>Hydrogen VS Electric Cars</h2>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr></hr>
          <h2> The Downsides of AI Artistry</h2>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
          <hr></hr>
          <h2>Is VC Funding Drying Up?</h2>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>   
        </sidebar>

        <article className='np-card npc1'>
          <img src={retropc} alt=''/>
          <div className='np-card-info'>
            <span>01</span>
            <strong>Reviving Retro PCs</strong>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>

        <article className='np-card npc2'>
          <img src={topten} alt=''/>
          <div className='np-card-info'>
            <span>02</span>
            <strong>Top 10 Laptops of 2022</strong>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>

        <article className='np-card npc3'>
            <img src={gaming} alt=''/>
            <div className='np-card-info'>
              <span>03</span>
              <strong>The Growth of Gaming</strong>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </article>
      </section>
    </section>
  );
}

export default App;
