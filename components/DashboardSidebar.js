import React ,{useContext,useRef,useEffect,useState} from 'react'
import Link  from 'next/link';
import { IoIosAddCircle } from "react-icons/io";
import { BsFillEyeFill } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from 'next/router';

import { AuthContext } from './../context/AuthState';
export default function DashboardSidebar() {
   const router=useRouter()
   const currentPath=router.pathname
   const {
     removeToken
      
    } = useContext(AuthContext);

    const [token,setToken]=useState(null)
    const [role,setRole]=useState(null)

      
   useEffect(()=>{
      let [token,role]=[localStorage.getItem("token"),localStorage.getItem("role")]
      if(token && role=="Admin"){
         setToken(token)
         setRole(role)
      }

   },[])



    const dashBoardToggler = useRef();
  const toggleSidebar = () => {
    if (dashBoardToggler.current.classList.contains("-translate-x-full")) {
      dashBoardToggler.current.classList.remove("-translate-x-full");
      dashBoardToggler.current.classList.add("-translate-x-0");
    } else if (!dashBoardToggler.current.classList.contains("-translate-x-full")) {
      dashBoardToggler.current.classList.remove("-translate-x-0");
      dashBoardToggler.current.classList.add("-translate-x-full");
    }
  };
  return (
   <>
   <div onClick={toggleSidebar}  className="lg:hidden fixed top-[0.5rem] left-5 text-3xl text-gray-50 flex items-center justify-center  z-20">
      <GiHamburgerMenu/>
      </div>
    <aside  ref={dashBoardToggler}  className="overflow-y-scroll h-full  shadow-md rounded-sm  sidebar w-60 fixed top-0 left-0 bg-gray-100 z-20 transform transition-transform -translate-x-full lg:translate-x-0 duration-300 " aria-label="Sidebar">
      
   <div className="overflow-y-auto py-4 px-3 h-full bg-gray-50  ">

  <div onClick={toggleSidebar} className="fixed right-1 top-1 text-xl text-gray-500 lg:hidden">

   <RiCloseCircleFill/>
  </div>
        <div className="flex-shrink-0 flex ">
       
          <span className="block h-8 w-auto text-white px-2 rounded-xl bg-teal-600 font-bold text-xl">Attendance Master </span>
        </div>
      <ul className="space-y-2 mt-8">
         {/* <li >
            <a  className=" cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li> */}
         
         {/* <Link href="/myaccount">
         <li >
            <a  className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
               <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
               <span className="flex-1 ml-3 whitespace-nowrap">My Account</span>
            </a>
         </li>
         </Link> */}
         {/* <Link href="/dashboard/allorders">
         <li onClick={toggleSidebar}>
            <a  className={`cursor-pointer flex items-center p-2 ${currentPath=="/dashboard/allorders" ? "text-red-500" : 'text-gray-500' }  text-base font-normal  rounded-lg  hover:bg-gray-100 `}>
             
               <IoListCircleSharp   className="flex-shrink-0 w-6 h-6  transition duration-75 "/>
               <span className="flex-1 ml-3  whitespace-nowrap">All orders</span>
            </a>
         </li>
         </Link> */}
          <Link href="/dashboard/addstudent">
         <li  onClick={toggleSidebar} >
         <a  className={`cursor-pointer flex items-center p-2 ${currentPath=="/dashboard/addstudent" ? "text-teal-600" : 'text-gray-500' }  text-base font-normal  rounded-lg  hover:bg-gray-100 `}>
            <IoIosAddCircle className="flex-shrink-0 w-6 h-6  transition duration-75   "/>
               <span className="flex-1 ml-3 whitespace-nowrap">Add students</span>
            </a>
         </li>
         </Link>
        { token && role==="Admin"&& <Link href="/dashboard/addteacher">
         <li  onClick={toggleSidebar} >
         <a  className={`cursor-pointer flex items-center p-2 ${currentPath=="/dashboard/addteacher" ? "text-teal-600" : 'text-gray-500' }  text-base font-normal  rounded-lg  hover:bg-gray-100 `}>
            <IoIosAddCircle className="flex-shrink-0 w-6 h-6  transition duration-75   "/>
               <span className="flex-1 ml-3 whitespace-nowrap">Add Teachers</span>
            </a>
         </li>
         </Link>}
         <Link href="/dashboard/viewallstudents">
         <li  onClick={toggleSidebar} >
         <a  className={`cursor-pointer flex items-center p-2 ${currentPath=="/dashboard/viewallstudents" ? "text-teal-600" : 'text-gray-500' }  text-base font-normal  rounded-lg  hover:bg-gray-100 `}>
             
               <BsFillEyeFill className="flex-shrink-0 w-6 h-6  transition duration-75   "/>
               <span className="flex-1 ml-3 whitespace-nowrap">View all students</span>
            </a>
         </li>
         </Link>
         <Link href="/dashboard/viewallteachers">
         <li  onClick={toggleSidebar} >
         <a  className={`cursor-pointer flex items-center p-2 ${currentPath=="/dashboard/viewallteachers" ? "text-teal-600" : 'text-gray-500' }  text-base font-normal  rounded-lg  hover:bg-gray-100 `}>
             
               <BsFillEyeFill className="flex-shrink-0 w-6 h-6  transition duration-75   "/>
               <span className="flex-1 ml-3 whitespace-nowrap">View all teachers</span>
            </a>
         </li>
         </Link>
         <Link href="/">
         <li  onClick={toggleSidebar} >
            <a  className=" cursor-pointer flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-100 ">
             
               <AiFillHome className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  "/>
               <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
         </li>
         </Link>
         <li onClick={() => {
                    const con=confirm("Do you really want to logout?")
                    if(con){
                      removeToken();
                  
                    }
                   
                  }} >
            <p  className=" cursor-pointer flex items-center p-2 text-base font-normal text-red-500 rounded-lg  hover:bg-gray-100 ">
             
               <RiLogoutCircleRLine className="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75   "/>
               <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </p>
         </li>
        
      </ul>
   </div>

</aside>
</>
  )
}
