import person, {
  myElement,
  x,
  flowers,
  greetings,
  inputElement,
} from "./message";
import "./App.css";
import Product from "./Product.js"; // default ajonno { } ar moddhe nai
import Student from "./Student.js";

function App() {
  return (
    <>
      <div className="container">
        <Student />
      </div>

      <div className="container">
        <div className="">
          {/* {Product({name:"Trouser",price:"1000", quantity:"10"})}  */}
          <Product name="Shirt" price="1200" quantity="10" />
          <Product name="Trouser" price="1000" quantity="20" />
          <Product name="Panjabi" price="600" quantity="15" />
        </div>
        {x}
        <p>Calculation: {5 + 5}</p>
        <p>{flowers}</p>
        <p>{greetings("Rabbany")}</p>
        <p>
          Name:{person.name} Phone: {person.phone} Address: {person.address}
        </p>
        <p>{inputElement}</p>

        <table border="1" cellspacing="">
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <td>John</td>
          </tr>
          <tr>
            <td>Elsa</td>
          </tr>
          <tr>
            <td>{myElement}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
