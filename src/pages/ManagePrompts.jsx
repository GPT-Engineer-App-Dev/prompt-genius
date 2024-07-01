import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

function ManagePrompts() {
  const [prompts, setPrompts] = useState([
    { id: 1, text: "Prompt 1" },
    { id: 2, text: "Prompt 2" },
  ]);
  const [newPrompt, setNewPrompt] = useState("");

  const addPrompt = () => {
    setPrompts([...prompts, { id: prompts.length + 1, text: newPrompt }]);
    setNewPrompt("");
  };

  const deletePrompt = (id) => {
    setPrompts(prompts.filter((prompt) => prompt.id !== id));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Manage Prompts</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <Card key={prompt.id}>
            <CardHeader>
              <CardTitle>{prompt.text}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              <Button variant="outline" onClick={() => deletePrompt(prompt.id)}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Prompt</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Prompt</DialogTitle>
          </DialogHeader>
          <Input
            value={newPrompt}
            onChange={(e) => setNewPrompt(e.target.value)}
            placeholder="Enter new prompt"
          />
          <Button onClick={addPrompt}>Add</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ManagePrompts;