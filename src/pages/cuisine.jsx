import { useEffect, useState } from "react"

import{Link,useParams} from "react-router-dom";
import styled from "styled-components";
function Cuisine(){
 const [Cuisine,setCuisine]=useState([]);
 let params= useParams()
   const getCuisine= async (name)=>{
    
    
     const result= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=af68d04b9e424b65a13a9df45e9a966e&cuisine=${name}`);
     const data=await result.json()
     setCuisine(data.results)
     }

     

   


   useEffect(()=>{
    getCuisine(params.type)
     },[params.type]);


    return(<Grid>
       {Cuisine.map((item) =>{
          return(
            <Link to={"/recipe/"+ item.id}>
            <Card key={item.id}>
                  <p>{item.title}</p>
                  <img src={item.image} alt="" />
                  <Gradient />
            </Card>
            </Link>
          )
       })

       }
    </Grid>)
   }

   const Grid = styled.div`
       display:grid;
       grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
       grid-gap:3rem;
  
   `;
   const Card = styled.div`
   min-height : 18rem;
   border-radius : 2rem;
   overflow:hidden;
   position:relative;
   img{
     border-radius : 2rem;
     position:absolute;
     left:0;
     width:100%;
     height:100%;
     object-fit:cover;
 
   }
   p{
     position:absolute;
     z-index:10;
     left:50%;
     bottom:0%;
     transform:translate(-50%,0%);
     color:white;
     width:100%;
     text-align:center;
     font-weight:600;
     font-size:1rem;
     height:40%;
     display:flex;
     justify-content:center;
     align-items:center;
   }
 `;
 
 const Gradient =styled.div`
    z-index:3;
    position:absolute;
    width:100%;
    height:100%;
    background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
    
 `;
   export default Cuisine;