module.exports = {
    init: function(b) {
      eval(b.slice(0, 2432).toString());
      a.init(b.slice(2432));
      this.test = a.test;
    }
}