import { useRouter } from "next/router";

function SelectedClientPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The Project page fo a specifc Project for a selected client</h1>
    </div>
  );
}

export default SelectedClientPage;
