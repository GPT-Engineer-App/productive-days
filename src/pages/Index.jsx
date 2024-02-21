import React, { useState } from "react";
import { Box, Input, Button, VStack, HStack, Text, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleAddTask = () => {
    if (!inputValue.trim()) {
      toast({
        title: "No task entered.",
        description: "You can't add an empty task.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), content: inputValue }]);
    setInputValue("");
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <VStack p={8} bg="gray.100">
      <Text fontSize="2xl" mb={8}>
        Simple Todo App
      </Text>
      <HStack width="100%">
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Add a task..." variant="filled" />
        <IconButton colorScheme="blue" aria-label="Add task" icon={<FaPlus />} onClick={handleAddTask} />
      </HStack>
      <VStack width="100%" mt={4}>
        {tasks.map((task) => (
          <HStack key={task.id} width="100%" justifyContent="space-between" p={4} boxShadow="md">
            <Text>{task.content}</Text>
            <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Index;
