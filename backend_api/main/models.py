from django.db import models
from django.contrib.auth.models import User

 #Vendor Model
class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null = True)

    def __str__(self):
        return self.user.username

#product Categories
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)
    
    detail = models.TextField(null=True)
    image = models.ImageField(upload_to='product_imgs/',null=True) 
    def __str__(self):
        return self.title
        
class Product(models.Model):
    category = models.ForeignKey(ProductCategory,on_delete=models.SET_NULL,null=True, 
                                 related_name ='category_product')
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()
    slug = models.CharField(max_length=300, unique=True, null = True)
    tags = models.TextField(null=True)
    image = models.ImageField(upload_to='product_imgs/',null=True) 
    demo_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title
    
    #exception added
    def tag_list(self):
        taglist=self.tags.split(',')
        return taglist
    
#customer Model
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)

    def __str__(self):
        return self.user.username
    
#Order Model
class Order(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)
    order_status = models.BooleanField(default=False)
    
    def __str__(self):
        return '%s' % (self.order_time)
    
#order items model
class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product,on_delete=models.CASCADE)  
    qty=models.IntegerField(default=1)
    price = models.DecimalField(max_digits=10,decimal_places=2,default=0)

    def __str__(self):
        return self.product.title
    
#Customer Address Model
class CustomerAddress(models.Model):
    cutomer = models.ForeignKey(Customer,on_delete = models.CASCADE, related_name='cutomer_addresses')
    address = models.TextField()
    default_address = models.BooleanField(default=False)
    def __str__(self):
        return self.address

#Product Rating and Reviews
class ProductRating(models.Model):
    customer = models.ForeignKey(Customer,on_delete=models.CASCADE,related_name='rating_customers')
    product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='product_ratings')
    rating=models.IntegerField()
    reviews=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)
 
    def __str__(self):
        return f'{self.rating} - {self.reviews}'
    

#product images model

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name='product_imgs')
    image = models.ImageField(upload_to='product_imgs/',null=True)

    def __str__(self):
        return self.product.title

#wishlist model   
class Wishlist(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete = models.CASCADE)

    class Meta:
        verbose_name_plural = "Wish List"

    def __str__(self):
        return f"{self.product.title}--{self.customer.user.first_name}"