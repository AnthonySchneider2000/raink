import React from 'react';
import List from "@/components/List";

function ExampleList() {
    const items = [
        {
          name: "Item 1",
          id: "1",
        },
        {
          name: "Item 2",
          id: "2",
        },
        {
          name: "Item 3",
          id: "3",
        },
      ];

    return (
        <List items={items} />

    );
}

export default ExampleList;