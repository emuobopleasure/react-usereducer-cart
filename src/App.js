import CartContainer from "./CartContainer";
import { GlobalContext } from "./context";
import NavBar from "./NavBar";


function App() {
  const {loading} = GlobalContext()
  if (loading) {
    return (
    <div className="loading">
      <h1 className="">
        Loading...
      </h1>
    </div>
    )
  }

  return (
    <main className="bg-gray-100 pb-8">
      <NavBar/>
      <CartContainer/>
    </main>
  );
}

export default App;
