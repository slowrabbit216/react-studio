// TODO: create a component that displays a single bakery item

export default function BakeryItem({ item, index, addToCart }) {
  return (
    <div>
      <h2>
        {index}. {item.name}
      </h2>
      <img src={item.image} alt="Flowers" />
      <button onClick={() => addToCart(index, item.name, item.price)}>
        add to cart
      </button>
    </div>
  );
}
