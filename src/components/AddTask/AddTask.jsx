"use client";
import { CirclePlusFill } from "@gravity-ui/icons";
import { Button, Input, Label, ListBox, Select, Modal, Surface, TextField } from "@heroui/react";

const AddTask = ({ action }) => {
  return (
    <Modal>
      <Button className="my-1" variant="secondary">
        Add Task
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlusFill className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add to Task</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={action} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your task title" />
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
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddTask;
