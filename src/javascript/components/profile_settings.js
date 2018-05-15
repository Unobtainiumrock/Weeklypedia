
function profileSettings() {
  $('#app').html(`
  <div class="row-fluid">
  <div class="col-md-8">
    <h2>Profile Settings</h2>
    <form>
      <div class="field">
        <label for="email">Email</label>
        <input class="full_name" type="text" name="full-name" />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input class="full_name" type="text" name="full-name" />
      </div>
      <div class="field">
        <label for="preferences">Change Preferences</label>
        <button type="button" class="btn btn-warning" id="go-preferences">Go to Preferences</button>
      </div>
    </form>
    <a href="#">
      <button class="btn btn-primary" type="submit" name="button">Save Changes</button>
    </a>
    <a href="#">
      <button class="btn btn-secondary" type="cancel" name="button">Cancel</button>
    </a>
  </div>
</div>
  `)
}
