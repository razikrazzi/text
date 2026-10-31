import React, { useState } from 'react'

function App() {
  
const users = [
  { id: 1, name: "Razik" },
  { id: 2, name: "Arun" },
  { id: 3, name: "Rahul" },
  { id: 4, name: "Ajay" },
  { id: 5, name: "Akhil" },
  { id: 6, name: "Adithya" },
  { id: 7, name: "Nikhil" },
  { id: 8, name: "Vishnu" },
  { id: 9, name: "Amal" },
  { id: 10, name: "Rohit" },
  { id: 11, name: "Kiran" },
  { id: 12, name: "Sanjay" },
  { id: 13, name: "Anand" },
  { id: 14, name: "Abhinav" },
  { id: 15, name: "Fahad" },
  { id: 16, name: "Shamil" },
  { id: 17, name: "Riyas" },
  { id: 18, name: "Midhun" },
  { id: 19, name: "Sreejith" },
  { id: 20, name: "Aswin" },
  { id: 21, name: "Joel" },
  { id: 22, name: "Kevin" },
  { id: 23, name: "Jithin" },
  { id: 24, name: "Naveen" },
  { id: 25, name: "Dhanush" },
  { id: 26, name: "Sahil" },
  { id: 27, name: "Haris" },
  { id: 28, name: "Suhail" },
  { id: 29, name: "Rameez" },
  { id: 30, name: "Shahin" }
];

  const [currentpage,setcurrent ] = useState(0)

  const userperpage = 5

  const firstindex = currentpage * userperpage ;
  const lastindex =  userperpage + firstindex ;
  
  const totalpages = Math.ceil(users.length/userperpage)
  
  const uservalue = users.slice(firstindex,lastindex)
  
  console.log(firstindex)
  console.log(totalpages)
  console.log(uservalue)
  console.log(lastindex)


  return (
    <div>
    {Array.from({length : totalpages} , (_,index) => (
      
      <div key={index}>
        <button onClick={() => setcurrent(index)}>{index}</button>
      </div>

 
    ))}

    {uservalue.map((user) => (
      <div> {user.name} </div>

    ))}



      

    </div>
  )
}

export default App