import ProductForm from "../features/products/components/ProductForm";
import ProductList from "../features/products/components/ProductList";

export default function Produtos() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Produtos</h1>

      {/* Formulário de Cadastro/Edição */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Cadastrar novo produto</h2>
        <ProductForm />
      </div>

      {/* Lista de Produtos */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Lista de produtos</h2>
        <ProductList />
      </div>
    </div>
  );
}
