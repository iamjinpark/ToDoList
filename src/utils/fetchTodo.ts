import axios from 'axios';
import { TodoProps } from '../types/TodoList';

// 외부 API에서 데이터를 불러오는 유틸함수
export const fetchTodos = async (url: string): Promise<TodoProps[]> => {
  try {
    const response = await axios.get<TodoProps[]>(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};
