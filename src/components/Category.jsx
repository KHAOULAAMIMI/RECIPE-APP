import {FaPizzaSlice ,FaHamburger} from "react-icons/fa";
import {GiNoodles,GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import {NavLink}  from "react-router-dom";
function Category(){
 return (
  <List>
    <SLink to={"/cuisine/Italian"} >
        <FaPizzaSlice/>
        <div>Italian</div>
    </SLink >
    <SLink to={"/cuisine/American"} >
        <FaHamburger/>
        <div>American</div>
    </SLink>
    <SLink to={"/cuisine/Thai"} >
        <GiNoodles/>
        <div>Thai</div>
    </SLink>
    <SLink to={"/cuisine/Japanese"} >
        <GiChopsticks/>
        <div>Japanese</div>
    </SLink>

  </List>
 

 )

}
const List =styled.div`
  display:flex;
  justify-content:center;
  margin: 2rem 0rem;

`;
const SLink=styled(NavLink)`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  border-radius:50%;
  justify-content:center;
  text-decoration:none;
  margin-right:2rem;
  background:linear-gradient(35deg,#494949,#313131);
  height:4rem;
  width:4rem;
  div{
    color:white;
  }
  svg{
    color:white;
  }
  &.active{
    background:linear-gradient(to right,#f27121,#e94057);
  }
  &:hover{
    background:black;
  }
`;
export default Category