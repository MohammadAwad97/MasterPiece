import ProductsTable from "./ProductsTable";
// import ProductsForm from "./ProductsForm";
import ProductForm from "./ProductForm";
function LadingPageProducts() {
  return (
    <div className="pl-5" style={{ paddingRight: "2em" }}>
      <ProductForm />
      <ProductsTable />
    </div>
  );
}

export default LadingPageProducts;
