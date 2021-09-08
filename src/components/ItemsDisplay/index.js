function ItemsDisplay(props) {
  const showItem = () => {
    return (
      <div>
        {props.items.map((item) => {
          return (
            <tr>
            <th scope='row' className="container">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
              </tr>
          );
        })}
      </div>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Price</th>
              <th scope='col'>Type</th>
              <th scope='col'>Brand</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          
        </table>
        </div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      {props.items.map(showItem)}
    </div>
  );
}
export default ItemsDisplay;
