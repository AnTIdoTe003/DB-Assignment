### Question 1.
Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

## Answer 1

From the shown image, it can be inferred that the relationship between the "Product" and "Product_Category" entities is a one-to-many relationship. Thus, a product can only be associated with one category, whereas a category can be associated with multiple products.



### Question 2.
How could you ensure that each product in the "Product" table has a valid category assigned to it?

## Answer 2.

The "Product" table has a foreign key called "category_id" which refers to the primary key ("id") of the "Product_Category" table.
This "category_id" column makes sure that each product has a category assigned to it. It could be set to NOT NULL to enforce this.
