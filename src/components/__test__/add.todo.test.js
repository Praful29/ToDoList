import React from 'react';
import { render } from "@testing-library/react";
import AddToDo from "../Add-Todo";

test("AddTodo renders without any error", () => {
    render(<AddToDo/>);
})

