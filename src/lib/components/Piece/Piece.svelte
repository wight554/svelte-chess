<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PieceColor } from '../../constants/piece-color';
	import type { PieceName } from '../../constants/piece-name';

	export let name: PieceName;
	export let color: PieceColor;
</script>

<Icon icon="mdi:chess-{name}" style="font-size: 64px;" {color} />
