import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked titles = [
    {
      label: "Ember Rocks",
    },
    {
      label: "Ember Really Rocks",
    },
  ];

  @action changeTitles() {
    this.titles = this.titles.map((title) => {
      return  { label: title.label + '!'};
    });

    console.log("new titles:", this.titles);
  }
}
