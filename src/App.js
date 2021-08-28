import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const products=[
 {name: 'Photoshop', price:'$90.99'},
 {name:'Illustrator', price:'$60.99'},
 {name:'LightRoom', price:'$30.99'},
 {name:'VNC Viewer', price:'$30.99'},
 {name:'PDF Reader', price:'$6.99'}
 ]
 const names=['Murad', 'Masud', 'Emon', 'Meher']
  return (
    <div className="App">
      <header className="App-header">
<Users></Users>
        <ul>
        {names.map(names => <li>{names}</li>)}
        </ul>
        {products.map(product => <Product product={product}></Product>)}


<Counter></Counter>
      </header>
    </div>
  );
}



function Users(){
const [users, setUsers] = useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setUsers(data));
}, [])

const styleButton ={
padding:'5px',
margin:'10px',
fontSize:'25px',
color:'white',
backgroundColor:'#3D3C3A',
border:'none',
boxShadow:'5px 5px 5px gray, 5px 5px 5px gray'
}

const [fUser, setfUser] = useState(0)

return(
<div style={{textAlign:'left'}}>
<h3>Dynamic Users: {users.length}</h3>
{
users.slice(fUser, fUser+3).map(user => {
return <div style={{backgroundColor:'#3D3C3A', marginBottom:'10px', padding:'10px', boxShadow:'5px 5px 5px gray, 5px 5px 5px gray'}}>
<p>Name: {user.name}</p>
<li>Email: {user.email}</li>
<li>Phone: {user.phone}</li>
<li>Website: {user.website}</li>
<li>street: {user.address.street}</li>
<li>City: {user.address.city}</li>
<li>Zip Code: {user.address.zipcode}</li>
<li>Company: {user.company.name}</li>
</div>
}
)
}

<button style={styleButton} onClick={() => setfUser(fUser+3)}>Previous</button>
<button style={styleButton} onClick={() => setfUser(fUser+3)}>Next</button>

</div>
);
}

function Counter(){
const [count, setCount] = useState(0);

return(
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count+1)}>Increase</button>
<button onClick={() => setCount(count-1)}>Decrease</button>
</div>
)
}
function Product(props){
 const productStyle={
  border:'1px solid gray',
  borrderRadius:'5px',
  backgroundColor:'lightgray',
  width:'200px',
  height:'200px',
  float:'left'
 }
 return (
 <div style={productStyle}>
  <h3>{props.product.name}</h3>
  <h2>{props.product.price}</h2>
  <button>Buy Now</button>
 </div>
);
}
export default App;
