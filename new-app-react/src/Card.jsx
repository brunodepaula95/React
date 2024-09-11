import profilePic from './assets/profile.jpg'

function Card(){
    return(
      <div className="card">
          <img className="card-image" src={profilePic} alt="profile picture" />
          <h2 className="card-title" >Bruno</h2>
          <p className="card-text">I study React and play video games</p>
      </div>
    );
      
}

export default Card