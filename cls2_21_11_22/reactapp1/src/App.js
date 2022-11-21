import{ myElement} from './message';

function App() {
  return(
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
  );
}

export default App;
