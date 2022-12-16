import { generateBoard } from '$lib/utils/board';
import { writable } from 'svelte/store';

const initialBoard = generateBoard();

export const board = writable(initialBoard);
