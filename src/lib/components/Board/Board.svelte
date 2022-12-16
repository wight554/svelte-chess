<script lang="ts">
	import Square from '$lib/components/Square/Square.svelte';
	import Row from '$lib/components/Row/Row.svelte';
	import Piece from '$lib/components/Piece/Piece.svelte';
	import { board as boardState } from '$lib/stores/board';
	import type { PieceData } from '$lib/types/PieceData';
	import { SquareState } from '$lib/constants/square-state';
	import type { Coordinates } from '$lib/types/Coordinates';
	import equal from 'fast-deep-equal';

	let board: Array<Array<PieceData | null>>;

	boardState.subscribe((value) => {
		board = value;
	});

	let activePiece: Coordinates | null = null;

	$: getState = ({ x, y }: Coordinates) =>
		activePiece && x === activePiece.x && y === activePiece.y
			? SquareState.ACTIVE
			: SquareState.INACTIVE;

	$: handleSquareClick = ({ x, y }: Coordinates) =>
		activePiece && x === activePiece.x && y === activePiece.y
			? SquareState.ACTIVE
			: SquareState.INACTIVE;

	$: movePieceToCoordinates = ({ x, y }: Coordinates) => {
		boardState.update((board) => {
			if (activePiece) {
				board[y][x] = board[activePiece.y][activePiece.x];
				board[activePiece.y][activePiece.x] = null;
			}

			return board;
		});

		activePiece = null;
	};
</script>

<div>
	{#each board as row, y}
		<Row>
			{#each row as piece, x}
				<Square
					{x}
					{y}
					state={getState({ x, y })}
					on:click={() => {
						if (piece) {
							activePiece = { x, y };
						} else if (activePiece && !equal(activePiece, { x, y })) {
							movePieceToCoordinates({ x, y });
						}
					}}
				>
					{#if !!piece}
						<Piece name={piece.name} color={piece.color} />
					{/if}
				</Square>
			{/each}
		</Row>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>
