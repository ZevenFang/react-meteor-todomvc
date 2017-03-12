import {Meteor} from 'meteor/meteor';

let todo = new Meteor.Collection('todo');

Meteor.publish('todo', function () {
  return todo.find();
});

todo.allow({
  insert(){
    return true;
  },
  update(){
    return true;
  },
  remove(){
    return true;
  }
});

todo.before.insert(function (userId, doc) {
  doc.userId = userId;
  doc.createdAt = Date.now();
});

todo.before.update(function (userId, doc) {
  doc.updatedAt = Date.now();
});

export default todo;