<template>
  <div>
    <Breadcrumbs main="Ecommerce" title="Wishlist"/>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Wishlist</h5>
            </div>
            <div class="card-body">
              <div class="order-history table-responsive wishlist">
                <table class="table table-bordernone">
                  <thead>
                    <tr>
                      <th>Prdouct</th>
                      <th>Prdouct Name</th>
                      <th>Price</th>
                      <th>Availability</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="title-orders">
                      <td colspan="12">New Orders</td>
                    </tr>
                    <tr>
                      <td><img class="img-fluid img-60" src="../../assets/images/product/1.png" alt="#"></td>
                      <td>
                        <div class="product-name"><a href="#">Long Top</a></div>
                      </td>
                      <td>$21</td>
                      <td>In Stock</td>
                      <td><feather type="x-circle"></feather></td>
                    </tr>
                    <tr>
                      <td><img class="img-fluid img-60" src="../../assets/images/product/13.png" alt="#"></td>
                      <td>
                        <div class="product-name"><a href="#">Fancy watch</a></div>
                      </td>
                      <td>$50</td>
                      <td>In Stock</td>
                      <td><feather type="x-circle"></feather></td>
                    </tr>
                    <tr>
                      <td><img class="img-fluid img-60" src="../../assets/images/product/4.png" alt="#"></td>
                      <td>
                        <div class="product-name"><a href="#">Man shoes</a></div>
                      </td>
                      <td>$11</td>
                      <td>In Stock</td>
                      <td><feather type="x-circle"></feather></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>