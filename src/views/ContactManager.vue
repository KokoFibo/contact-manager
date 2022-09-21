<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i> New</router-link>
        </p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel distinctio, placeat alias exercitationem odio excepturi eveniet? Suscipit laborum natus aliquid ipsa sequi, inventore unde. Qui neque placeat impedit quia!
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Search Name" />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img" />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">Name : <span class="fw-bold">Name</span></li>
                  <li class="list-group-item">Email : <span class="fw-bold">Email</span></li>
                  <li class="list-group-item">Mobile : <span class="fw-bold">Mobile</span></li>
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link>
                <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                <router-link to="/contacts/delete/:contactId" class="btn btn-danger my-1"><i class="fa fa-trash"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
