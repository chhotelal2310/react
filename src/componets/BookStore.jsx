function BookStore() { 

  function handleTitleChange(e) { 

    console.log ("The new title is:", e.target.value); 

    console.log ('Synthetic event:', e);

    console.log ('Native event:', e.nativeEvent); 

    e.stopPropagation(); 

    e.preventDefault(); 

  } 

  return <input name="title" onChange={handleTitleChange} />; 

} 
export default BookStore;