import "./dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const hombreImg = "https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?q=80&w=764";
  const damaImg = "https://images.unsplash.com/photo-1675685828170-fe4b100acd24?q=80&w=687";

  const coleccion = [
    {
      img: "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?q=80&w=687",
      text: "Calzado Hombre",
      link: "/hombre/zapatos"
    },
    {
      img: "https://images.unsplash.com/photo-1551111293-20c9c0ae923c?q=80&w=1176",
      text: "Calzado Mujer",
      link: "/mujer/zapatos"
    },
    {
      img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=735",
      text: "Camisetas Mujer",
      link: "/mujer/camisetas"
    },
    {
      img: "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?q=80&w=1170",
      text: "",
      link: "/home"
    }
  ];

  return (
    <div className="dashboard">

      <div className="split-hero">

        <div
          className="side hombre"
          style={{ backgroundImage: `url(${hombreImg})` }}
          onClick={() => navigate("/hombre")}
        >
          <h2>Hombre</h2>
        </div>

        <div
          className="side dama"
          style={{ backgroundImage: `url(${damaImg})` }}
          onClick={() => navigate("/mujer")}
        >
          <h2>Mujer</h2>
        </div>

      </div>
      <div className="collection">
        <h2>Nueva colección primavera</h2>

        <div className="collection-grid">
          {coleccion.map((item, index) => (
            <div key={index} className="collection-card">

              <div
                className="image-wrapper"
                onClick={() => navigate(item.link)}
              >
                <img src={item.img} alt={item.text} />

                {index === coleccion.length - 1 && (
                  <button
                    className="shop-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/products");
                    }}
                  >
                    Shop Now
                  </button>
                )}
              </div>

              {item.text && (
                <p
                  className="category-text"
                  onClick={() => navigate(item.link)}
                >
                  {item.text}
                </p>
              )}

            </div>
          ))}
        </div>
       </div>

     </div>
  );
}