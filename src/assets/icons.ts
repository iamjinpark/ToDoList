// src/icons/icons.ts
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';
import { TiDelete } from 'react-icons/ti';
import { MdAdd } from 'react-icons/md';

const icons = {
  checkbox: {
    unchecked: RiCheckboxBlankCircleLine,
    checked: RiCheckboxCircleFill,
  },
  actions: {
    add: MdAdd,
    delete: TiDelete,
  },
};

export default icons;
