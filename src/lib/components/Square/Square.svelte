<script lang="ts">
	import { SquareColor } from '../../constants/square-color';
	import { SquareState } from '../../constants/square-state';

	export let x: number, y: number, state: SquareState;

	$: color =
		state === SquareState.INACTIVE
			? (x % 2 === 1 && y % 2 === 1) || (x % 2 === 0 && y % 2 === 0)
				? SquareColor.BLACK
				: SquareColor.WHITE
			: SquareColor.BLUE;
</script>

<div style="background-color: {color}" on:click>
	<slot />
</div>

<style lang="scss">
	div {
		border: 2px solid #212121;
		height: 96px;
		width: 96px;
		display: flex;
		align-items: center;
		justify-content: center;

		margin-top: -2px;
		margin-left: -2px;
	}
</style>
