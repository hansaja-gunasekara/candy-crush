import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { updateBoard } from './store'
import { create } from 'domain';
import { createBoard } from './utils/createBoard';

function App () {

  const dispatch = useAppDispatch();

  const board = useAppSelector(({candyCrush: {board}}) => board);
  const boardSize = useAppSelector(({candyCrush: {boardSize}}) => boardSize);

  useEffect(() => {
    dispatch(updateBoard(createBoard(Number(boardSize))));
    }, [boardSize, dispatch]);
  
  return (
    <div>App</div>
  )
}

export default App

