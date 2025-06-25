import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => alert("Erro ao buscar produtos"));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Nome</th>
            <th className="px-4 py-2 border-b">Preço (R$)</th>
            <th className="px-4 py-2 border-b">Estoque</th>
            <th className="px-4 py-2 border-b">Desconto (%)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const highlightClass =
              product.stock === 0
                ? "bg-red-100"
                : product.discount > 0
                ? "bg-yellow-100"
                : "";

            return (
              <tr key={product.id} className={highlightClass}>
                <td className="px-4 py-2 border-b font-medium">{product.name}</td>
                <td className="px-4 py-2 border-b">
                  R$ {Number(product.price).toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b">{product.stock}</td>
                <td className="px-4 py-2 border-b">
                  {product.discount > 0 ? `${product.discount}%` : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
