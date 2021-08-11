import { useRouter } from "next/router";

function ClientProjects() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "project-a" },
    });
  }
  return (
    <div>
      <h1>Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjects;
