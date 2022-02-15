function a() {
    console.log(this);
    this.newletiable = 'hello';
}

let b = function() {
    console.log(this);
}

a();

console.log(newletiable);

b();

let c = {
    name: 'The c object',
    log: function() {
        let self = this;

        self.name = 'Updated c object';
        console.log(self);

        let setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();