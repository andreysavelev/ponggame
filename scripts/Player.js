import Rect from './Rect';

export default class Player extends Rect {
	constructor() {
		super(20, 100);

		this.score = 0;
	}
}