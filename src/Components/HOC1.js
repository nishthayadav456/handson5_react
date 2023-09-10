
import update from "./HocDisplay"
function HOC1({cost,costHandler}){
    
    
    return(
        <>
        
        <h1>This is a Example of Higher Order Component</h1>
        <p>Higher-order Component(HOC) is function that takes a component as an input and returns a new enhanced component as output.In react, a higher-order component (HOC) is deemed an advanced technique for reusing component logic. They are not part of the React API, but they are the model that begins from React's compositional nature. 
        A higher-order component transforms a component into another component</p>
        <h3>Benefits of HOC:-</h3>
        1-Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.<br/>
       2- Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.<br/>
       3-Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.<br/>
       4-Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.<br/>
       5-Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.


         <div className="box1">
         <h2>Item1 Cost:<span>Rs.{cost}</span></h2>
       
       <button className="btn1" onClick={costHandler}>Increase Cost in Item1</button>
         </div>
       
        
       

        </>
    )
}
export default update (HOC1)