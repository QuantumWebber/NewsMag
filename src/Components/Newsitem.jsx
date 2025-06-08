// Newsitem.jsx
const Newsitem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
       <img 
  src={src ? src : "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
  style={{ height: "200px", width: "300px" }} 
  className="card-img-top" 
  alt="News Thumbnail" 
/>

        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):""}</p>
          <a 
            href={url} 
            className="btn btn-primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default Newsitem;
  