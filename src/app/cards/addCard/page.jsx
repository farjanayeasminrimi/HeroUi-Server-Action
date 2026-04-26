"use client";

import { addNewTask } from "@/lib/action";
import { Input, Label, TextField, Select, ListBox, Button, Form, FieldError } from "@heroui/react";

const AddCard = () => {
  return (
    <div className="w-6/12 mx-auto p-6 my-9">
      <Form action={addNewTask} className="flex flex-col gap-4">
        <TextField
          isRequired
          // minLength={8}
          validate={(value) => {
            if (!/[A-Z]/.test(value)) {
              return "Title must contain at least one uppercase letter";
            }
          }}
          className="w-full"
          name="title"
          type="text"
        >
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
          <FieldError className="text-xs" />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Write your description" />
        </TextField>

        <Select className="w-[256px]" name="select" placeholder="Select one">
          <Label>Category</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="programming" textValue="programming">
                Programming
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="frontend" textValue="frontend">
                Frontend
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="design" textValue="design">
                Design
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="backend" textValue="backend">
                Backend
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="database" textValue="database">
                Database
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="projects" textValue="projects">
                Projects
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="author">
          <Label>Author</Label>
          <Input placeholder="Enter author name" />
        </TextField>

        <div className="flex gap-3 mt-3">
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCard;
