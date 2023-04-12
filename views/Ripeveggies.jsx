const React = require('react');

function Ripeveggies(props){
    const {vegArray} = props;
    console.log(vegArray)
    return(
        <div>
            <h1>Ripe veggies</h1>
            <p> 
                
                { 

                vegArray.map((el)=>{
                    return(
  <h1>
 {el.readyToEat ?  `${el.name}:yes it ripe` :  `${el.name}:no its not ripe`}

  </h1>
                    );
                })
                
               
                
                }
                
             
             </p>
        </div>
    )
}

module.exports = Ripeveggies;