function SimpleForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Submitted');
  } 
  return (
    <form onSubmit={handleSubmit}>
        <h1>Task Planner</h1>
        <label> What </label>
        <input type="text" name="name" />
        <br />
        <label> When </label>
        <input type="email" name="email" />
        <br />
        <label> Where </label>
        <input type="text" name="texhnology" />
        <br />
        <button type="submit" >Submit</button>
    </form>    
  );
}

export default SimpleForm;  