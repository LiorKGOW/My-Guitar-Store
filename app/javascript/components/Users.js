import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title, TitleSizes, List, ListItem } from '@patternfly/react-core';

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/user');
        setUsers(response.data || []);
      } catch (error) {
        console.error(error);
      }
    }; 
    getUser();
  }, []);

  return (
    <div>
      <Title headingLevel="h1" size={TitleSizes['4xl']}>
        Users:
      </Title>
      <List>
        {users.map(user => (
          <ListItem>{user}</ListItem>
        ))}
      </List>
    </div>
  );
};
