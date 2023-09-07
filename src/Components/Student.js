import { useState } from "react";
import { Link } from "react-router-dom";
function Student () {
  const [data]= useState([
    {
    Name:"John",
    Age:24,
    Course:"MERN",
    Batch:"October",
    Change:"Edit"
    },
    {
      Name:"Doe",
      Age:25,
      Course:"MERN",
      Batch:"November",
      Change:"Edit"
      },
      {
        Name:"Biden",
        Age:26,
        Course:"MERN",
        Batch:"September",
        Change:"Edit"
        },
        {
          Name:"Barar",
          Age:22,
          Course:"MERN",
          Batch:"September",
          Change:"Edit"
          },
          {
            Name:"Christ",
            Age:23,
            Course:"MERN",
            Batch:"October",
            Change:"Edit"
            },
            {
              Name:"Elent",
              Age:22,
              Course:"MERN",
              Batch:"November",
              Change:"Edit"
              },

        ])
  return (
    <div>
      <h1>Students Details</h1>
      <button>Add new Student</button>
      <table border="1" width="80%" height="500px">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        
        {data.map((item,index)=>{
          return(
            <>
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
           <td><Link> {item.Change}</Link></td> 
             
            </tr>
            </>
          )
        })}
       </table>
    </div>
  )
}

export default Student;
