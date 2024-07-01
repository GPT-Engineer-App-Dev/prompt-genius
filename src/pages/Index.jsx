import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Prompt Manager</h1>
      <p className="mb-4">Manage your prompts efficiently and effectively.</p>
      <Link to="/manage-prompts">
        <Button>Manage Prompts</Button>
      </Link>
    </div>
  );
}

export default Index;