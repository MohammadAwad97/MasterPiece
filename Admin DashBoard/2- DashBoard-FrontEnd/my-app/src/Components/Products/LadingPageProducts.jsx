import ProductsTable from "./ProductsTable";
import ProductsForm from "./ProductsForm";
function LadingPageProducts() {
  return (
    <div className="pl-5" style={{paddingRight: "2em"}}>
      <ProductsForm />
      <ProductsTable />
    </div>
    
  );
}

export default LadingPageProducts;
