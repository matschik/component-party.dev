import Component from "@glimmer/component";
import { modifier } from "ember-modifier";

export default class InputFocused extends Component {
  autofocus = modifier((element) => element.focus());
}

/**
 * modifier: https://github.com/ember-modifier/ember-modifier
 *
 * See also:
 *  - https://github.com/emberjs/rfcs/pull/811
 *    - ember-modifier becomes default part of blueprint
 *  - https://github.com/emberjs/rfcs/pull/757
 *    - dependencyless support for using
 *       `autofocus = element => element.focus()`
 *       instead
 */
