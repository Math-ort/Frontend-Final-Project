import "./dashboard.css";
import Footer from "../components/Footer"; 

export default function Dashboard() {

  const hombreImg = "https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?q=80&w=764";
  const damaImg = "https://images.unsplash.com/photo-1675685828170-fe4b100acd24?q=80&w=687";

  const coleccion = [
    "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?q=80&w=687",
    "https://images.unsplash.com/photo-1551111293-20c9c0ae923c?q=80&w=1176",
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=735"
  ];

  return (
    <div className="dashboard">

    
      <div className="split-hero">

        <div
          className="side hombre"
          style={{ backgroundImage: `url(${hombreImg})` }}
        >
          <h2>Hombre</h2>
        </div>

        <div
          className="side dama"
          style={{ backgroundImage: `url(${damaImg})` }}
        >
          <h2>Dama</h2>
        </div>

      </div>
      
      <div className="collection">
        <h2>Nueva colección primavera</h2>

        <div className="collection-grid">
          {coleccion.map((img, index) => (
            <div key={index} className="collection-card">
              <img src={img} alt="colección" />
            </div>
          ))}
        </div>
      </div>

    </div>
    
  );
}