const ListItem = ({ title, onDelete }) => {
  return (
    <div style={{display:'flex', justifyContent:'center',margin:'10px'}}>
      <p>{title}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default ListItem
