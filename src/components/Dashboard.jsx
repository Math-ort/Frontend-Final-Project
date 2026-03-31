import { useEffect, useState } from "react";
import "./dashboard.css";

export default function Dashboard() {

  
  const heroImages = [
    "https://plus.unsplash.com/premium_photo-1693160056946-13a9dc611327?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1739138053507-0f312a938451?q=80&w=1186&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
 
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);



  const gallery = [
    {
      url: "https://images.unsplash.com/photo-1725830063343-a9b87b6d1858?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "vertical"
    },
    {
      url: "https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "horizontal"
    },
    {
      url: "https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "vertical"
    },
    {
      url: "https://images.unsplash.com/photo-1771781732253-024b56528913?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "horizontal"
    }
  ];

  return (
    <div className="dashboard">


      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`
        }}
      >
        <h1>Mi Dashboard</h1>
      </div>

      <div className="gallery">
        {gallery.map((img, index) => (
          <div key={index} className={`card ${img.type}`}>
            <img src={img.url} alt="img" />
          </div>
        ))}
      </div>

    </div>
  );
}