import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Destination() {
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/list/')
        .then(response=>{
            setData(response.data.results);
            setLoading(false);
        })
        .catch(error=>{
            setError(error);
            setLoading(false);
        });
    },[]);
    if (loading) {
        return <p>Loading...</p>;
      }
    
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    


    
    return(
        <div>
            <h1>Destination</h1>
            <ul>
        {data.map(item => (
          <li key={item.content_id}>
            <h2>{item.title}</h2>
            <img src={item.first_image} alt={item.title} />
          </li>
        ))}
      </ul>
        </div>
    );
}

export default Destination;