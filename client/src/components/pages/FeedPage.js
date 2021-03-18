import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FeedPage.css";

const feed = [
  {
    id: 1,
    shoe: "adidas",
    image:
      "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
    likes: 1110,
    comment: "Check out my new retro kicks",
  },
  {
    id: 2,
    shoe: "Reebok",
    image:
      "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
    likes: 700,
    comment: "Found these classics in the back of my closet!",
  },
  {
    id: 3,
    shoe: "Air Jordans",
    image:
      "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
    likes: 1200,
    comment: "Finally checking these off my wishlist",
  },
];

const style = {
    card: {
        margin: 50,
        color: "black"
    },
    img: {
        marginLeft: 200
    },
    h5: {
        textAlign: "left"
    }
}

const FeedPage = ({ history }) => {
  console.log(history);

  return (
    <div className="feed-page">
      <h2>Feed</h2>

      {feed.map((post) => (
        <div className="card mb-5" style={style.card} >
          <div className="img-container">
           <h2>{post.comment}</h2> 
            <img alt={post.shoe} src={post.image} style= {style.img} />
          </div>
          <div className="content">
              <h5>Likes: {post.likes} </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedPage;
