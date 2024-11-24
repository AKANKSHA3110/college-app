export default function Feedback(){
    let feedbackstyle={
        height:"50%",
        width:"50%",
        margin:"auto"
    

    }
    
    let heading={
        margin:"auto",
        height:"20%",
        width:"20%",
        color:"purple",

    }
     

    return(
        <>
        <h1 style={heading}>FEEDBACK☺️☺️</h1>
        <form style={feedbackstyle}>
           
        <div className="form-floating mt-5 mb-3 ">
        <input type="username" className="form-control" id="floatingInput" placeholder="UserName"/>
        <label for="floatingInput">UserName 😎😎</label>
        </div>
        <div className="form-floating mt-3 ">
        <input type="email" className="form-control" id="floatingPassword" placeholder="Email address@gmail.com"/>
        <label for="floatingPassword">Email Address  @gmail.com</label>
        </div>
        <div class="form-floating mt-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Ratings Please!!!<br/>⭐<br />⭐⭐<br />⭐⭐⭐<br />⭐⭐⭐⭐<br />⭐⭐⭐⭐⭐
        </label>
        </div>
        <div class="form-floating mt-3 ">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Review👍👍👍</label>
        <button type="button" class="btn btn-warning mt-5 ">Submit!!!</button>
        </div>
        
        
        </form>

        </>
    )
} 