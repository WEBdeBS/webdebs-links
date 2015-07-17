
export default class Storage {

  constructor(method) {
    this.method = method;
    try {
      this.links = JSON.parse(this.method.get('links'));
    } catch(e) {
      this.links = [];
    }
  }

  add(value) {
    this.links.push(value);
    this.method.set('links', JSON.stringify(this.links));
  }

  contains(value) {
    return this.links.indexOf(value) > -1;
  }

}
