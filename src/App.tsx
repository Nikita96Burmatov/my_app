import { useProducts } from "./hooks/products";
import { Product } from "./сomponents/Product";
import { Loader } from "./сomponents/Loader";
import { Error } from "./сomponents/Error";
import { Modals } from "./сomponents/Modals";
import { CreateProduct } from "./сomponents/CreateProduct";

function App() {
  const { loading, error, products } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modals title="Create new product">
        <CreateProduct/>
      </Modals>
    </div>
  );
}

export default App;
