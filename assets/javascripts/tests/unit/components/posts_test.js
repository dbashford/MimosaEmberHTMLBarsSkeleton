import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('post-edit-form', "Unit - PostEditForm Component");

test('#init', function(assert) {
  assert.expect(1);

  var component = this.subject();
  assert.equal(component.get('isEditing'), false, "`isEditing` is false by default");
});

test('#edit', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.send('edit');

  assert.equal(component.get('isEditing'), true, "Sets `isEditing` to true");
});

test('#doneEdit', function(assert) {
  assert.expect(1);

  var component = this.subject();
  component.set('isEditing', true);
  component.send('doneEditing');

  assert.equal(component.get('isEditing'), false, "Sets `isEditing` to false");
});
