import React,{useState, useEffect} from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import DataGridx from '../components/DataGrid';
import ToDo from '../components/ToDo';

const Home = () => 
{
  const [data, setData] = useState([])
  useEffect(() => {
    // Make an API request to your local API
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => {
        setData(data.recordsets[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //todo
  const deleteToDo = (todoDelete) => {
    setData(data.filter(todo => todo !== todoDelete));

  }; 

  return (
    <>
    <Header />
    <GetStarted />
    <GetInTouch />
    {/* {data.map((todo, index) => (
        <ToDo key={index} todo={todo} deleteToDo={deleteToDo} />
      ))} */}

    { data==[]?<></>:
    <DataGridx Data = {data}/>
  }
    </>

  )
}
export default Home;