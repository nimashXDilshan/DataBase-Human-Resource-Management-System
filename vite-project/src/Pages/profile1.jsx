import React,{useState} from 'react'
import Select from 'react-select';
import Employeeprofiledetails from '../Components/ProfileDetails/profiledetails';

function profile1 () {
  const countries=[
    {label:'Sri Lankan', value:'SL' , img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqGb_C8g5ecUW8iFijeg0QCVnHXg79MjfWA&s'},
    {label:'Bangali', value:'Bng' , img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINjXTYxjC6EbuqpQC3SXsShcGMjJo6-mYTw&s'},
    {label:'Pakistani', value:'Pak' , img :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjFfZ5v6esj2iwaq-L_0ZT27FE-1ZWMI7Uw&s'}
  ];
  const tabs=[
    {name:"General"},
    {name:"Personal"},
    {name:"Department"},
    {name:"Pay Grade"}
  ];
  const[activeTab,setActiveTab]=useState(0);

  return  (
  <div className='flex items-center justify-between h-screen'>
    {/* Left Section */}
    <div className='w-4/12 p-8'> 
      <div className='w-full flex justify-start'>
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile for user' className='w-36 h-36 object-contain -mt-40 ml-2' />
      </div>
      <div className='flex flex-col items-start mt-4 ml-0'> {/* Changed to items-start for left alignment */}
        <span className='text-xl font-semibold'>Mr. X</span>
          <div className='flex items-center space-x-2 mt-2 ml-0'> {/* Changed to items-start for left alignment */}
            <input type='file'className='hidden'id='file-input'onChange={(e) => console.log(e.target.files[0])}/>
              <label htmlFor='file-input'className='bg-blue-500 text-white px-7 py-2 rounded cursor-pointer hover:bg-blue-600'>
                Edit
              </label>
            <button className='bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600'>
              Delete
            </button>
          </div>
          <div className='border-t mt-4 pt-2 w-full'>
            <h5 className='mt-0 font-bold'>Account Details</h5>
            <div className='flex items-center mt-1'>
              <h6 className='ml-2 mr-2'>Nationality</h6>
              <Select
                options={countries}
                defaultValue={countries[0]}
                formatOptionLabel={(option)=>{
                  return(
                  <div>
                    <img src={option.img} alt={option.label} className='w-10 h-8 mr-2'></img>
                    <span>{option.label}</span>
                  </div>
                  )
                }}/>
            </div>
          </div>
      </div>
    </div>
    {/* Right Section (Tabs) */}
    <div className="w-8/12 border-l border-gray-300 flex flex-col justify-start mt-0 mr-24"> {/* Tabs section elevated from the bottom */}
      <div className="flex profile-tabs mb-80 ml-56">
        {tabs.map((tab, index) => (
          <div
            key={index} // Include key when mapping
            className={`min-w-[120px] w-auto p-3 text-center cursor-pointer 
            ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}  // Add styles for active/inactive tabs
            onClick={() => { setActiveTab(index) }}>
                {tab.name} {/* Display tab name */}
          </div>
          ))}
        </div>

    </div>
</div>
  )
   function inputfield({label,type,id,className,placeholder,changefunction}) {
     return(
       <div className={`${className}form-floating`}>
         <input type={type} className='form-cntrol' id={id} placeholder={placeholder} onChange={(e)=>{changefunction(e.target.value)}}></input>
         <label htmlFor={id}>{label}</label>
       </div>
  )
  }
}


export default profile1
