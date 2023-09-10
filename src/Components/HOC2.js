
import update from "./HocDisplay"
function HOC2({cost,costHandler}){
    
    
    return(
        <>
        <div className="box2">
        <h2>Item2 Cost:<span>Rs.{cost}</span></h2>
       
        <button className="btn2" onClick={costHandler}>Increase cost in Item2</button>
        </div>
      
       
       



        

        </>
    )
}
export default update( HOC2)