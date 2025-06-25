import { useState } from "react";

interface ProductFormProps {
  onSubmit: (product: ProductInput) => void;
  initialData?: ProductInput;
}

interface ProductInput {
  name: string;
  description: string;
  price: number;
  stock: number;
  discount?: number;
  created_at: Date;
}

export default function ProductForm({ onSubmit, initialData }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductInput>(
    initialData || { name: "", description: "", price: 0, stock: 0, discount: 0, created_at: new Date() }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "name" ? value : Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700">Cadastrar Produto</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600">Nome</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Preço</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          min={0}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Estoque</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          min={0}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600">Desconto (%)</label>
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          min={0}
          max={999999}
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        Salvar Produto
      </button>
    </form>
  );
}
