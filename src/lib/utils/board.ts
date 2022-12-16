import { BOARD_SIZE } from '$lib/constants/board-size';
import { PieceColor } from '$lib/constants/piece-color';
import { PieceName } from '$lib/constants/piece-name';
import type { PieceData } from '$lib/types/PieceData';

export const generateBoard = (): Array<Array<PieceData | null>> => {
	return new Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null)).map((row: Array<null>, y) => {
		return row.map((piece, x) => {
			const color = y > 1 ? PieceColor.WHITE : PieceColor.BLACK;

			switch (y) {
				case 0:
				case 7: {
					switch (x) {
						case 0:
						case 7:
							return {
								name: PieceName.ROOK,
								color
							};
						case 1:
						case 6:
							return {
								name: PieceName.KNIGHT,
								color
							};
						case 2:
						case 5:
							return {
								name: PieceName.BISHOP,
								color
							};
						case 3:
							return {
								name: PieceName.QUEEN,
								color
							};
						case 4:
							return {
								name: PieceName.KING,
								color
							};
						default:
							return piece;
					}
				}
				case 1:
				case 6:
					return {
						name: PieceName.PAWN,
						color
					};
				default:
					return piece;
			}
		});
	});
};
