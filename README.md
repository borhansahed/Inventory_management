# Inventory ManageMent

## First of all, You have to sign in with your email id. After that, you will be available to order our product. You can checked your order list by using your email.



## Our Product Api
### GET
#### https://inventory-management-82um.onrender.com/product

### POST
### Add your product with the help of below API
#### https://inventory-management-82um.onrender.com/addproduct

### DELETE 
### Delete your product with the help of below API
#### https://inventory-management-82um.onrender.com/addproduct/:productID


## Your orderList Api
### GET
### you can ordered your product by using that api with productId
#### https://inventory-management-82um.onrender.com/order/:email

### POST
### you can ordered your product by using that api with productId
#### https://inventory-management-82um.onrender.com/order/:productid

### DELETE
### you can delete your order item with the help of your item id.
#### https://inventory-management-82um.onrender.com/order/:itemid


## ADMIN
### A admin can check all user, all order, can delete user id and order

### GET
#### https://inventory-management-82um.onrender.com/admin/order/:email
#### https://inventory-management-82um.onrender.com/admin/user/:email

### DELETE
#### https://inventory-management-82um.onrender.com/admin/order/:userEmailId
#### https://inventory-management-82um.onrender.com/admin/user/:orderId