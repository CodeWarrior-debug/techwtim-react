function ItemsDisplay(props) {
  return (
    <div>
      {props.items.map((item) => {
        return <p>Name: {item.name}</p>;
      })}
    </div>
    );
}

export default ItemsDisplay;
