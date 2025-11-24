import ProductPage from "@/Components/ProductPage.jsx";

export default async function Page({ params }) {
  const { id } = await params; // ✅ await params

  return <ProductPage className="h-screen w-full" id={id} />;
}

