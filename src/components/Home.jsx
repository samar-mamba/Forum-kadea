import {useContext} from "react";
import UserContext from "../context/UserContext.js";
import data from "../models/services/DataService.js";
import Post from "./Post.jsx";

export default function Home() {

   const user = useContext(UserContext);

   return (
       <>
           <header>
               <h1>Forum instantané</h1>
           </header>
           <main>
               <h2>👋 Bienvenue, {user.pseudo}</h2>
               {
                   data.map((e)=> <Post post={e}/>)
               }
           </main>

       </>
   );
}

