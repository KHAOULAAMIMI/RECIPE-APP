import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Searched(){
    
        const [searchRecipe,setsearchRecipe]=useState([]);
        let params = useParams();

        const getSearched = async (name) => {
              
         
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=af68d04b9e424b65a13a9df45e9a966e&query=${name}`);
            const recipes = await data.json();
            setsearchRecipe(recipes.results);
        }
    
    
    
          useEffect(()=>{
            getSearched(params.search);
        },[params.search]);
       
    
        
    
    
    
        return(<div>
            
            
                    <Grid>
                       
                        {searchRecipe.map((recipe)=>{
                            return(
                              <Link to={"/recipe/" + recipe.id}
                              >
                                <Card>
                                   <p>{recipe.title}</p> 
                                   <img src={recipe.image} alt={recipe.title}   />
                                   <Gradient />
                                </Card>
                              </Link>
                            )
                        })}
                        
                      
                    </Grid>
    
            
        </div>);
    
   
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
export default Searched;