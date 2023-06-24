import { useDataContext } from '../context/context';

function ProductCard({book}) {
    const {id,author,title,url,category} = book
    const {  setInputHandler } = useDataContext();
  return (
    <div className='product-card' key={id}>
        <img src={url} alt="img" />
      <select
        onChange={(e) => setInputHandler(e.target.value, id)}
        value={category}
        name=""
        id=""
      >
        <option disabled value="Move to">
          Move to
        </option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
        <option value="None">None</option>
      </select>
      <p>
        <strong>{author}</strong>
      </p>
      <p>{title}</p>
    </div>
  );
}

export default ProductCard