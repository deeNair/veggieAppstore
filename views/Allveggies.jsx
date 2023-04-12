const React = require('react');

function Allveggies(props){
    const {veggieArray}=props;//shld be same as as before
    console.log(veggieArray);

    
  return(
    
    <div>
     
    <h1>veggies</h1>

    <ul>
            {
                veggieArray.map((veg,i)=>{
                    return(
                        <li>
                           {veg.name}
                        </li>
                    );
                })
            }
        </ul>

    </div>
  );

}

module.exports = Allveggies;