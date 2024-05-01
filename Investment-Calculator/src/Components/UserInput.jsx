export default function UserInput({handleChange, updateValue}){

    return(
        <section id="user-input">
            <div className="input-group">
              <p>       
                <label>Initial Investment</label>
                <input type="number" name="Initial" value={updateValue.Initial} required onChange={handleChange}/>
              </p> 
            
              <p>
                <label >Annual Investment</label>
                <input type="number" name="annual"  value={updateValue.annual} required onChange={handleChange}/> 
               </p>
            </div>

            <div className="input-group">
            <p>
            <label>Expected return</label>
            <input type="number" name="expected" value={updateValue.expected}  required onChange={handleChange}/>
            </p>

            <p>
            <label>Duration</label>
            <input type="number" value={updateValue.duration}  required name="duration" onChange={handleChange}/>
            
            </p>
            </div>
           
        </section>
    )
}