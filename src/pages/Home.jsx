import Products from "../components/Products";

function Home({cart, setCart}) {
  return (
    <div>
      <h1>Home</h1>
      <Products cart={cart}setCart={setCart} />
    </div>
  
  );
}

export default Home;