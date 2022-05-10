import Component, { tracked } from '@glimmer/component';

export default class CounterComponent extends Component {
	@tracked name = 'John';

	constructor() {
		super(...arguments);
		this.name = 'Jane';
	}
}
