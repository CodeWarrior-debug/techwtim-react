function ItemsDisplay(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div className="container">
            <div classname='row mt-3' >
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Type: {item.type}</p>
            <p>Brand: {item.brand}</p>
            </div>
          </div>

        )

          
      })}
    </div>
    );
}

export default ItemsDisplay;
